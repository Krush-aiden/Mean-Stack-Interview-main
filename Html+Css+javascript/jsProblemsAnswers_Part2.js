// =====================================================================
//  JAVASCRIPT CODING PROBLEMS — SOLUTIONS (PART 2 of 2)
//  Questions 31–60 : Objects, Functions/Async, Polyfills, DOM, Output
//  Ref: jsProblemsQuestions.txt for the full question list
// =====================================================================
//  Uncomment ONE problem block at a time and run with Node.js
// =====================================================================

// =====================================================================
//  SECTION 4 continued : OBJECT / DATA STRUCTURE (Q31 – Q35)
// =====================================================================

// =====================================================================
// Q31. DEEP EQUALITY CHECK (deepEqual)
// =====================================================================

// function deepEqual(a, b) {
//     // Same reference or primitive match
//     if (a === b) return true;

//     // If either is null/undefined or not an object
//     if (a === null || b === null) return false;
//     if (typeof a !== 'object' || typeof b !== 'object') return false;

//     // Compare arrays
//     if (Array.isArray(a) !== Array.isArray(b)) return false;

//     const keysA = Object.keys(a);
//     const keysB = Object.keys(b);

//     // Different number of keys
//     if (keysA.length !== keysB.length) return false;

//     // Recursively compare each key
//     for (const key of keysA) {
//         if (!keysB.includes(key)) return false;
//         if (!deepEqual(a[key], b[key])) return false;
//     }

//     return true;
// }

// console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));  // true
// console.log(deepEqual({ a: 1 }, { a: '1' }));                            // false
// console.log(deepEqual([1, [2, 3]], [1, [2, 3]]));                        // true
// console.log(deepEqual([1, 2], [1, 2, 3]));                               // false

// Time: O(n) | Space: O(d) where d = nesting depth

// =====================================================================
// Q32. FLATTEN NESTED OBJECT TO DOT-NOTATION KEYS
//      { a: { b: { c: 1 } }, d: 2 } → { 'a.b.c': 1, 'd': 2 }
// =====================================================================

// function flattenObject(obj, prefix = '', result = {}) {
//     for (const key in obj) {
//         if (!obj.hasOwnProperty(key)) continue;
//         const newKey = prefix ? `${prefix}.${key}` : key;

//         if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//             flattenObject(obj[key], newKey, result);
//         } else {
//             result[newKey] = obj[key];
//         }
//     }
//     return result;
// }

// console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));
// // { 'a.b.c': 1, 'd': 2 }

// console.log(flattenObject({
//     user: { name: 'Krush', address: { city: 'Mumbai', pin: 400001 } },
//     active: true
// }));
// // { 'user.name': 'Krush', 'user.address.city': 'Mumbai',
// //   'user.address.pin': 400001, 'active': true }

// --- Unflatten (bonus — sometimes asked as follow-up) ---

// function unflattenObject(obj) {
//     const result = {};
//     for (const key in obj) {
//         const keys = key.split('.');
//         let current = result;
//         for (let i = 0; i < keys.length - 1; i++) {
//             if (!current[keys[i]]) current[keys[i]] = {};
//             current = current[keys[i]];
//         }
//         current[keys[keys.length - 1]] = obj[key];
//     }
//     return result;
// }
// console.log(unflattenObject({ 'a.b.c': 1, 'd': 2 }));
// // { a: { b: { c: 1 } }, d: 2 }

// Time: O(n) | Space: O(n)

// =====================================================================
// Q33. URL QUERY STRING ↔ OBJECT
// =====================================================================

// --- Query string → Object ---

// function parseQueryString(qs) {
//     return qs
//         .replace(/^\?/, '')           // remove leading ?
//         .split('&')
//         .reduce((obj, pair) => {
//             const [key, value] = pair.split('=');
//             obj[decodeURIComponent(key)] = decodeURIComponent(value || '');
//             return obj;
//         }, {});
// }

// console.log(parseQueryString('?name=krush&age=25&role=dev'));
// // { name: 'krush', age: '25', role: 'dev' }

// --- Object → Query string ---

// function toQueryString(obj) {
//     return '?' + Object.entries(obj)
//         .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
//         .join('&');
// }

// console.log(toQueryString({ name: 'krush', age: '25', role: 'dev' }));
// // ?name=krush&age=25&role=dev

// Note: In real apps, use URLSearchParams:
// const params = new URLSearchParams('?name=krush&age=25');
// console.log(Object.fromEntries(params));  // { name: 'krush', age: '25' }

// Time: O(n) | Space: O(n)

// =====================================================================
// Q34. LRU CACHE
//      Least Recently Used — get() and put() in O(1)
//      Uses Map to maintain insertion order
// =====================================================================

// class LRUCache {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.cache = new Map();
//     }

//     get(key) {
//         if (!this.cache.has(key)) return -1;
//         // Move to end (most recently used)
//         const value = this.cache.get(key);
//         this.cache.delete(key);
//         this.cache.set(key, value);
//         return value;
//     }

//     put(key, value) {
//         if (this.cache.has(key)) {
//             this.cache.delete(key);
//         }
//         this.cache.set(key, value);
//         // If over capacity, remove the FIRST entry (oldest)
//         if (this.cache.size > this.capacity) {
//             const oldestKey = this.cache.keys().next().value;
//             this.cache.delete(oldestKey);
//         }
//     }
// }

// const lru = new LRUCache(3);
// lru.put('a', 1);
// lru.put('b', 2);
// lru.put('c', 3);
// console.log(lru.get('a'));  // 1 (moves 'a' to most recent)
// lru.put('d', 4);           // evicts 'b' (least recently used)
// console.log(lru.get('b')); // -1 (evicted)
// console.log(lru.get('c')); // 3
// console.log(lru.get('d')); // 4

// Time: O(1) for get and put | Space: O(capacity)

// =====================================================================
// Q35. EVENT EMITTER
//      on(), off(), emit(), once()
// =====================================================================

// class EventEmitter {
//     constructor() {
//         this.events = {};
//     }

//     on(event, listener) {
//         if (!this.events[event]) this.events[event] = [];
//         this.events[event].push(listener);
//         return this; // for chaining
//     }

//     off(event, listener) {
//         if (!this.events[event]) return this;
//         this.events[event] = this.events[event].filter(fn => fn !== listener);
//         return this;
//     }

//     emit(event, ...args) {
//         if (!this.events[event]) return false;
//         this.events[event].forEach(fn => fn(...args));
//         return true;
//     }

//     once(event, listener) {
//         const wrapper = (...args) => {
//             listener(...args);
//             this.off(event, wrapper);
//         };
//         this.on(event, wrapper);
//         return this;
//     }
// }

// const emitter = new EventEmitter();
// emitter.on('greet', (name) => console.log(`Hello, ${name}!`));
// emitter.once('greet', (name) => console.log(`Welcome for the first time, ${name}!`));

// emitter.emit('greet', 'Krush');
// // Hello, Krush!
// // Welcome for the first time, Krush!

// emitter.emit('greet', 'Krush');
// // Hello, Krush!    (once listener is gone)

// =====================================================================
//  SECTION 5 : FUNCTION / CLOSURE / ASYNC (Q36 – Q44)
// =====================================================================

// =====================================================================
// Q36. DEBOUNCE
//      Delays execution until after wait ms of inactivity
//      Use case: search input, window resize
// =====================================================================

// function debounce(fn, delay) {
//     let timerId;
//     return function (...args) {
//         clearTimeout(timerId);
//         timerId = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     };
// }

// // Usage:
// // const debouncedSearch = debounce((query) => {
// //     console.log('Searching for:', query);
// // }, 300);
// // input.addEventListener('input', (e) => debouncedSearch(e.target.value));

// // Test in Node:
// const debouncedLog = debounce((msg) => console.log('Debounced:', msg), 500);
// debouncedLog('a');
// debouncedLog('ab');
// debouncedLog('abc');  // Only this fires after 500ms

// =====================================================================
// Q37. THROTTLE
//      Limits execution to once per interval
//      Use case: scroll handler, button click
// =====================================================================

// function throttle(fn, limit) {
//     let lastCallTime = 0;
//     return function (...args) {
//         const now = Date.now();
//         if (now - lastCallTime >= limit) {
//             lastCallTime = now;
//             fn.apply(this, args);
//         }
//     };
// }

// // --- Throttle with trailing call (more robust) ---

// function throttleWithTrailing(fn, limit) {
//     let lastCallTime = 0;
//     let timerId = null;
//     return function (...args) {
//         const now = Date.now();
//         const remaining = limit - (now - lastCallTime);

//         if (remaining <= 0) {
//             if (timerId) { clearTimeout(timerId); timerId = null; }
//             lastCallTime = now;
//             fn.apply(this, args);
//         } else if (!timerId) {
//             timerId = setTimeout(() => {
//                 lastCallTime = Date.now();
//                 timerId = null;
//                 fn.apply(this, args);
//             }, remaining);
//         }
//     };
// }

// // Usage:
// // window.addEventListener('scroll', throttle(() => {
// //     console.log('Scroll event');
// // }, 200));

// =====================================================================
// Q38. MEMOIZE
//      Caches results to avoid recomputation
// =====================================================================

// function memoize(fn) {
//     const cache = new Map();
//     return function (...args) {
//         const key = JSON.stringify(args);
//         if (cache.has(key)) {
//             console.log('  (from cache)');
//             return cache.get(key);
//         }
//         const result = fn.apply(this, args);
//         cache.set(key, result);
//         return result;
//     };
// }

// // Test:
// const expensiveAdd = (a, b) => {
//     console.log('  Computing...');
//     return a + b;
// };

// const memoizedAdd = memoize(expensiveAdd);
// console.log(memoizedAdd(1, 2));  // Computing... 3
// console.log(memoizedAdd(1, 2));  // (from cache) 3
// console.log(memoizedAdd(3, 4));  // Computing... 7

// --- Memoize for recursive functions (e.g., fibonacci) ---

// const memoFib = memoize(function fib(n) {
//     if (n <= 1) return n;
//     return memoFib(n - 1) + memoFib(n - 2);
// });
// console.log(memoFib(40));  // 102334155 (instant with memoization)

// Time: O(1) cache hit | Space: O(n) cache entries

// =====================================================================
// Q39. CURRY FUNCTION
//      curry(fn)(1)(2)(3) → fn(1,2,3)
// =====================================================================

// function curry(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn.apply(this, args);
//         }
//         return function (...nextArgs) {
//             return curried.apply(this, [...args, ...nextArgs]);
//         };
//     };
// }

// const add = (a, b, c) => a + b + c;
// const curriedAdd = curry(add);

// console.log(curriedAdd(1)(2)(3));      // 6
// console.log(curriedAdd(1, 2)(3));      // 6
// console.log(curriedAdd(1)(2, 3));      // 6
// console.log(curriedAdd(1, 2, 3));      // 6

// --- Infinite curry (sum of any number of args) ---
// function infiniteCurry(fn) {
//     return function curried(...args) {
//         const next = (...nextArgs) => curried(...args, ...nextArgs);
//         next.valueOf = () => args.reduce(fn, 0);
//         next[Symbol.toPrimitive] = () => args.reduce(fn, 0);
//         return next;
//     };
// }
// const sum = infiniteCurry((a, b) => a + b);
// console.log(+sum(1)(2)(3)(4));  // 10

// =====================================================================
// Q40. PIPE / COMPOSE
//      pipe:    left → right   pipe(f, g, h)(x) = h(g(f(x)))
//      compose: right → left   compose(f, g, h)(x) = f(g(h(x)))
// =====================================================================

// function pipe(...fns) {
//     return function (value) {
//         return fns.reduce((acc, fn) => fn(acc), value);
//     };
// }

// function compose(...fns) {
//     return function (value) {
//         return fns.reduceRight((acc, fn) => fn(acc), value);
//     };
// }

// const double = x => x * 2;
// const addTen = x => x + 10;
// const square = x => x * x;

// const piped = pipe(double, addTen, square);
// console.log(piped(3));   // square(addTen(double(3))) = square(16) = 256

// const composed = compose(square, addTen, double);
// console.log(composed(3)); // same result: 256

// Time: O(n) where n = number of functions | Space: O(1)

// =====================================================================
// Q41. IMPLEMENT Promise.all FROM SCRATCH
// =====================================================================

// function promiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let completed = 0;

//         if (promises.length === 0) {
//             resolve([]);
//             return;
//         }

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//                 .then(value => {
//                     results[index] = value;
//                     completed++;
//                     if (completed === promises.length) {
//                         resolve(results);
//                     }
//                 })
//                 .catch(reject);  // reject immediately on first error
//         });
//     });
// }

// // Test:
// promiseAll([
//     Promise.resolve(1),
//     Promise.resolve(2),
//     new Promise(resolve => setTimeout(() => resolve(3), 100)),
// ]).then(console.log);  // [1, 2, 3]

// promiseAll([
//     Promise.resolve(1),
//     Promise.reject('Error!'),
//     Promise.resolve(3),
// ]).catch(console.log);  // 'Error!' (rejects on first failure)

// =====================================================================
// Q42. EXECUTE ASYNC FUNCTIONS IN SEQUENCE
// =====================================================================

// async function runSequential(asyncFunctions) {
//     const results = [];
//     for (const fn of asyncFunctions) {
//         const result = await fn();
//         results.push(result);
//     }
//     return results;
// }

// // --- Using reduce (no async/await) ---

// function runSequentialReduce(asyncFunctions) {
//     return asyncFunctions.reduce((chain, fn) => {
//         return chain.then(results =>
//             fn().then(result => [...results, result])
//         );
//     }, Promise.resolve([]));
// }

// // Test:
// const tasks = [
//     () => new Promise(r => setTimeout(() => { console.log('Task 1'); r(1); }, 300)),
//     () => new Promise(r => setTimeout(() => { console.log('Task 2'); r(2); }, 100)),
//     () => new Promise(r => setTimeout(() => { console.log('Task 3'); r(3); }, 200)),
// ];

// runSequential(tasks).then(console.log);
// // Task 1 → Task 2 → Task 3 → [1, 2, 3]
// // (runs in order despite different delays)

// =====================================================================
// Q43. RETRY WITH EXPONENTIAL BACKOFF
// =====================================================================

// async function retry(fn, maxRetries = 3, baseDelay = 1000) {
//     for (let attempt = 0; attempt <= maxRetries; attempt++) {
//         try {
//             return await fn();
//         } catch (err) {
//             if (attempt === maxRetries) {
//                 throw new Error(`Failed after ${maxRetries + 1} attempts: ${err.message}`);
//             }
//             const delay = baseDelay * Math.pow(2, attempt);
//             console.log(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms...`);
//             await new Promise(resolve => setTimeout(resolve, delay));
//         }
//     }
// }

// // Test:
// let callCount = 0;
// async function flakyAPI() {
//     callCount++;
//     if (callCount < 3) throw new Error('Server error');
//     return { data: 'Success!' };
// }

// retry(flakyAPI, 5, 500).then(console.log).catch(console.error);
// // Attempt 1 failed. Retrying in 500ms...
// // Attempt 2 failed. Retrying in 1000ms...
// // { data: 'Success!' }

// =====================================================================
// Q44. POLYFILLS: Function.prototype.call, apply, bind
// =====================================================================

// --- Custom call ---

// Function.prototype.myCall = function (context, ...args) {
//     context = context || globalThis;
//     const fnSymbol = Symbol('fn');
//     context[fnSymbol] = this;
//     const result = context[fnSymbol](...args);
//     delete context[fnSymbol];
//     return result;
// };

// --- Custom apply ---

// Function.prototype.myApply = function (context, args = []) {
//     context = context || globalThis;
//     const fnSymbol = Symbol('fn');
//     context[fnSymbol] = this;
//     const result = context[fnSymbol](...args);
//     delete context[fnSymbol];
//     return result;
// };

// --- Custom bind ---

// Function.prototype.myBind = function (context, ...boundArgs) {
//     const fn = this;
//     return function (...args) {
//         return fn.apply(context, [...boundArgs, ...args]);
//     };
// };

// // Test:
// function greet(greeting, punctuation) {
//     return `${greeting}, ${this.name}${punctuation}`;
// }

// const person = { name: 'Krush' };

// console.log(greet.myCall(person, 'Hello', '!'));      // Hello, Krush!
// console.log(greet.myApply(person, ['Hi', '?']));      // Hi, Krush?
// const boundGreet = greet.myBind(person, 'Hey');
// console.log(boundGreet('!!'));                          // Hey, Krush!!

// =====================================================================
//  SECTION 6 : POLYFILLS (Q45 – Q50)
//  These are asked in EVERY senior-level JS interview
// =====================================================================

// =====================================================================
// Q45. POLYFILL: Array.prototype.map
// =====================================================================

// Array.prototype.myMap = function (callback, thisArg) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {  // handle sparse arrays
//             result.push(callback.call(thisArg, this[i], i, this));
//         }
//     }
//     return result;
// };

// console.log([1, 2, 3].myMap(x => x * 2));        // [2, 4, 6]
// console.log([1, 2, 3].myMap((x, i) => x + i));    // [1, 3, 5]

// =====================================================================
// Q46. POLYFILL: Array.prototype.filter
// =====================================================================

// Array.prototype.myFilter = function (callback, thisArg) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (i in this && callback.call(thisArg, this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// console.log([1, 2, 3, 4, 5].myFilter(x => x > 3));   // [4, 5]
// console.log([1, 2, 3, 4].myFilter(x => x % 2 === 0)); // [2, 4]

// =====================================================================
// Q47. POLYFILL: Array.prototype.reduce
// =====================================================================

// Array.prototype.myReduce = function (callback, initialValue) {
//     let accumulator;
//     let startIndex;

//     if (initialValue !== undefined) {
//         accumulator = initialValue;
//         startIndex = 0;
//     } else {
//         if (this.length === 0) {
//             throw new TypeError('Reduce of empty array with no initial value');
//         }
//         accumulator = this[0];
//         startIndex = 1;
//     }

//     for (let i = startIndex; i < this.length; i++) {
//         if (i in this) {
//             accumulator = callback(accumulator, this[i], i, this);
//         }
//     }
//     return accumulator;
// };

// console.log([1, 2, 3, 4].myReduce((acc, val) => acc + val, 0));   // 10
// console.log([1, 2, 3, 4].myReduce((acc, val) => acc * val));       // 24
// console.log(['a', 'b', 'c'].myReduce((acc, val) => acc + val, '')); // 'abc'

// =====================================================================
// Q48. POLYFILL: Array.prototype.forEach
// =====================================================================

// Array.prototype.myForEach = function (callback, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     }
// };

// [1, 2, 3].myForEach((val, idx) => {
//     console.log(`Index ${idx}: ${val}`);
// });
// // Index 0: 1
// // Index 1: 2
// // Index 2: 3

// =====================================================================
// Q49. POLYFILL: Promise.allSettled
//      Waits for ALL promises to settle (resolve OR reject)
//      Never short-circuits
// =====================================================================

// function promiseAllSettled(promises) {
//     return new Promise((resolve) => {
//         const results = [];
//         let completed = 0;

//         if (promises.length === 0) {
//             resolve([]);
//             return;
//         }

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//                 .then(value => {
//                     results[index] = { status: 'fulfilled', value };
//                 })
//                 .catch(reason => {
//                     results[index] = { status: 'rejected', reason };
//                 })
//                 .finally(() => {
//                     completed++;
//                     if (completed === promises.length) {
//                         resolve(results);
//                     }
//                 });
//         });
//     });
// }

// // Test:
// promiseAllSettled([
//     Promise.resolve(1),
//     Promise.reject('Error!'),
//     Promise.resolve(3),
// ]).then(console.log);
// // [
// //   { status: 'fulfilled', value: 1 },
// //   { status: 'rejected', reason: 'Error!' },
// //   { status: 'fulfilled', value: 3 }
// // ]

// =====================================================================
// Q50. POLYFILL: Promise.race
//      Resolves/rejects with the FIRST settled promise
// =====================================================================

// function promiseRace(promises) {
//     return new Promise((resolve, reject) => {
//         for (const promise of promises) {
//             Promise.resolve(promise).then(resolve).catch(reject);
//         }
//     });
// }

// // Test:
// promiseRace([
//     new Promise(r => setTimeout(() => r('slow'), 500)),
//     new Promise(r => setTimeout(() => r('fast'), 100)),
//     new Promise((_, reject) => setTimeout(() => reject('error'), 300)),
// ]).then(console.log);  // 'fast' (first to resolve)

// =====================================================================
//  SECTION 7 : DOM / BROWSER PROBLEMS (Q51 – Q55)
// =====================================================================

// =====================================================================
// Q51. INFINITE SCROLL — Intersection Observer
//      (Browser-only — paste in browser console or HTML file)
// =====================================================================

// function setupInfiniteScroll() {
//     const sentinel = document.getElementById('sentinel');
//     let page = 1;

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 loadMore();
//             }
//         });
//     }, {
//         rootMargin: '100px'  // trigger 100px before sentinel is visible
//     });

//     observer.observe(sentinel);

//     async function loadMore() {
//         page++;
//         console.log(`Loading page ${page}...`);
//         // const data = await fetch(`/api/items?page=${page}`);
//         // Append items to the DOM
//         // ...
//     }
// }

// // HTML structure:
// // <div id="items-container">
// //     <!-- items rendered here -->
// // </div>
// // <div id="sentinel"></div>

// =====================================================================
// Q52. PUB/SUB PATTERN (Publish-Subscribe)
// =====================================================================

// const PubSub = {
//     events: {},

//     subscribe(event, callback) {
//         if (!this.events[event]) this.events[event] = [];
//         this.events[event].push(callback);
//         // Return unsubscribe function
//         return () => {
//             this.events[event] = this.events[event].filter(cb => cb !== callback);
//         };
//     },

//     publish(event, data) {
//         if (!this.events[event]) return;
//         this.events[event].forEach(cb => cb(data));
//     }
// };

// // Usage:
// const unsub = PubSub.subscribe('userLogin', (user) => {
//     console.log(`Welcome, ${user.name}!`);
// });

// PubSub.publish('userLogin', { name: 'Krush' });  // Welcome, Krush!
// unsub();  // unsubscribe
// PubSub.publish('userLogin', { name: 'Krush' });  // nothing happens

// // This is the same pattern used by Redux, EventEmitter, RxJS etc.

// =====================================================================
// Q53. var vs let IN LOOPS — Closure Trap
// =====================================================================

// --- Problem with var ---
// var is function-scoped, so all closures share the SAME i

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log('var:', i), 100);
// }
// // Output: 5, 5, 5, 5, 5

// --- Fix 1: Use let (block-scoped) ---

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log('let:', i), 100);
// }
// // Output: 0, 1, 2, 3, 4

// --- Fix 2: IIFE (pre-ES6 solution) ---

// for (var i = 0; i < 5; i++) {
//     (function (j) {
//         setTimeout(() => console.log('IIFE:', j), 100);
//     })(i);
// }
// // Output: 0, 1, 2, 3, 4

// --- Fix 3: setTimeout's third argument ---

// for (var i = 0; i < 5; i++) {
//     setTimeout((j) => console.log('3rd arg:', j), 100, i);
// }
// // Output: 0, 1, 2, 3, 4

// Why? var → 1 variable shared across iterations → by the time setTimeout
// fires, loop is done & i = 5. let → new binding per iteration.

// =====================================================================
// Q54. EVENT DELEGATION
//      Attach one listener to parent instead of many to children
// =====================================================================

// // Instead of:
// // document.querySelectorAll('.item').forEach(el => {
// //     el.addEventListener('click', handleClick);
// // });

// // Do this (handles dynamically added elements too):
// function setupEventDelegation() {
//     document.getElementById('list').addEventListener('click', function (e) {
//         // Find the closest matching element
//         const item = e.target.closest('.item');
//         if (!item) return;  // click wasn't on an item

//         console.log('Clicked item:', item.dataset.id);
//     });
// }

// // HTML:
// // <ul id="list">
// //     <li class="item" data-id="1">Item 1</li>
// //     <li class="item" data-id="2">Item 2</li>
// //     <li class="item" data-id="3">Item 3</li>
// // </ul>

// // Benefits:
// // 1. Single listener instead of N listeners → better memory
// // 2. Works for dynamically added elements
// // 3. Used by React's synthetic event system internally

// =====================================================================
// Q55. STOPWATCH — Start, Stop, Reset
// =====================================================================

// function createStopwatch() {
//     let startTime = 0;
//     let elapsed = 0;
//     let intervalId = null;
//     let running = false;

//     return {
//         start() {
//             if (running) return console.log('Already running');
//             running = true;
//             startTime = Date.now() - elapsed;
//             intervalId = setInterval(() => {
//                 elapsed = Date.now() - startTime;
//                 const seconds = Math.floor(elapsed / 1000);
//                 const ms = elapsed % 1000;
//                 process.stdout.write(`\r${seconds}.${String(ms).padStart(3, '0')}s`);
//             }, 100);
//         },
//         stop() {
//             if (!running) return console.log('Not running');
//             running = false;
//             clearInterval(intervalId);
//             console.log(`\nStopped at ${(elapsed / 1000).toFixed(3)}s`);
//         },
//         reset() {
//             running = false;
//             clearInterval(intervalId);
//             elapsed = 0;
//             console.log('Reset');
//         },
//         getElapsed() {
//             return elapsed;
//         }
//     };
// }

// // Usage:
// // const sw = createStopwatch();
// // sw.start();
// // setTimeout(() => sw.stop(), 2000);  // stops after 2s
// // sw.reset();

// =====================================================================
//  SECTION 8 : OUTPUT-BASED / TRICKY QUESTIONS (Q56 – Q60)
// =====================================================================

// =====================================================================
// Q56. typeof & equality quirks
// =====================================================================

// console.log(typeof null);           // 'object'  (historical JS bug)
// console.log(typeof undefined);      // 'undefined'
// console.log(null == undefined);     // true  (loose equality — both are "empty")
// console.log(null === undefined);    // false (strict — different types)

// // Bonus:
// console.log(typeof NaN);            // 'number'
// console.log(NaN === NaN);           // false (NaN is not equal to anything)
// console.log(Number.isNaN(NaN));     // true  (correct way to check)

// =====================================================================
// Q57. TYPE COERCION — String + Number tricks
// =====================================================================

// console.log(1 + '2' + '2');        // '122'
// // 1 + '2' → '12' (number coerced to string)
// // '12' + '2' → '122'

// console.log(1 + +'2' + '2');       // '32'
// // +'2' → 2 (unary plus converts string to number)
// // 1 + 2 → 3
// // 3 + '2' → '32'

// console.log('A' - 'B' + '2');      // 'NaN2'
// // 'A' - 'B' → NaN (strings can't be subtracted)
// // NaN + '2' → 'NaN2'

// console.log('A' - 'B' + 2);        // NaN
// // 'A' - 'B' → NaN
// // NaN + 2 → NaN (anything + NaN = NaN)

// =====================================================================
// Q58. OBJECT AS KEY — toString trap
// =====================================================================

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);  // 456

// // Why? Object keys are always strings.
// // b.toString() → '[object Object]'
// // c.toString() → '[object Object]'
// // Both b and c become the SAME key: '[object Object]'
// // So a[c] = 456 overwrites a[b] = 123.

// // Fix: Use Map instead of plain object for object keys
// const map = new Map();
// map.set(b, 123);
// map.set(c, 456);
// console.log(map.get(b));  // 123 (preserves identity)
// console.log(map.get(c));  // 456

// =====================================================================
// Q59. HOISTING — var inside function
// =====================================================================

// var x = 1;
// function foo() {
//     console.log(x);    // undefined (NOT 1!)
//     var x = 2;
// }
// foo();

// // Why? var declarations are hoisted to the top of the function.
// // The function executes as if it were:
// // function foo() {
// //     var x;          ← hoisted declaration (value is undefined)
// //     console.log(x); ← undefined
// //     x = 2;          ← assignment stays here
// // }

// // Fix: Use let/const (temporal dead zone — throws error instead of silent bug)
// // let x = 1;
// // function bar() {
// //     console.log(x);  ← ReferenceError: Cannot access 'x' before initialization
// //     let x = 2;
// // }

// =====================================================================
// Q60. setTimeout IN A LOOP — Closure problem
// =====================================================================

// // Problem:
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log('var loop:', i), 1000);
// }
// // Output: 3, 3, 3  (all print 3 because var is function-scoped)

// // Fix 1: Use let
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log('let fix:', i), 1000);
// }
// // Output: 0, 1, 2

// // Fix 2: IIFE — wrap in immediately invoked function
// for (var i = 0; i < 3; i++) {
//     (function (j) {
//         setTimeout(() => console.log('IIFE fix:', j), 1000);
//     })(i);
// }
// // Output: 0, 1, 2

// // Fix 3: Use setTimeout's 3rd parameter
// for (var i = 0; i < 3; i++) {
//     setTimeout((j) => console.log('3rd param fix:', j), 1000, i);
// }
// // Output: 0, 1, 2

// // Fix 4: Use bind
// for (var i = 0; i < 3; i++) {
//     setTimeout(console.log.bind(console, 'bind fix:', i), 1000);
// }
// // Output: 0, 1, 2

// =====================================================================
//  END OF PART 2
//  Part 1: Q1–Q30 (jsProblemsAnswers_Part1.js)
//  Questions: jsProblemsQuestions.txt
// =====================================================================
