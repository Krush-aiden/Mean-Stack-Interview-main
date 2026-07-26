# React Interview Plan

> Consolidated interview notes, scenario checklist, and focused preparation plan for React/frontend roles.

---

## Recent Interview Marathon — Notes & Lessons

### Overview

You completed a 2-hour senior frontend interview that emphasized machine coding and core JavaScript internals. The rounds pushed on reusability, accessibility, deep JS behavior, and React performance trade-offs.

### Rounds

- **Machine Coding (90 mins)**: Build a Star Rating component from scratch. Key focus: reusability, half-star rendering, keyboard accessibility, clear API and props, and modular styling.
- **JS Deep Dive**: Event Loop and Promises — predicting outputs for nested `setTimeout` and async/await blocks under pressure.
- **React Patterns**: When to use `useMemo` vs `useCallback`, costs of premature optimization, and strategies to avoid unnecessary re-renders.

### What interviewers were assessing

- **Edge cases:** e.g., API failures during a debounced search, handling half-star states, keyboard focus fallback.
- **Code quality & structure:** clear naming, small focused components, folder structure, and readable logic.
- **Optimization:** avoiding unnecessary renders, memoization where it matters, and using profiling evidence rather than guesswork.

### Realistic Mistake (learning moment)

You struggled with a closure/useEffect cleanup question. You walked through the problem, explained your thought process, refactored, and recovered. Interviewers valued debugging approach and clear reasoning.

### Key Takeaway

Fundamentals matter more than framework APIs. Practice event loop outputs, closure patterns, and build accessible reusable components under time pressure.

---

## Scenario-Based Checklist (practical questions to practice)

Use these as mock interview prompts and practical tasks. For each, implement a short demo or write a 2–3 minute verbal answer.

- App takes 6–8 sec to load → Performance improvements (code splitting, optimize critical rendering path, LCP tuning).
- Users report app getting slow over time → Find memory leaks (DevTools heap snapshots, remove listeners, avoid large retained closures).
- Dashboard depends on 5 APIs → Handle partial failures (circuit breaker, per-widget retries, fallback UI, parallel loading with timeouts).
- Role-based app (Admin/Manager/User) → Secure UI + routes + APIs (permission checks, route guards, token expiry handling).
- Multiple lazy modules need shared state → Global state strategy (TanStack Query, Zustand, or context with selectors).
- Dynamic forms from API data → Build reactive forms (schema-driven form rendering, validation strategy, optimistic saves).
- App breaks after framework upgrade → Debugging strategy (bisect, lock deps, isolate breaking commit, use feature flags).
- Multiple teams deploying → Micro frontend design (Module Federation, contracts, shared libs, versioning).
- API getting called multiple times → Debug duplicate requests (dedupe logic, request cancellation, network tab analysis).
- SEO requirements → SSR/SSG strategy (Next.js or pre-rendering, meta tags, structured data).
- Image thumbnail creation & storage → Generate thumbnails server-side (or at upload), store in object storage (S3/Cloud), serve via CDN.

---

## Practice Tasks (short actionable exercises)

1. Implement accessible Star Rating component (supports half-stars, keyboard + screen reader labels, prop-driven controlled/uncontrolled modes).
2. Write a small snippet and predict outputs for combinations of `setTimeout`, `Promise.resolve().then`, and `async/await` to rehearse the event loop.
3. Create a debounced search demo and handle API failure cases gracefully with retries and user feedback.
4. Profile a React component (Profiler + Flame Chart) and add targeted `useMemo`/`useCallback` only where CPU/time shows bottlenecks.
5. Reproduce a closure/useEffect cleanup bug and fix it — practice explaining the fix verbally in 60–90 seconds.

---

## Interview Prep Schedule (short list)

- Daily: 2 hrs focused React interviewing (machine coding practice, 1-2 problems) + 1 hr JS fundamentals revision.
- Weekly: 1 mock interview (90 mins coding + 30 mins review).
- Before interviews: record 2–3 short demos (auth flow, rating component, debounced search) to quickly share with interviewers.

---

## Notes on Presentation / Resume Wording

- Phrase migration or backend work as demonstrated projects: e.g., "Rebuilt backend for Foodsy from Express to FastAPI (in progress) — implemented auth, payment webhooks, file uploads, and WebSocket chat."  Be honest about timelines.
- Highlight performance and accessibility wins with metrics when available (e.g., reduced TTFB, improved LCP by X%).

---

## Coforge Interview — Notes (React.js Frontend Engineer)

### Round 1 — Quick JS & Coding

1. **Brief intro:** Short summary of role, key responsibilities, and tech stack.

2. **Output questions:**

- Question A:

```js
const obj = { name: "A", getName() { return this.name; } };
const fn = obj.getName;
console.log(fn());
```

- Answer: When the method is assigned to `fn`, it loses its object binding. In **non-strict mode (browser)** `this` is `window` → `window.name` is `""` (empty string). In **Node.js** `this` is `global` → `global.name` is `undefined`. In **strict mode / ES modules** `this` is `undefined` → throws `TypeError`. Fix: `obj.getName.bind(obj)()` or call as `obj.getName()`.

- Question B (event loop):

```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

- Answer order: `Start`, `End`, `Promise`, `Timeout` — microtasks (`Promise.then`) run after the current stack but before macrotasks (`setTimeout`).

1. **What is a Promise? Use cases:**

- A Promise represents an eventual value/error of an async operation. Use to handle async work: network calls, timers, file I/O. Resolve with `resolve(value)` and handle via `.then()` or `async/await`.

1. **Write a promise that resolves:**

```js
function resolveAfter(ms, value) {
 return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

resolveAfter(1000, "Done!").then(v => console.log(v)); // logs "Done!" after 1s
```

1. **Return sorted unique array:**

```js
const input = [2,1,3,4,2,5,4,6,7,4];
const uniqueSorted = Array.from(new Set(input)).sort((a,b)=>a-b);
// => [1,2,3,4,5,6,7]
```

1. **Todo list app (requirements):**

- Minimal approach: controlled input, local state array, add button pushes new item, map renders list with delete button that filters it out.
- Quick React snippet:

```jsx
function TodoApp(){
 const [text,setText]=React.useState('');
 const [items,setItems]=React.useState([]);
 const add=()=>{ if(!text) return; setItems(s=>[...s,{id:Date.now(),text}]); setText(''); }
 const del=id=>setItems(s=>s.filter(i=>i.id!==id));
 return (
  <div>
   <input value={text} onChange={e=>setText(e.target.value)} />
   <button onClick={add}>Add</button>
   <ul>{items.map(i=> <li key={i.id}>{i.text} <button onClick={()=>del(i.id)}>Delete</button></li>)}</ul>
  </div>
 );
}
```

### Round 2 — Architecture & React

1. **Intro:** Very brief role/context recap.

2. **How to optimize a React app:**

- Use code-splitting, lazy loading, memoization (`useMemo`, `useCallback`, `React.memo`), avoid unnecessary renders, optimize lists with keys and virtualization, cache server data (RTK Query or TanStack Query), and measure with Profiler.

1. **Flexbox vs Grid for product layout:**

- Prefer **CSS Grid** for two-dimensional layouts (rows+columns) like product grids. Flexbox is better for 1D (row or column) alignment.

1. **Redux / Redux Toolkit awareness:**

- Mention experience, when you used RTK (slices, createAsyncThunk, RTK Query). Explain trade-offs vs Context for global state.

1. **How to subscribe to a Redux store:**

- Use `store.subscribe(listener)` for low-level subscriptions. In React apps prefer `useSelector` (via `react-redux`) to read slices and re-render on changes.

1. **What is RTK Query? Difference from axios/fetch:**

- RTK Query is a data fetching & caching abstraction built on Redux Toolkit that provides caching, invalidation, polling, and auto-generated hooks. `axios`/`fetch` are low-level request libraries without built-in cache/invalidation.

1. **Making an app responsive:**

- Use fluid layouts, CSS Grid/Flexbox, media queries, responsive images (`srcset`), rem-based sizing, and mobile-first design.

1. **Use of React.memo / useCallback / useMemo:**

- Explain specific examples: `React.memo` for pure child components, `useCallback` to avoid recreating handlers passed to children, `useMemo` to cache expensive computations.

1. **Code splitting implementation:**

- Use dynamic `import()` + `React.lazy` + `Suspense` for route or component-level code-splitting. Also split vendor bundles and use bundler config (webpack/rollup) or Next.js built-in splitting.

1. **Prevent re-creation of functions passed to child:**

- Wrap handler with `useCallback` and ensure correct dependency array; move stable functions outside render or into `useEvent`/refs if needed.

1. **Todo app variant (number multiply by 5):**

- Add validation when adding item; if `!isNaN(Number(value))` treat as number and push `Number(value)*5`, else push as-is.

```jsx
function TodoApp() {
  const [text, setText] = React.useState('');
  const [items, setItems] = React.useState([]);

  const add = () => {
    if (!text.trim()) return;
    const isNum = !isNaN(Number(text));
    const display = isNum ? Number(text) * 5 : text;
    setItems(prev => [...prev, { id: Date.now(), value: display }]);
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {items.map(i => (
          <li key={i.id}>{i.value}</li>
        ))}
      </ul>
    </div>
  );
}
```

1. **Is app production-ready? Common flaws to check:**

- Missing input validation, no persistence (localStorage/API), lack of accessibility (labels, keyboard), no error handling, performance issues on large lists (use virtualization), missing tests.

---

## EY Interview — Notes (Ernst & Young) — React.js Frontend Engineer

### Round Structure

- **Intro & Project scope:** Short intro + explain current project responsibilities and tech stack.
- **Coding / Algorithm:** Small JS/array problems (reduce, merge+unique+sort).
- **Frontend fundamentals:** HTML/CSS semantics, accessibility, CSS specificity.
- **JS & React basics:** map/filter/reduce, prototypal inheritance, promises, controlled components.
- **State & Testing:** State management choices, Context vs Redux, testing experience.
- **TypeScript:** `interface` vs `type` distinctions.

### Questions & Concise Answers / Hints

1. **Find object with max age (hint: reduce):**

```js
const users = [
 { name: 'abc', age: 35, isAdmin: true },
 { name: 'xyz', age: 25, isAdmin: true },
 { name: 'pqr', age: 30, isAdmin: false }
];

const maxAgeUser = users.reduce((max, user) => (user.age > max.age ? user : max), users[0]);
console.log(maxAgeUser);
```

1. **Merge arrays, sort ascending, unique result:**

```js
const arr1 = [1,2,3,4];
const arr2 = [2,4,5,6,7,8,9];
const merged = Array.from(new Set([...arr1, ...arr2])).sort((a,b)=>a-b);
```

1. **What are semantic elements? How help accessibility?**

- HTML5 semantic elements (header, nav, main, article, section, footer) convey document structure to browsers and assistive tech (screen readers), improving accessibility and SEO.

1. **What is specificity in CSS?**

- Specificity determines which CSS rule applies when multiple match: inline styles > IDs > classes/attributes/pseudo-classes > elements/pseudo-elements. Calculate as weight (a,b,c,d).

1. **Difference between map(), filter(), reduce():**

- `map()` transforms each element → new array of same length.
- `filter()` returns subset matching predicate.
- `reduce()` accumulates array into single value (sum/object/other).

1. **What is prototypal inheritance?**

- JS objects inherit properties from their prototype (`[[Prototype]]`). Functions provide `prototype` for instances; lookup walks prototype chain until `null`.

1. **What is a Promise?**

- An object representing eventual completion/failure of async op. States: pending → fulfilled/rejected. Use `.then()/.catch()` or `async/await`.

1. **What is a controlled component?**

- A form input whose value is controlled via React state (`value` prop + `onChange`) so React owns the source of truth.

1. **How did you manage state in project? Context API, Redux Toolkit, etc.?**

- Explain actual choice: e.g., "Used Context + local state for UI-level state; RTK Query for server state and caching. Chose Zustand for small global needs." Mention re-render mitigation strategies (selectors, memo).

1. **Context API purpose?**

- Provide scoped global-like data (theme, auth) without prop drilling. Not a replacement for complex caches; use for low-frequency updates or read-mostly data.

1. **Difference between some() and find():**

- `some()` returns boolean if any element matches predicate. `find()` returns the first matching element or `undefined`.

1. **What is async and deferred (script attributes)?**

- `async` downloads script and executes ASAP (order not guaranteed); `defer` downloads in parallel but executes after HTML parsing in document order. Use `defer` for dependent scripts that require DOM.

1. **Have you written test cases?**

- Briefly list frameworks used (Jest, RTL, Playwright). Mention key tests: unit for utilities, integration for hooks, E2E for flows.

1. **What is interface vs type in TypeScript?**

- `interface` mainly for object shapes and is extendable/mergeable. `type` is more general (unions, tuples). In many cases interchangeable; prefer `interface` for public object contracts.

---

_File created from recent interview notes. Use this as your central React interview checklist. Practice code snippets and rehearse concise verbal answers (30–90s each)._
