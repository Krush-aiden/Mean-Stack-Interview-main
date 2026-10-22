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

// ====== JS THEORY — 49 Questions ======

// SECTION 1: JS FUNDAMENTALS (Q1-13)
// 1. What are the different data types in JavaScript? - High-Level Awareness Only
// 2. What is Hoisting in JavaScript? - Know Code + Implementation (Output-Tracing)
// 3. What is the difference between == and ===? - Theory + Conceptual
// 4. What is the difference between var, let, and const? - Theory + Conceptual
// 5. What is the Temporal Dead Zone (TDZ)? - Know Code + Implementation (Output-Tracing)
// 6. What is Type Coercion in JavaScript? - Theory + Conceptual
// 7. What is Static Typing vs Dynamic Typing? - High-Level Awareness Only
// 8. What is NaN in JavaScript? - Theory + Conceptual
// 9. What is the difference between null and undefined? - Theory + Conceptual
// 10. What is Strict Mode in JavaScript? - High-Level Awareness Only
// 11. Explain Scope and Scope Chain in JavaScript - Theory + Conceptual
// 12. What is Pass by Value vs Pass by Reference? - Theory + Conceptual
// 13. What is the Debugger statement? - High-Level Awareness Only

// SECTION 2: FUNCTIONS (Q14-24)
// 14. Arrow Functions vs Regular Functions - Theory + Conceptual
// 15. What is an IIFE? - High-Level Awareness Only
// 16. What are Higher-Order Functions? - Theory + Conceptual
// 17. What are Callbacks? - Theory + Conceptual
// 18. What is Callback Hell? - Theory + Conceptual
// 19. What are Closures? - Know Code + Implementation (Output-Tracing & Stale Closures)
// 20. What is Memoization? - Know Code + Implementation
// 21. What is Recursion? - Know Code + Implementation
// 22. What is a Constructor Function? - Theory + Conceptual
// 23. What is Currying? - Know Code + Implementation
// 24. What is Function Composition? - Theory + Conceptual

// SECTION 3: this, call, apply, bind (Q25-26)
// 25. Explain the this keyword - Know Code + Implementation (Output-Tracing)
// 26. What is call(), apply(), and bind()? - Know Code + Implementation (Polyfill creation)

// SECTION 4: OBJECTS & PROTOTYPES (Q27-32)
// 27. Ways to create an Object - High-Level Awareness Only
// 28. What are Object Prototypes? - Theory + Conceptual (Prototype Chain & Inheritance)
// 29. Object & Array Destructuring - High-Level Awareness Only
// 30. Rest Parameter & Spread Operator - High-Level Awareness Only
// 31. Optional Chaining (?.) - High-Level Awareness Only
// 32. Nullish Coalescing Operator (??) - High-Level Awareness Only

// SECTION 5: ASYNC JAVASCRIPT (Q33-39)
// 33. Synchronous vs Asynchronous - Theory + Conceptual
// 34. Promises - Know Code + Implementation (Custom Promise Wrapper / Promisification)
// 35. Promise.all, allSettled, race, any - Know Code + Implementation (Polyfills & Parallel Async)
// 36. Async/Await - Know Code + Implementation
// 37. Event Loop - Know Code + Implementation (Output-Tracing)
// 38. Microtasks vs Macrotasks - Know Code + Implementation (Execution Order)
// 39. Deferred Scripts (defer vs async) - Theory + Conceptual

// SECTION 6: BUILT-IN METHODS (Q40-48)
// 40. map(), filter(), reduce(), forEach() - Know Code + Implementation (Polyfills & Transducing)
// 41. find(), findIndex(), indexOf(), includes() - High-Level Awareness Only
// 42. slice() vs splice() - High-Level Awareness Only
// 43. for...in vs for...of - High-Level Awareness Only
// 44. Array vs Set - Theory + Conceptual
// 45. Set vs WeakSet - High-Level Awareness Only
// 46. Object vs Map - Theory + Conceptual
// 47. Common String Methods - High-Level Awareness Only
// 48. Common Array Methods - High-Level Awareness Only

// SECTION 7: DEEP CLONE vs SHALLOW CLONE (Q49)
// 49. Shallow Clone vs Deep Clone - Know Code + Implementation (Writing custom deepClone)
// SECTION 8: ES6+ MODERN JS (Q50-75)
// 50. ES6 Classes - Theory + Conceptual
// 51. Private Class Fields (#) - High-Level Awareness Only
// 52. Template Literals & Tagged Templates - High-Level Awareness Only
// 53. Symbols - High-Level Awareness Only
// 54. Generators & Iterators - High-Level Awareness Only
// 55. ES Modules vs CommonJS - Theory + Conceptual
// 56. Proxy & Reflect - Theory + Conceptual
// 57. WeakRef & FinalizationRegistry - High-Level Awareness Only
// 58. exec() vs test() - High-Level Awareness Only
// 59. Types of Errors - Theory + Conceptual
// 60. DOM and BOM - High-Level Awareness Only
// 61. Client-side vs Server-side JS - Theory + Conceptual
// 62. Advantages of External JavaScript - High-Level Awareness Only
// 63. Loosely Coupled vs Tightly Coupled - Theory + Conceptual
// 64. Logical Assignment Operators - High-Level Awareness Only
// 65. Object.hasOwn() vs hasOwnProperty() - High-Level Awareness Only
// 66. structuredClone() vs JSON deep copy - Know Code + Implementation
// 67. Top-Level Await - Theory + Conceptual
// 68. Debouncing & Throttling - Know Code + Implementation
// 69. setTimeout(fn, 0) and Event Loop - Know Code + Implementation
// 70. Object.freeze() vs Object.seal() vs Object.preventExtensions() - Know Code + Implementation
// 71. Spread Operator contexts - High-Level Awareness Only
// 72. Short-Circuit Evaluation - High-Level Awareness Only
// 73. WeakMap vs Map - Know Code + Implementation
// 74. globalThis - High-Level Awareness Only
// 75. Error Handling approaches - Theory + Conceptual

// ====== BROWSER APIs — 30 Questions ======
// SECTION 1: DOM EVENTS (Q1-9)
// 1. Event Delegation - Know Code + Implementation
// 2. Event Bubbling - Theory + Conceptual
// 3. Event Capturing - Theory + Conceptual
// 4. 3 Phases of Event Propagation - Theory + Conceptual
// 5. stopPropagation() - Know Code + Implementation
// 6. preventDefault() - Know Code + Implementation
// 7. event.target vs event.currentTarget - Know Code + Implementation
// 8. Delegation with dynamic elements - Know Code + Implementation
// 9. Common use cases for Event Delegation - High-Level Awareness Only

// SECTION 2: OBSERVERS (Q10-12)
// 10. IntersectionObserver - Know Code + Implementation
// 11. MutationObserver - High-Level Awareness Only
// 12. ResizeObserver - High-Level Awareness Only

// SECTION 3: STORAGE (Q13-15)
// 13. localStorage vs sessionStorage vs Cookies - Theory + Conceptual
// 14. IndexedDB - High-Level Awareness Only
// 15. Cache API - High-Level Awareness Only

// SECTION 4: NETWORK APIs (Q16-18)
// 16. Fetch API - Know Code + Implementation
// 17. AbortController - Know Code + Implementation
// 18. Beacon API - High-Level Awareness Only

// SECTION 5: WORKERS (Q19-20)
// 19. Web Workers - Theory + Conceptual
// 20. Service Workers - Theory + Conceptual

// SECTION 6: PERFORMANCE (Q21-23)
// 21. requestAnimationFrame() - Know Code + Implementation
// 22. Performance API - High-Level Awareness Only
// 23. Page Visibility API - High-Level Awareness Only

// SECTION 7: MODERN BROWSER APIs (Q24-30)
// 24. Clipboard API - High-Level Awareness Only
// 25. History API - Theory + Conceptual
// 26. Broadcast Channel API - High-Level Awareness Only
// 27. Custom Events - Know Code + Implementation
// 28. Geolocation API - High-Level Awareness Only
// 29. Notification API - High-Level Awareness Only
// 30. requestIdleCallback() - High-Level Awareness Only

// ====== CODING PROBLEMS (jsProblemsQuestions.txt) — 60 Questions ======
//
// Strings (Q1-10), Arrays (Q11-20), Numbers (Q21-25),
// Deep Clone (Q26-30), Objects (Q31-35), Functions/Async (Q36-42),
// Polyfills (Q43-50), DOM (Q51-55), Output-based (Q56-60)
