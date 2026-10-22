Here is your fully updated, structured **React Interview Master Plan & Log**.

Every question from your **Coforge** and **EY** interviews has been tagged with your standard preparation categories (**`Know Code + Implementation`**, **`Theory + Conceptual`**, or **`High-Level Awareness Only`**) so you know exactly how to revise them for 4+ Yrs Exp rounds.

---

# 🚀 React Interview Master Plan & Log

> Consolidated senior frontend interview notes, real-world scenario checklist, and tagged company interview logs.

---

## 📌 Recent Senior Interview Marathon — Core Lessons

### Overview

A 2-hour senior frontend interview emphasizing machine coding and JavaScript internals. The rounds pushed on reusability, accessibility, deep JS engine behavior, and React performance trade-offs.

### Round Breakdown

* **Machine Coding (90 mins):** Build an accessible Star Rating component from scratch. Key focus: reusability, half-star rendering, keyboard accessibility (`Tab`/`Arrow` navigation), clear API/props design, and modular CSS.
* **JS Deep Dive:** Event Loop and Promises — predicting output order for nested `setTimeout`, microtasks, and `async/await` blocks under time pressure.
* **React Patterns:** `useMemo` vs `useCallback`, measuring costs of premature optimization, and strategies to prevent unnecessary child re-renders.

> 💡 **Realistic Mistake (Learning Moment):**
> During a closure & `useEffect` cleanup question, you briefly tripped up on stale values. Instead of panicking, you walked through your thought process out loud, refactored the dependencies/refs, and recovered cleanly. Interviewers valued the live debugging approach and clear reasoning over instant perfection.

> 🔑 **Key Takeaway:**
> Framework APIs change, but JS fundamentals don't. Prioritize event loop output practice, stale closure patterns, and building accessible UI components under time limits.

---

## 🛠️ Scenario-Based Checklist (System Design & Production)

Practice delivering concise 2–3 minute verbal answers or short pseudo-code demos for these high-frequency senior scenarios:

* 🚨 **App takes 6–8 sec to load:** Performance budget tuning, route-based code splitting (`React.lazy`), critical rendering path optimization, LCP/FCP tuning.
* 🐢 **App gets slow over time:** Finding memory leaks using Chrome DevTools Heap Snapshots, unremoved event listeners, uncleared `setInterval`, or retaining large object closures.
* 🌐 **Dashboard depends on 5 independent APIs:** Partial failure handling, per-widget retry mechanisms, fallback loading skeletons, and `Promise.allSettled`.
* 🔒 **Role-based App (Admin / Manager / User):** Security UI guards, dynamic route protection, permission matrix hooks, and handling JWT token expiration gracefully.
* 📦 **Multiple lazy modules sharing state:** Global state architecture (TanStack Query for server state, Zustand or Context with selectors for UI state).
* 📋 **Dynamic forms generated from API JSON:** Schema-driven dynamic form rendering, Yup/Zod schema validation, optimistic UI updates.
* 💥 **App breaks after framework upgrade:** Debugging strategy via `git bisect`, dependency locking, isolating breaking commits, and feature flags.
* 🏗️ **Multiple teams deploying independently:** Micro Frontend design using Webpack Module Federation, shared contracts, and versioning strategies.
* 🔄 **API getting called multiple times on render:** Request deduplication, cancelling stale requests via `AbortController`, and network analysis.
* 🔍 **SEO & Social Sharing Requirements:** SSR/SSG strategy using Next.js, dynamic meta tag updates, structured JSON-LD data.
* 🖼️ **Image Thumbnail Creation & Storage:** Server-side thumbnail generation on upload, S3/Cloud Storage, delivering via CDN with responsive `srcset`.

---

## 🎯 Short Actionable Practice Tasks

1. **Machine Coding:** Implement an accessible Star Rating component supporting half-stars, keyboard navigation (`ArrowRight`/`ArrowLeft`), and controlled/uncontrolled state modes.
2. **Event Loop Drills:** Write and solve 5 output-tracing snippets mixing `setTimeout`, `Promise.then`, `queueMicrotask`, and `async/await`.
3. **Debounced Search:** Build a search input with request debouncing, race condition cancellation using `AbortController`, and retry UI on API failure.
4. **Performance Profiling:** Profile a slow React component using React DevTools Flame Chart and apply targeted `useMemo` / `useCallback` / `React.memo` based on measured bottleneck data.
5. **Closure Cleanup Bug:** Reproduce a stale closure bug inside `useEffect` with a timer, fix it using `useRef` or updater functions, and practice explaining the fix verbally in 90 seconds.

---

## 📅 Interview Prep Schedule

* **Daily Routine:**
* `2 hrs` — Machine coding practice (Component design or custom hooks).
* `1 hr` — Core JS fundamentals & output-tracing drills.


* **Weekly Goal:** 1 full mock interview (90 mins coding + 30 mins system design review).
* **Pre-Interview Setup:** Maintain 3 ready-to-share GitHub demos (Auth flow, Reusable Star Rating, Debounced Search with AbortController).

---

## 📝 Presentation & Resume Positioning

* **Project Highlights:** Frame migration/backend work as completed impact: *"Rebuilt Foodsy backend services from Express to FastAPI — implemented auth, payment webhooks, file uploads, and WebSocket chat."*
* **Metrics Matter:** Highlight performance/accessibility wins using metrics whenever possible (*"Reduced TTFB by 35% and improved LCP from 4.2s to 1.8s"*).

---

## 🏢 Company Log 1: Coforge Interview (React.js Frontend Engineer)

### Round 1 — Quick JS & Coding

1. **Brief Intro** *(High-Level Awareness Only)*
* Short recap of role, primary responsibilities, and current tech stack.


2. **Output Tracing Questions**
* **Question A (`this` binding):** *(Know Code + Implementation — Output-Tracing)*
```js
const obj = { name: "A", getName() { return this.name; } };
const fn = obj.getName;
console.log(fn());

```


* **Answer:** When assigned to `fn`, the method loses its object context.
* In **Non-strict mode (Browser):** `this` is `window` $\rightarrow$ `window.name` returns `""` (empty string).
* In **Node.js:** `this` is `global` $\rightarrow$ returns `undefined`.
* In **Strict mode / ES Modules:** `this` is `undefined` $\rightarrow$ throws `TypeError`.
* **Fix:** `const fn = obj.getName.bind(obj);`




* **Question B (Event Loop Order):** *(Know Code + Implementation — Output-Tracing)*
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

```


* **Answer Order:** `Start` $\rightarrow$ `End` $\rightarrow$ `Promise` $\rightarrow$ `Timeout`. Microtasks (`Promise.then`) run immediately after the synchronous stack empties, before macrotasks (`setTimeout`).




3. **What is a Promise? Use cases** *(Theory + Conceptual)*
* Represents the eventual completion or failure of an asynchronous operation. Used for network calls, file I/O, and delayed computations.


4. **Write a Promise that resolves after a delay:** *(Know Code + Implementation)*
```js
function resolveAfter(ms, value) {
    return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
resolveAfter(1000, "Done!").then(console.log); // "Done!" after 1 sec

```


5. **Return sorted unique array:** *(Know Code + Implementation)*
```js
const input = [2, 1, 3, 4, 2, 5, 4, 6, 7, 4];
const uniqueSorted = Array.from(new Set(input)).sort((a, b) => a - b);
// [1, 2, 3, 4, 5, 6, 7]

```


6. **Todo List App (Basic Machine Coding):** *(Know Code + Implementation)*
```jsx
function TodoApp() {
    const [text, setText] = React.useState('');
    const [items, setItems] = React.useState([]);

    const add = () => {
        if (!text.trim()) return;
        setItems(prev => [...prev, { id: Date.now(), text }]);
        setText('');
    };
    const del = id => setItems(prev => prev.filter(item => item.id !== id));

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={add}>Add</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.text} <button onClick={() => del(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

```



---

### Round 2 — Architecture & React Deep Dive

1. **How to optimize a React app:** *(Theory + Conceptual)*
* Route/Component code splitting (`React.lazy`), memoization (`useMemo`, `useCallback`, `React.memo`), windowing/virtualization for long lists (`react-window`), cache optimization (RTK Query / TanStack Query), and Profiler analysis.


2. **Flexbox vs CSS Grid for product layout:** *(Theory + Conceptual)*
* Use **CSS Grid** for 2D layouts (rows and columns like product matrices). Use **Flexbox** for 1D content alignment (navbars, item cards).


3. **Redux / Redux Toolkit awareness:** *(Theory + Conceptual)*
* Slices, `createAsyncThunk`, and centralized state management trade-offs vs React Context.


4. **How to subscribe to a Redux store:** *(Theory + Conceptual)*
* Core Redux: `store.subscribe(listener)`. React integration: `useSelector` hook to subscribe to specific slice changes and prevent unnecessary re-renders.


5. **What is RTK Query? Difference from axios/fetch:** *(Theory + Conceptual)*
* RTK Query is an integrated data fetching, caching, and auto-refetching layer built on Redux. `axios`/`fetch` are basic HTTP clients without out-of-the-box cache or mutation invalidation.


6. **Making an app responsive:** *(Theory + Conceptual)*
* Fluid layouts, CSS Grid/Flexbox, media queries, mobile-first approach, `rem`/`em` units, responsive images (`srcset`).


7. **Use of `React.memo` / `useCallback` / `useMemo`:** *(Theory + Conceptual)*
* `React.memo` skips re-rendering pure components when props are unchanged. `useCallback` preserves function reference across renders. `useMemo` caches expensive CPU calculation results.


8. **Code splitting implementation:** *(Theory + Conceptual)*
* Dynamic `import()`, `React.lazy()`, and `<Suspense fallback="{<Loader"/>}>`. Vendor chunk splitting at bundler level.


9. **Prevent re-creation of functions passed to child:** *(Know Code + Implementation)*
* Wrap callback in `useCallback` with correct dependencies or pass stable dispatch functions.


10. **Todo App Variant (Number multiplied by 5):** *(Know Code + Implementation)*
```jsx
function TodoApp() {
    const [text, setText] = React.useState('');
    const [items, setItems] = React.useState([]);

    const add = () => {
        if (!text.trim()) return;
        const num = Number(text);
        const isNum = !isNaN(num) && text.trim() !== '';
        const displayValue = isNum ? num * 5 : text;

        setItems(prev => [...prev, { id: Date.now(), value: displayValue }]);
        setText('');
    };

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={add}>Add</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        </div>
    );
}

```


11. **Production-readiness checks for UI apps:** *(Theory + Conceptual)*
* Input sanitization/validation, persistent storage fallback, accessibility compliance (WCAG ARIA roles), error boundaries, list virtualization, and unit test coverage.



---

## 🏢 Company Log 2: EY Interview (Ernst & Young — React.js Frontend Engineer)

1. **Find object with max age (`reduce`):** *(Know Code + Implementation)*
```js
const users = [
    { name: 'abc', age: 35, isAdmin: true },
    { name: 'xyz', age: 25, isAdmin: true },
    { name: 'pqr', age: 30, isAdmin: false }
];

const maxAgeUser = users.reduce((max, user) => (user.age > max.age ? user : max), users[0]);
// { name: 'abc', age: 35, isAdmin: true }

```


2. **Merge arrays, sort ascending, unique result:** *(Know Code + Implementation)*
```js
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 5, 6, 7, 8, 9];
const merged = Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

```


3. **What are semantic elements? How do they help accessibility?** *(Theory + Conceptual)*
* Elements like `<header>`, `<nav>`, `<main>`, `<article>` convey meaning to browsers and screen readers, establishing a accessible DOM tree structure for assistive devices and SEO.


4. **What is specificity in CSS?** *(Theory + Conceptual)*
* Algorithm determining which CSS rule applies: `Inline (1000)` > `IDs (100)` > `Classes/Attributes/Pseudo-classes (10)` > `Elements (1)`.


5. **Difference between `map()`, `filter()`, and `reduce()`:** *(Theory + Conceptual)*
* `map()` transforms each element into a new array of equal length. `filter()` returns a subset matching a condition. `reduce()` accumulates array items down to a single value.


6. **What is prototypal inheritance?** *(Theory + Conceptual)*
* Objects inherit properties and methods directly from other objects via their internal `[[Prototype]]` link, walking up the chain until reaching `null`.


7. **What is a Promise?** *(Theory + Conceptual)*
* An object representing eventual completion or failure of an async operation with states: `pending`, `fulfilled`, or `rejected`.


8. **What is a controlled component?** *(Theory + Conceptual)*
* A form element whose current value is driven by React state (`value` + `onChange`), making React the single source of truth.


9. **State management choices (Context API vs Redux Toolkit):** *(Theory + Conceptual)*
* Context for low-frequency UI state (themes, user settings). RTK / Redux / Zustand for high-frequency updates, complex asynchronous server caching, and predictable global state transitions.


10. **Context API purpose:** *(Theory + Conceptual)*
* Avoids prop drilling across multiple component levels for read-heavy or global data.


11. **Difference between `some()` and `find()`:** *(Theory + Conceptual)*
* `some()` returns a boolean (`true`/`false`). `find()` returns the first matching element value (or `undefined`).


12. **Difference between `async` and `defer` script tags:** *(Theory + Conceptual)*
* `async` downloads in background and executes immediately when ready (interrupts HTML parsing, execution order not guaranteed). `defer` downloads in background and executes in exact document order after DOM parsing finishes.


13. **Testing strategy experience:** *(Theory + Conceptual)*
* Unit tests for utilities (Jest), component integration tests focusing on user behavior (React Testing Library), and critical end-to-end user journey flows (Playwright / Cypress).


14. **Difference between `interface` and `type` in TypeScript:** *(Theory + Conceptual)*
* `interface` is open for declaration merging and primary for object shapes. `type` is closed, versatile for union types, primitive aliases, tuples, and mapped types.
  


🚀 Deloitte Frontend Developer Interview Experience – Round 1 (React.js)
I recently appeared for the Round 1 Technical Interview for a Frontend Developer (React.js) role at Deloitte. Sharing the questions I was asked in the hope that they help others preparing for frontend interviews.
🌐 HTML & CSS
✅ Difference between position: relative, absolute, fixed, and sticky.
✅ Practical scenarios for CSS positioning.
✅ Basic HTML concepts and semantic elements.
💡 JavaScript
✅ Why were Arrow Functions introduced when traditional functions already existed?
✅ Explain how the JavaScript Event Loop works.
✅ What are callbacks?
✅ How many callback queues are there? Which callback queue has the highest priority?
✅ Explain Hoisting in JavaScript.
✅ Difference between var, let, and const.
✅ What are Closures? Where have you used them in your projects?
✅ Generator Functions.
✅ Difference between map(), filter(), reduce(), and forEach().
✅ What is localStorage? How is it different from sessionStorage?
✅ Output-based questions on Promises, setTimeout, async/await, and the Event Loop.
💻 Coding Question
Flatten a nested array.
Explain the time and space complexity.
Discuss different approaches and optimizations.
⚛️ React.js
✅ When does a React component re-render?
✅ How can you prevent unnecessary re-renders?
✅ Difference between useEffect and useLayoutEffect.
✅ Controlled vs Uncontrolled Components.
✅ How would you optimize the performance of a large React application?
✅ React Hooks and rendering-related concepts.

