// ================================================================================
//   JAVASCRIPT INTERVIEW QUESTIONS — INDEX & ROADMAP
// ================================================================================
//
//   ANSWER FILES:
//   → jsAllQuestionsExplained_clean.txt    (75 Questions — JS Theory & Concepts)
//   → JsExplained_Browser_API_clean.txt    (30 Questions — Browser & Web APIs)
//   → jsProblemsQuestions.txt              (60 Questions — Coding Problems)
//   → jsProblemsAnswers_Part1.js           (Coding Answers Q1-30)
//   → jsProblemsAnswers_Part2.js           (Coding Answers Q31-60)
//
// ================================================================================

// ====== JS THEORY (jsAllQuestionsExplained_clean.txt) — 75 Questions ======
//
// SECTION 1: JS FUNDAMENTALS (Q1-13)
// 1. What are the different data types in JavaScript?
// 2. What is Hoisting in JavaScript?
// 3. What is the difference between == and ===?
// Why does `[] + {}` evaluate to `"[object Object]"` while `{} + []` evaluates to `0` in a statement context?
// 4. What is the difference between var, let, and const?
// 5. What is the Temporal Dead Zone (TDZ)?
// 6. What is Type Coercion in JavaScript?
// 7. What is Static Typing vs Dynamic Typing?
// 8. What is NaN in JavaScript?
// What is `NaN` in JavaScript, and why do operations like `0 / 0`, `parseInt("abc")`, and `Math.sqrt(-1)` return `NaN`?
// 9. What is the difference between null and undefined?
// 10. What is Strict Mode in JavaScript?
// 11. Explain Scope and Scope Chain in JavaScript
// 12. What is Pass by Value vs Pass by Reference?
// 13. What is the Debugger statement?
//
// SECTION 2: FUNCTIONS (Q14-24)
// 14. Arrow Functions vs Regular Functions
// 15. What is an IIFE?
// 16. What are Higher-Order Functions?
// 17. What are Callbacks?
// 18. What is Callback Hell?
// 19. What are Closures?
// 20. What is Memoization?
// 21. What is Recursion?
// 22. What is a Constructor Function?
// 23. What is Currying?
// 24. What is Function Composition?
//
// SECTION 3: this, call, apply, bind (Q25-26)
// 25. Explain the `this` keyword
// 26. What is call(), apply(), and bind()?
//
// SECTION 4: OBJECTS & PROTOTYPES (Q27-32)
// 27. Ways to create an Object
// 28. What are Object Prototypes?
// 29. Object & Array Destructuring
// 30. Rest Parameter & Spread Operator
// 31. Optional Chaining (?.)
// 32. Nullish Coalescing Operator (??)
//
// SECTION 5: ASYNC JAVASCRIPT (Q33-39)
// 33. Synchronous vs Asynchronous
// 34. Promises
// 35. Promise.all, allSettled, race, any
// 36. Async/Await
// 37. Event Loop
// 38. Microtasks vs Macrotasks
// 39. Deferred Scripts (defer vs async)
//
// SECTION 6: BUILT-IN METHODS (Q40-48)
// 40. map(), filter(), reduce(), forEach()
// 41. find(), findIndex(), indexOf(), includes()
// 42. slice() vs splice()
// 43. for...in vs for...of
// 44. Array vs Set
// 45. Set vs WeakSet
// 46. Object vs Map
// 47. Common String Methods
// 48. Common Array Methods
//
// SECTION 7: DEEP CLONE vs SHALLOW CLONE (Q49)
// 49. Shallow Clone vs Deep Clone
//
// SECTION 8: ES6+ MODERN JS (Q50-75)
// 50. ES6 Classes
// 51. Private Class Fields (#)
// 52. Template Literals & Tagged Templates
// 53. Symbols
// 54. Generators & Iterators
// 55. ES Modules vs CommonJS
// 56. Proxy & Reflect
// 57. WeakRef & FinalizationRegistry
// 58. exec() vs test()
// 59. Types of Errors
// 60. DOM and BOM
// 61. Client-side vs Server-side JS
// 62. Advantages of External JavaScript
// 63. Loosely Coupled vs Tightly Coupled
// 64. Logical Assignment Operators
// 65. Object.hasOwn() vs hasOwnProperty()
// 66. structuredClone() vs JSON deep copy
// 67. Top-Level Await
// 68. Debouncing & Throttling
// 69. setTimeout(fn, 0) and Event Loop
// 70. Object.freeze() vs Object.seal() vs Object.preventExtensions()
// 71. Spread Operator contexts
// 72. Short-Circuit Evaluation
// 73. WeakMap vs Map
// 74. globalThis
// 75. Error Handling approaches

// ====== BROWSER APIs (JsExplained_Browser_API_clean.txt) — 30 Questions ======
//
// SECTION 1: DOM EVENTS (Q1-9)
// 1. Event Delegation
// 2. Event Bubbling
// 3. Event Capturing
// 4. 3 Phases of Event Propagation
// 5. stopPropagation()
// 6. preventDefault()
// 7. event.target vs event.currentTarget
// 8. Delegation with dynamic elements
// 9. Common use cases for Event Delegation
//
// SECTION 2: OBSERVERS (Q10-12)
// 10. IntersectionObserver
// 11. MutationObserver
// 12. ResizeObserver
//
// SECTION 3: STORAGE (Q13-15)
// 13. localStorage vs sessionStorage vs Cookies
// 14. IndexedDB
// 15. Cache API
//
// SECTION 4: NETWORK APIs (Q16-18)
// 16. Fetch API
// 17. AbortController
// 18. Beacon API
//
// SECTION 5: WORKERS (Q19-20)
// 19. Web Workers
// 20. Service Workers
//
// SECTION 6: PERFORMANCE (Q21-23)
// 21. requestAnimationFrame()
// 22. Performance API
// 23. Page Visibility API
//
// SECTION 7: MODERN BROWSER APIs (Q24-30)
// 24. Clipboard API
// 25. History API
// 26. Broadcast Channel API
// 27. Custom Events
// 28. Geolocation API
// 29. Notification API
// 30. requestIdleCallback()

// ====== CODING PROBLEMS (jsProblemsQuestions.txt) — 60 Questions ======
//
// Strings (Q1-10), Arrays (Q11-20), Numbers (Q21-25),
// Deep Clone (Q26-30), Objects (Q31-35), Functions/Async (Q36-42),
// Polyfills (Q43-50), DOM (Q51-55), Output-based (Q56-60)

// ====== INTERVIEW PREP ROADMAP ======
//
// 1. JavaScript Basics
//    • JS Engine, Call Stack, Execution Context
//    • Hoisting, TDZ, Scope, Closures
//    • Type Coercion, Truthy/Falsy Values
//
// 2. Functions
//    • Declarations vs Expressions vs Arrow
//    • IIFE, Higher-Order Functions, Callbacks
//    • Currying, Memoization, Pure Functions
//
// 3. Objects, Prototypes & OOP
//    • Constructor/Factory Functions, Object.create()
//    • Prototype Chain, Classes, Inheritance
//    • Design Patterns (Singleton, Factory, Observer)
//
// 4. Asynchronous JavaScript
//    • Callbacks, Promises, Async/Await
//    • Event Loop, Microtask vs Macrotask Queue
//    • Debouncing, Throttling, AbortController
//    • Fetch API, WebSockets
//
// 5. ES6+ Features
//    • let/const, Spread/Rest, Destructuring
//    • Template Literals, Symbols, Generators
//    • Optional Chaining, Nullish Coalescing
//    • Proxy, Reflect, WeakRef
//    • Private Fields, Top-Level Await, structuredClone
//
// 6. Browser APIs
//    • Event Bubbling, Capturing, Delegation
//    • localStorage, sessionStorage, Cookies, IndexedDB
//    • Observers (Intersection, Mutation, Resize)
//    • Web Workers, Service Workers
//    • Performance API, requestAnimationFrame
//
// 7. Node.js Backend
//    • Event-Driven Architecture
//    • Streams, Buffers, Worker Threads
//    • Middleware, Clustering, Load Balancing
//
// 8. System Design & Performance
//    • Caching (Redis, CDN), Rate Limiting
//    • Security Best Practices (XSS, CSRF)
//    • DOM Optimization, Code Splitting
//    • Polyfills & Browser Compatibility
