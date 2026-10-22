Here is the updated **Top 15 Most-Asked Lexical Interview Questions & Answers**, modified to include key questions on **Custom Node Implementation, Node Mutations, Node Replacement, and Node Type Guards**:

```markdown
# ⚡ Lexical Editor - Top 15 Most-Asked Interview Questions & Answers

> Concise, high-impact prep checklist for Frontend & Full-Stack Engineers working with Meta's Lexical text editing framework.

---

## 📖 ANSWERS

### 1. What are the core Node types in Lexical?
* **`RootNode`:** Top-level structural container; every editor instance has exactly one.
* **`ElementNode`:** Parent container nodes that hold other children (e.g., `ParagraphNode`, `HeadingNode`, `ListNode`).
* **`TextNode`:** Leaf nodes containing raw text content and formatting bitmasks (bold, italic, code).
* **`DecoratorNode`:** Nodes that render arbitrary UI elements/React components into the editor (e.g., images, embeds, widgets).
* **`LineBreakNode`:** Represents an explicit line break (`<br>`).

---

### 2. How do you implement a custom `DecoratorNode` (e.g., for Images)?

```typescript
export class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string;
  __alt: string;

  static getType(): string { return 'image'; }
  static clone(node: ImageNode): ImageNode { 
    return new ImageNode(node.__src, node.__alt, node.__key); 
  }

  constructor(src: string, alt: string, key?: NodeKey) {
    super(key);
    this.__src = src;
    this.__alt = alt;
  }

  createDOM(): HTMLElement { return document.createElement('div'); }
  updateDOM(): boolean { return false; }
  decorate(): JSX.Element { 
    return <ImageComponent alt="{this.__alt}" src="{this.__src}"/>; 
  }

  static importJSON(json: SerializedImageNode): ImageNode { 
    return new ImageNode(json.src, json.alt); 
  }
  exportJSON(): SerializedImageNode { 
    return { type: 'image', src: this.__src, alt: this.__alt, version: 1 }; 
  }
}

```

---

### 3. What are Node Mutation Listeners and how do you track node changes?

Mutation listeners allow you to observe when specific node types are created, updated, or destroyed in the DOM.

```typescript
editor.registerMutationListener(ImageNode, (nodeMutations) => {
  for (const [nodeKey, mutation] of nodeMutations) {
    // mutation is 'created' | 'updated' | 'destroyed'
    console.log(`Node ${nodeKey} was ${mutation}`);
  }
});

```

**Key Use Cases:** Synchronizing external state, cleaning up media uploads when an image node is destroyed, or triggering side effects post-reconciliation.

---

### 4. What is Node Replacement in Lexical and when would you use it?

Node replacement allows you to override or extend built-in Lexical nodes (like `TextNode` or `ParagraphNode`) globally without breaking existing editor functionality.

```typescript
const editorConfig = {
  nodes: [
    { 
      replace: TextNode, 
      with: (node: TextNode) => new CustomTextNode(node.__text) 
    }
  ]
};

```

**Use Case:** Substituting core text or element behaviors globally to add extra properties, custom inline styling, or specialized rendering hooks across the entire application.

---

### 5. How do type checks work for Lexical Nodes (`$isNodeOfType` vs `$isTextNode`)?

Lexical provides generated type guards for reliable TypeScript checks and runtime node identification.

```typescript
// ✅ Preferred: Helper type guard (type-safe)
if ($isTextNode(node)) {
  console.log(node.getTextContent());
}

// ⚠️ Manual check (less type-safe)
if (node.getType() === 'text') {
  // Requires manual casting
}

```

---

### 6. What is the `EditorState` in Lexical?

`EditorState` is an **immutable snapshot** of the editor’s content and selection at a specific point in time. It holds:

1. The **Node Tree** (document data structure).
2. The **Selection State** (`RangeSelection`, `NodeSelection`, or `GridSelection`).

Lexical maintains **two states** at any given moment: the **current (committed) state** currently rendered in the DOM, and a **pending state** being mutated during an active update cycle.

---

### 7. What is the update cycle in Lexical?

1. **Trigger:** An update starts via `editor.update(() => { ... })`.
2. **Pending Mutation:** Code mutates the pending `EditorState` inside the callback.
3. **Transforms:** Node transforms run on dirty (modified) nodes to enforce constraints.
4. **Reconciliation:** Lexical diffs the pending `EditorState` against the current `EditorState`.
5. **DOM Batching:** Only the changed nodes apply targeted mutations directly to the DOM.
6. **Notification:** Listeners (`registerUpdateListener`) fire to notify subscribers of the state commitment.

---

### 8. What are Lexical transforms and how do they work on Nodes?

**Transforms** are normalization functions registered on specific node types that run automatically whenever a node of that type is marked dirty.

**Use Cases:**

* Auto-converting raw URL text strings into link nodes.
* Enforcing constraint rules (e.g., merging adjacent text nodes with identical formatting).
* Cleaning up trailing empty element nodes.

---

### 9. What is the Command Pattern in Lexical and why is it used?

Instead of adding direct DOM event listeners, Lexical dispatches internal commands via `editor.dispatchCommand()`.

**Why it's used:**

* Allows multiple plugins to register listeners (`editor.registerCommand()`) for the same event (like `KEY_ENTER_COMMAND` or `PASTE_COMMAND`).
* Supports **prioritization** (`COMMAND_PRIORITY_CRITICAL`, `HIGH`, `EDITOR`, `LOW`).
* Handlers can return `true` to stop command propagation to lower-priority plugins.

---

### 10. How does Selection work in Lexical?

Lexical abstracts selection into three distinct models rather than relying directly on window selection:

* **`RangeSelection`:** Standard text selection between an `anchor` (start point) and `focus` (end point).
* **`NodeSelection`:** Selection of discrete non-text nodes (e.g., selecting an image `DecoratorNode`).
* **`GridSelection`:** Used for multi-cell table selections.

Each point in a `RangeSelection` tracks a node `key`, an integer `offset`, and a node `type` (`element` or `text`).

---

### 11. What is the `$` prefix convention in Lexical?

Functions prefixed with `$` (e.g., `$getRoot()`, `$getSelection()`, `$createParagraphNode()`) are **state-bound helpers**.

**Rule:** They can **only** be executed synchronously inside an `editor.update()` or `editor.read()` callback. Calling a `$` function outside an active Lexical update or read context throws a runtime error because no active `EditorState` is exposed.

---

### 12. What is the difference between `editor.update()` and `editor.read()`?

* **`editor.update()`:** Opens a writable pending `EditorState`. Allows node creation, property mutation, and deletion. Triggers state reconciliation and DOM updates afterwards.
* **`editor.read()`:** Provides read-only access to the current committed `EditorState`. Node mutations are strictly prohibited, and no DOM reconciliation is triggered.

---

### 13. How do plugins work in Lexical?

Plugins are isolated component abstractions (typically React components when using `@lexical/react`) that access the active editor instance via the `useLexicalComposerContext()` hook.

**Structure:**
Plugins attach listeners, commands, and transforms inside a `useEffect` lifecycle hook and return a cleanup function to unbind them when unmounted.

---

### 14. How do you serialize and deserialize content in Lexical?

* **JSON (Recommended):** Nodes implement `exportJSON()` and `importJSON()`.
* *Serialize:* `const jsonString = JSON.stringify(editor.getEditorState().toJSON());`
* *Deserialize:* `editor.setEditorState(editor.parseEditorState(jsonState));`


* **HTML:** Handled via the `@lexical/html` utility package using `$generateHtmlFromNodes(editor)` and `$generateNodesFromDOM(editor, dom)`.

---

### 15. What are the most common pitfalls when working with Lexical?

1. **Calling `$` functions outside context:** Invoking helper functions outside `update()` or `read()`.
2. **Direct property mutation:** Mutating node properties directly (`node.__text = 'x'`) instead of using setter methods (`node.setText('x')`), which breaks immutability tracking and state dirtiness.
3. **Missing Node Registration:** Forgetting to pass custom node classes in the initial `LexicalComposer` `nodes` configuration array.
4. **Infinite Transform Loops:** Registering node transforms that mark nodes dirty without exit conditions, causing the transform loop to execute continuously.
5. **Command Propagation Mistakes:** Forgetting to return `true` from command listeners when an event has been handled, causing downstream plugins to execute unintended duplicate logic.

```

```