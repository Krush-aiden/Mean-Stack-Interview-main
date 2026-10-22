Here is your complete, fully polished Markdown document. All code blocks have been properly formatted with syntax highlighting (`javascript, `html, etc.), headers formatted cleanly with `#`, `##`, and `###`, and tables standardized for maximum scannability and clean rendering in any Markdown editor (VS Code, GitHub, Obsidian, etc.).

```markdown
# JAVASCRIPT THEORY & CONCEPTS — INTERVIEW PREPARATION (2024–2026)
> **Covers:** Core JS, Functions, Objects, Async, ES6+, Advanced Concepts  
> **Total Questions:** 75 Questions

---

## SECTION 1: JAVASCRIPT FUNDAMENTALS

### 1. What are the different data types in JavaScript?

JavaScript has two categories of data types:

#### Primitive Types (7):
- **String** → `"hello"`, `'world'`
- **Number** → `42`, `3.14`, `NaN`, `Infinity`
- **BigInt** → `9007199254740991n`
- **Boolean** → `true`, `false`
- **Undefined** → Variable declared but not assigned
- **Null** → Intentional absence of value
- **Symbol** → `Symbol('unique')`

#### Reference Types (Non-Primitive):
- **Object** → `{ key: 'value' }`
- **Array** → `[1, 2, 3]`
- **Function** → `function() {}`
- **Date** → `new Date()`
- **RegExp** → `/pattern/`
- **Map, Set, WeakMap, WeakSet**

#### Key Difference:
- Primitives are stored in the **stack** (stored by value).
- Reference types are stored in the **heap** (stored by reference — the variable holds a pointer).

```javascript
typeof "hello";       // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object"  ← historical bug in JS
typeof Symbol();      // "symbol"
typeof 10n;           // "bigint"
typeof {};            // "object"
typeof [];            // "object"  ← arrays are objects
typeof function(){};  // "function"

```

---

### 2. What is Hoisting in JavaScript?

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

* `var` → Hoisted and initialized with `undefined`.
* `let` / `const` → Hoisted but NOT initialized (Temporal Dead Zone).
* **Function declarations** → Fully hoisted (can be called before declaration).
* **Function expressions** → NOT hoisted as functions (behave according to `var`/`let`/`const`).

```javascript
console.log(a);   // undefined (var is hoisted)
var a = 10;

console.log(b);   // ReferenceError: Cannot access 'b' before initialization
let b = 20;

greet();          // "Hello!" (function declaration is hoisted)
function greet() { console.log("Hello!"); }

sayHi();          // TypeError: sayHi is not a function
var sayHi = function() { console.log("Hi!"); };

```

---

### 3. What is the difference between `==` and `===`?

* `==` **(Loose Equality):** Compares values after type coercion.
* `===` **(Strict Equality):** Compares both value AND type without coercion.

```javascript
5 == "5";           // true  (string "5" coerced to number 5)
5 === "5";          // false (different types)
null == undefined;  // true
null === undefined; // false
0 == false;         // true
0 === false;        // false
NaN == NaN;         // false (NaN is never equal to anything)
NaN === NaN;        // false

```

> **Best Practice:** Always use `===` to avoid unexpected type coercion bugs.

---

### 4. What is the difference between `var`, `let`, and `const`?

| Feature | `var` | `let` | `const` |
| --- | --- | --- | --- |
| **Scope** | Function | Block | Block |
| **Hoisting** | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ) |
| **Re-declaration** | Yes | No | No |
| **Re-assignment** | Yes | Yes | No |
| **Global Object** | Yes (`window.x`) | No | No |

```javascript
if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x);  // 10 (function/globally scoped)
console.log(y);  // ReferenceError (block scoped)
console.log(z);  // ReferenceError (block scoped)

const obj = { name: "Krushna" };
obj.name = "Alex";   // ✅ Allowed (mutating property, not reassigning reference)
obj = {};            // ❌ TypeError (can't reassign const)

```

---

### 5. What is the Temporal Dead Zone (TDZ)?

The Temporal Dead Zone is the period between the start of a block scope and the point where a `let` or `const` variable is declared and initialized. Accessing the variable during this period throws a `ReferenceError`.

```javascript
{
    // TDZ starts here for 'x'
    console.log(x);  // ReferenceError: Cannot access 'x' before initialization
    let x = 10;      // TDZ ends here
    console.log(x);  // 10
}

```

> **Why TDZ exists:** It catches bugs where variables are used before being properly initialized, unlike `var` which silently returns `undefined`.

---

### 6. What is Type Coercion in JavaScript?

Type coercion is the automatic or implicit conversion of values from one data type to another.

#### Implicit Coercion (Automatic):

```javascript
// String concatenation wins with +
"5" + 3;        // "53"     (number → string)
"5" + true;     // "5true"

// Math operators (- * /) convert strings/booleans to numbers
"5" - 3;        // 2        (string → number)
"5" * 2;        // 10
"5" / 2;        // 2.5
true + 1;       // 2        (true → 1)
false + 1;      // 1        (false → 0)
null + 1;       // 1        (null → 0)
undefined + 1;  // NaN      (undefined → NaN)

```

#### Explicit Coercion (Manual):

```javascript
Number("42");     // 42
String(42);       // "42"
Boolean(0);       // false
Boolean("");      // false
Boolean("hello"); // true
parseInt("42px"); // 42
+"42";            // 42 (unary plus)

```

---

### Why does `[] + {}` evaluate to `"[object Object]"` while `{}` + `[]` evaluates to `0` in a statement context?

This behavior involves two core JavaScript mechanisms: **Type Coercion (`ToPrimitive`)** and **Grammar/Parsing Context**.

1. **How `[]` and `{}` convert to strings:**
* Both `[]` and `{}` are objects, but they use different `.toString()` implementations via the prototype chain.
* `Array.prototype.toString()` joins elements with commas. An empty array `[].toString()` converts to `""`.
* `{}` inherits from `Object.prototype.toString()`, which returns `"[object Object]"`.


2. **Parsing Rules (Expression vs. Statement Context):**
* **`[] + {}` (Expression Context):** Starts with `[]`, so the engine parses the whole line as an expression. Both operands convert to primitive strings and concatenate: `"" + "[object Object]"` → `"[object Object]"`.
* **`{} + []` as a standalone statement (Statement Context):** `{}` at the beginning of a line without surrounding parentheses is interpreted as an **empty code block** (and ignored). What remains is `+[]`, where `+` is a unary plus operator converting `[]` to a number: `+[]` → `+""` → `Number("")` → `0`.
* **`({} + [])` or `console.log({} + [])` (Expression Context):** Parentheses force `{}` to be evaluated as an Object Literal instead of a code block: `"[object Object]" + ""` → `"[object Object]"`.



```javascript
console.log([] + {});   // "[object Object]"
console.log({} + []);   // "[object Object]" (inside console.log, {} is in expression context)

// Standalone execution in REPL/Console:
{} + [];                // 0 ({} treated as empty block, evaluates +[])
(({} + []));            // "[object Object]" (parentheses force expression context)

```

---

### 7. What is Static Typing vs Dynamic Typing?

#### Static Typing (e.g., TypeScript, Java):

* Variable types are declared and checked at compile time.
* Type errors are caught before execution.

```typescript
// TypeScript
let name: string = "Krushna";
name = 42; // ❌ Compile-time error

```

#### Dynamic Typing (e.g., JavaScript, Python):

* Variable types are determined at runtime.
* A variable can hold any type and can change dynamically.

```javascript
let value = "hello";  // string
value = 42;           // now a number — no error
value = true;         // now a boolean — no error

```

---

### 8. What is `NaN` in JavaScript?

`NaN` stands for **"Not a Number"**. It indicates an invalid or unrepresentable numeric result, even though its `typeof` evaluates to `"number"`.

```javascript
typeof NaN;             // "number"
NaN === NaN;            // false (NaN is never equal to itself!)
NaN == NaN;             // false

isNaN("hello");         // true (tries to convert "hello" to number, fails)
Number.isNaN("hello");  // false (strict check — "hello" is not type number)
Number.isNaN(NaN);      // true

```

> **Best Practice:** Use `Number.isNaN()` instead of global `isNaN()` for accurate checks.

---

### 77. Why do operations like `0 / 0`, `parseInt("abc")`, and `Math.sqrt(-1)` return `NaN`?

`NaN` represents an unrepresentable or mathematically undefined numerical operation. Instead of throwing a fatal runtime crash, JavaScript returns `NaN`.

1. **`0 / 0` → `NaN` (Indeterminate Arithmetic):** Dividing a non-zero number by zero gives `Infinity` (`5 / 0`). Dividing `0` by `0` is mathematically indeterminate, resulting in `NaN`.
2. **`parseInt("abc")` → `NaN` (Failed String Parsing):** `parseInt()` parses strings left-to-right for valid numbers. It fails at the first character `'a'`, returning `NaN`. (`parseInt("123abc")` returns `123`).
3. **`Math.sqrt(-1)` → `NaN` (Imaginary Number):** The square root of a negative number yields a complex/imaginary number ($i$). The `Math` object only operates on standard **Real Numbers**.

```javascript
// 1. Indeterminate math
5 / 0;                  // Infinity
0 / 0;                  // NaN

// 2. Failed parsing
parseInt("123abc");     // 123
parseInt("abc");        // NaN

// 3. Imaginary number
Math.sqrt(16);          // 4
Math.sqrt(-1);          // NaN

```

---

### 9. What is the difference between `null` and `undefined`?

| Feature | `undefined` | `null` |
| --- | --- | --- |
| **Meaning** | Variable declared, but no value assigned | Intentional absence of any value |
| **Type** | `"undefined"` | `"object"` (historical JS bug) |
| **Set By** | JavaScript Engine | Developer explicitly |
| **Equality** | `null == undefined` → `true` | `null === undefined` → `false` |

```javascript
let a;
console.log(a);         // undefined
console.log(typeof a);  // "undefined"

let b = null;
console.log(b);         // null
console.log(typeof b);  // "object"

```

---

### 10. What is Strict Mode in JavaScript?

Strict mode (`"use strict";`) opts into a restricted variant of JavaScript that eliminates silent errors, prevents insecure actions, and aids engine optimizations.

```javascript
"use strict";

x = 10;                  // ❌ ReferenceError (must declare variables)
delete Object.prototype; // ❌ TypeError
function f(a, a) {}      // ❌ SyntaxError (duplicate parameters)

let y = 10;
delete y;                // ❌ SyntaxError (cannot delete unqualified identifier)

```

#### Key Restrictions:

* Cannot assign to undeclared variables.
* `this` inside a regular function defaults to `undefined` (not `window`).
* Prevents duplicate function parameter names.
* Disallows octal literals (e.g., `0123`).

---

### 11. Explain Scope and Scope Chain in JavaScript.

**Scope** determines the accessibility of variables and functions in code execution.

#### Types of Scope:

1. **Global Scope:** Accessible everywhere outside any function/block.
2. **Function Scope:** Accessible only inside the declaring function (`var`, `let`, `const`).
3. **Block Scope:** Accessible only within `{}` blocks (`let`, `const`).
4. **Module Scope:** Accessible strictly within the ES module file.

#### Scope Chain:

When a variable is accessed, JS looks at the current local scope. If not found, it traverses up through outer outer lexical environments until it reaches the global scope.

```javascript
let globalVar = "global";

function outer() {
    let outerVar = "outer";

    function inner() {
        let innerVar = "inner";
        console.log(innerVar);   // "inner"  (own local scope)
        console.log(outerVar);   // "outer"  (parent scope)
        console.log(globalVar);  // "global" (global scope)
    }

    inner();
}

outer();

```

---

### What is the difference between Global Scope and Module Scope in JavaScript?

```html
<!-- 1. Classic Script (Global Scope) -->
<!-- Variables leak to the global window object -->
<script>
  var x = 10;
  console.log(window.x); // 👉 10 (Attached to window!)
  console.log(x);        // 👉 10
</script>

<!-- 2. ES Module (Module Scope) -->
<!-- Variables are strictly isolated inside this module file -->
<script type="module">
  var y = 20;
  console.log(window.y); // 👉 undefined (NOT attached to window!)
  console.log(y);        // 👉 20 (Scoped to this file)
</script>

```

---

### 12. What is Pass by Value vs Pass by Reference?

* **Pass by Value (Primitives):** Copies the value directly. Changes do not affect the original variable.
* **Pass by Reference (Objects/Arrays):** Copies the memory address reference.

```javascript
// --- Pass by Value ---
let a = 10;
let b = a;     // b gets a COPY of 10
b = 20;
console.log(a); // 10 (unchanged)

// --- Mutating Reference (Affects both) ---
let obj1 = { name: "Krushna" };
let obj2 = obj1;
obj2.name = "Alex";
console.log(obj1.name); // "Alex" (Both changed!)

// --- Reassigning Reference (Breaks link) ---
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2 = [4, 5, 6];       // Reassigns arr2 to a NEW memory address
console.log(arr1);      // [1, 2, 3] (Original unchanged!)

```

---

### 13. What is the `debugger` statement?

The `debugger` statement triggers a breakpoint. If browser Developer Tools are open, script execution pauses at that line so you can inspect memory, variables, and the call stack.

```javascript
function calculate(a, b) {
    debugger; // Execution pauses here if DevTools are open
    let sum = a + b;
    return sum;
}

```

---

## SECTION 2: FUNCTIONS

### 14. What are Arrow Functions and how are they different from regular functions?

| Feature | Regular Function | Arrow Function |
| --- | --- | --- |
| **Syntax** | `function() {}` | `() => {}` |
| **`this` Binding** | Dynamic (based on caller) | Lexical (inherits from outer scope) |
| **`arguments` Object** | Available | Not available (use `...args`) |
| **Constructor (`new`)** | Yes | No (throws `TypeError`) |
| **Hoisting** | Fully hoisted (declaration) | Not hoisted (expression behavior) |

```javascript
// --- 'this' binding ---
const obj = {
    name: "Krushna",
    regularFunc: function() { console.log("Regular:", this.name); },
    arrowFunc: () => { console.log("Arrow:", this.name); }
};

obj.regularFunc(); // 👉 Regular: Krushna ('this' is obj)
obj.arrowFunc();   // 👉 Arrow: undefined  ('this' inherited from outer window scope)

// --- Arguments object ---
function showArgs() { console.log(arguments[0]); } // 👉 10
const showArgsArrow = (...args) => { console.log(args[0]); }; // 👉 10

```

---

### 15. What is an IIFE (Immediately Invoked Function Expression)?

An IIFE is a function that executes immediately after creation. It creates a private lexical scope to avoid polluting global scope.

```javascript
(function() {
    var privateVar = 10;
    console.log(privateVar); // 10
})();

// Arrow function IIFE with parameters
((name) => {
    console.log("Hello, " + name);
})("Krushna");

```

---

### 16. What are Higher-Order Functions?

A Higher-Order Function (HOF) is a function that either:

1. Accepts one or more functions as arguments.
2. Returns a new function as its result.

```javascript
// 1. Accepts a function as argument
function add(x, y) { return x + y; }
function operate(a, b, callback) {
    return callback(a, b);
}
console.log(operate(5, 4, add)); // 👉 9

// 2. Returns a function
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 👉 10

```

---

### 17. What are Callbacks?

A callback is a function passed into another function as an argument, intended to be executed inside that outer function.

```javascript
// Synchronous Callback
function processUser(name, callback) {
    console.log("Processing " + name);
    callback();
}
processUser("Krushna", () => console.log("Done!"));

// Asynchronous Callback
function getWeather(city, callback) {
    setTimeout(() => {
        callback(city, 28); // Triggered 2 seconds later
    }, 2000);
}
getWeather("Bhubaneswar", (city, temp) => {
    console.log(`${city} temperature: ${temp}°C`);
});

```

---

### How do you return data from an asynchronous operation like `setTimeout`?

You cannot `return` a value synchronously from an async callback. You must use **Callbacks**, **Promises**, or **Async/Await**:

```javascript
function processUser(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b); // Send data out via resolve()
        }, 2000);
    });
}

// Usage with async/await:
async function run() {
    const result = await processUser(5, 4); 
    console.log("Data extracted via await:", result); // 👉 9
}
run();

```

---

### 18. What is Callback Hell and how to avoid it?

Callback Hell refers to deeply nested asynchronous callbacks forming a pyramid shape ("Pyramid of Doom"), making code unreadable and error handling fragile.

```javascript
// ❌ CALLBACK HELL
getUser((err, user) => {
    getOrders(user.id, (err, orders) => {
        calculateTotal(orders, (err, total) => {
            console.log(`Total: ${total}`);
        });
    });
});

// ✅ MODERN SOLUTION (Async/Await)
async function processOrder() {
    try {
        const user = await getUser();
        const orders = await getOrders(user.id);
        const total = await calculateTotal(orders);
        console.log(`Total: ${total}`);
    } catch (err) {
        console.error("Error:", err);
    }
}

```

---

### 19. WHAT ARE CLOSURES IN JAVASCRIPT?

> **Category:** Know Code + Implementation (Output-Tracing & Stale Closures)

#### 1. Core Definition

A **closure** is the combination of a function bundled together with references to its surrounding lexical environment. An inner function always retains access to the variables of its outer function, even after the outer function has finished executing and returned.

#### 2. Production Example: Private State Cache Manager

```javascript
function createApiCache() {
    const cache = new Map(); // Private state enclosed in scope

    return {
        async get(key, fetcherFn) {
            if (cache.has(key)) {
                return cache.get(key);
            }
            const data = await fetcherFn();
            cache.set(key, data);
            return data;
        },
        clear() {
            cache.clear();
        }
    };
}

const userCache = createApiCache();
// userCache.cache is undefined (Truly private state)

```

#### 3. Output-Tracing Trap: Loop & `setTimeout`

```javascript
// ❌ Buggy Version (using 'var'):
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000); // Prints: 4, 4, 4
}

// ✅ Fix 1: Block Scope with 'let'
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000); // Prints: 1, 2, 3
}

// ✅ Fix 2: IIFE Closure
for (var i = 1; i <= 3; i++) {
    ((currentI) => {
        setTimeout(() => console.log(currentI), currentI * 1000); // Prints: 1, 2, 3
    })(i);
}

```

#### 4. Stale Closures in React

```javascript
// ❌ Stale Closure Bug: 'count' is captured at initial render (0)
useEffect(() => {
    const timer = setInterval(() => {
        setCount(count + 1); // Locks at 0 + 1 = 1 forever!
    }, 1000);
    return () => clearInterval(timer);
}, []);

// ✅ Solution: Functional State Updater
setCount(prevCount => prevCount + 1);

```

---

### 20. WHAT IS MEMOIZATION?

> **Category:** Know Code + Implementation (Custom Polyfill)

#### 1. Core Definition

Memoization is an optimization technique that speeds up functions by caching results based on inputs, returning cached results when identical inputs recur.

#### 2. Generic `memoize` Polyfill

```javascript
function memoize(fn, resolver) {
    const cache = new Map();

    return function(...args) {
        const key = resolver ? resolver(...args) : JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

```

---

### 21. WHAT IS RECURSION?

> **Category:** Know Code + Implementation (Tree Traversal & Stack Overflow)

#### 1. Core Definition

Recursion is a technique where a function calls itself to solve smaller instances of a problem until reaching a **base case** that stops execution.

#### 2. Arithmetic Example & Tree Traversal

```javascript
// Factorial
function factorial(n) {
    if (n <= 1) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Step
}

// Recursive DOM/Tree Search
function findElementById(node, targetId) {
    if (node.id === targetId) return node; // Base Case
    if (!node.children) return null;

    for (let child of node.children) {
        const found = findElementById(child, targetId);
        if (found) return found;
    }
    return null;
}

```

---

### 22. What is a Constructor Function?

A constructor function acts as a blueprint to create object instances using the `new` keyword.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Krushna", 25);

```

#### What `new` does under the hood:

1. Creates a brand new empty object `{}`.
2. Links the object's `__proto__` to the constructor function's `prototype`.
3. Binds `this` inside the constructor to the new object.
4. Returns the object automatically (unless an explicit object is returned).

---

### 23. What is Currying in JavaScript?

Currying transforms a function taking multiple arguments into a chain of functions that each take a single argument: $f(a, b, c) \rightarrow f(a)(b)(c)$.

```javascript
// Arrow syntax currying
const curriedAdd = a => b => c => a + b + c;
console.log(curriedAdd(1)(2)(3)); // 6

// Must-Know Interview Follow-up: Infinite Currying — add(1)(2)(3)...()
function add(a) {
    return function(b) {
        if (b !== undefined) return add(a + b); // Recursive step
        return a; // Terminating condition when called as ()
    };
}

console.log(add(1)(2)(3)());      // 6
console.log(add(5)(10)(15)(2)()); // 32

```

---

### 24. What is Function Composition?

Function composition combines two or more functions to produce a new function where the output of one function feeds into the input of the next.

```javascript
const double = x => x * 2;
const increment = x => x + 1;

// Pipe utility (Left to Right execution)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const calc = pipe(double, increment); // (3 * 2) + 1
console.log(calc(3)); // 7

```

---

## SECTION 3: `this` KEYWORD, `call`, `apply`, `bind`

### 25. Explain the `this` keyword in JavaScript.

`this` refers to the execution context of a function. Its value depends on **HOW** the function is invoked at runtime.

#### Execution Rules (Order of Precedence):

1. **`new` Binding:** `this` = newly constructed object instance.
2. **Explicit Binding (`call`/`apply`/`bind`):** `this` = explicitly passed target object.
3. **Implicit Binding:** `this` = object left of the dot (`obj.method()`).
4. **Default Binding:** `this` = `window` (non-strict) or `undefined` (strict mode).
5. **Arrow Functions:** `this` = inherited from outer enclosing lexical scope.

#### Output-Tracing Interview Traps:

```javascript
// Trap 1: Method Loss
const user = { name: "Krushna", getName() { console.log(this.name); } };
const fname = user.getName;
fname(); // undefined (called standalone -> Default binding)
// Fix: const fname = user.getName.bind(user);

// Trap 2: Callbacks & setTimeout
const userObj = {
    name: "Krushna",
    logName() {
        setTimeout(function() {
            console.log(this.name); // undefined (runs standalone in Event Loop)
        }, 100);
    }
};
// Fix: Use arrow function () => console.log(this.name)

// Trap 3: Chaining .bind()
function greet() { console.log(this.name); }
const bound = greet.bind({ name: "Krushna" }).bind({ name: "Rahul" });
bound(); // "Krushna" (.bind permanently locks context!)

```

---

### 26. What is `call()`, `apply()`, and `bind()`?

These methods manually specify the `this` execution context for functions.

```javascript
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const user = { name: "Krushna" };

// call(): Invokes immediately, arguments passed individually
greet.call(user, "Hello", "!"); // "Hello, Krushna!"

// apply(): Invokes immediately, arguments passed as an Array []
greet.apply(user, ["Hi", "."]); // "Hi, Krushna."

// bind(): Returns a NEW bound function. Does NOT execute immediately
const boundGreet = greet.bind(user, "Hey");
boundGreet("!!"); // "Hey, Krushna!!"

```

| Method | Invokes Immediately? | Argument Format | Memory Hook |
| --- | --- | --- | --- |
| **`call`** | **Yes** | Comma-separated (`a, b`) | **C**all = **C**ommas |
| **`apply`** | **Yes** | Array (`[a, b]`) | **A**pply = **A**rray |
| **`bind`** | **No** (returns new fn) | Comma-separated | **B**ind = **B**ound for later |

---

## SECTION 4: OBJECTS & PROTOTYPES

### 27. What are the different ways to create an Object in JavaScript?

```javascript
// 1. Object Literal
const obj1 = { name: "Krushna" };

// 2. Object.create()
const proto = { greet() { return "Hi"; } };
const obj2 = Object.create(proto);

// 3. Constructor Function
function Person(name) { this.name = name; }
const obj3 = new Person("Krushna");

// 4. ES6 Class
class User { constructor(name) { this.name = name; } }
const obj4 = new User("Krushna");

// 5. Factory Function
function createUser(name) { return { name }; }
const obj5 = createUser("Krushna");

```

---

### 28. What are Object Prototypes?

Every JavaScript object has an internal `[[Prototype]]` link to another object. Properties and methods not found on the instance are looked up along the **Prototype Chain**.

```javascript
const arr = [1, 2, 3];
// Lookup chain: arr → Array.prototype → Object.prototype → null

arr.push(4);      // Found on Array.prototype
arr.toString();  // Found on Object.prototype

```

---

### 29. What is Object Destructuring and Array Destructuring?

```javascript
// --- Object Destructuring ---
const user = { name: "Krushna", age: 25, city: "Bhubaneswar" };
const { name, age, country = "India" } = user; // Default value
const { name: userName } = user;               // Renaming

// --- Array Destructuring ---
const nums = [1, 2, 3, 4, 5];
const [first, second, ...rest] = nums; // rest = [3, 4, 5]
let a = 1, b = 2;
[a, b] = [b, a]; // Variable swap

```

---

### 30. What is the Rest Parameter and Spread Operator?

* **Rest Parameter (`...`)**: Gathers multiple standalone arguments into an array.
* **Spread Operator (`...`)**: Expands an array or object into individual elements.

```javascript
// Rest parameter
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Spread operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
const objClone = { ...{ a: 1, b: 2 } };

```

---

### 31. What is Optional Chaining (`?.`)?

Optional chaining safely reads nested properties without throwing a `TypeError` if an intermediate reference is `null` or `undefined`.

```javascript
const user = { name: "Krushna", address: { city: "BBR" } };

console.log(user?.address?.city); // "BBR"
console.log(user?.phone?.number); // undefined (No crash!)

```

---

### 32. What is the Nullish Coalescing Operator (`??`)?

`??` returns the right-hand operand **ONLY** when the left-hand operand is `null` or `undefined`. Unlike `||`, it does not treat `0`, `""`, or `false` as falsy.

```javascript
null ?? "default";      // "default"
undefined ?? "default"; // "default"
0 ?? "default";         // 0      (0 is valid!)
"" ?? "default";        // ""     ("" is valid!)

// Contrast with ||
0 || "default";         // "default" (0 treated as falsy)

```

---

## SECTION 5: ASYNC JAVASCRIPT

### 33. What is Synchronous vs Asynchronous JavaScript?

* **Synchronous:** Executes line-by-line in sequential order, blocking execution until each task completes.
* **Asynchronous:** Initiates long-running tasks off the main thread, allowing subsequent code to execute immediately without blocking.

---

### 34. What are Promises in JavaScript?

A Promise represents the eventual completion or failure of an asynchronous operation.

#### Three States:

1. **Pending:** Initial state.
2. **Fulfilled:** Operation succeeded (`resolve()`).
3. **Rejected:** Operation failed (`reject()`).

```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve("Success!");
    else reject("Error!");
});

myPromise
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => console.log("Done"));

```

---

### 35. What are `Promise.all`, `Promise.allSettled`, `Promise.race`, and `Promise.any`?

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject("Error");

// Promise.all(): Fails fast if ANY promise rejects
Promise.all([p1, p2]).then(console.log); // [1, 2]

// Promise.allSettled(): Waits for ALL to settle regardless of outcome
Promise.allSettled([p1, p3]).then(console.log); 
// [{ status: "fulfilled", value: 1 }, { status: "rejected", reason: "Error" }]

// Promise.race(): Returns whichever promise settles FIRST (success or fail)
Promise.race([p1, p2]).then(console.log); // 1

// Promise.any(): Returns the FIRST FULFILLED promise (ignores errors)
Promise.any([p3, p1]).then(console.log); // 1

```

---

### 36. What is Async/Await?

`async/await` is syntactic sugar built over Promises, allowing asynchronous code to be written with a clean, synchronous appearance.

```javascript
async function fetchData() {
    try {
        const response = await fetch("/api/data");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Fetch failed:", err);
    }
}

```

---

### 37. Explain the Event Loop in JavaScript.

JavaScript is single-threaded. The Event Loop enables non-blocking I/O by orchestrating execution between the **Call Stack**, **Web APIs**, **Microtask Queue**, and **Macrotask Queue**.

#### Execution Order Priority:

1. Execute current synchronous code on the **Call Stack**.
2. Drain the entire **Microtask Queue** completely.
3. Process ONE task from the **Macrotask Queue**.
4. Repeat.

```javascript
console.log("1");                             // Sync
setTimeout(() => console.log("2"), 0);         // Macrotask
Promise.resolve().then(() => console.log("3"));// Microtask
console.log("4");                             // Sync

// Output Order: 1 → 4 → 3 → 2

```

---

### 38. What is the difference between Microtasks and Macrotasks?

| Microtask Queue (High Priority) | Macrotask Queue (Lower Priority) |
| --- | --- |
| `Promise.then / .catch / .finally` | `setTimeout` / `setInterval` |
| `queueMicrotask()` | `setImmediate` (Node.js) |
| `MutationObserver` | I/O operations / DOM events |
| `process.nextTick` (Node.js) | `requestAnimationFrame` |

---

### 39. What is the role of `defer` and `async` script attributes?

```html
<!-- Normal: Blocks HTML parsing while downloading AND executing -->
<script src="app.js"></script>

<!-- Defer: Downloads in parallel, executes AFTER HTML parsing completes (Preserves Order) -->
<script defer src="app.js"></script>

<!-- Async: Downloads in parallel, executes IMMEDIATELY when downloaded (No Order Guarantee) -->
<script async src="analytics.js"></script>

```

---

## SECTION 6: BUILT-IN METHODS & DATA STRUCTURES

### 40. Explain `map()`, `filter()`, `reduce()`, and `forEach()`.

```javascript
// map(): Returns a NEW array with transformed values
[1, 2, 3].map(x => x * 2); // [2, 4, 6]

// filter(): Returns a NEW array with elements matching condition
[1, 2, 3, 4].filter(x => x > 2); // [3, 4]

// reduce(): Accumulates values into a single output
[1, 2, 3, 4].reduce((acc, x) => acc + x, 0); // 10

// forEach(): Iterates for side effects (returns undefined)
[1, 2, 3].forEach(x => console.log(x));

```

---

### 41. What is the difference between `find()`, `findIndex()`, `indexOf()`, and `includes()`?

```javascript
const arr = [10, 20, 30, 40];

arr.find(x => x > 25);      // 30 (First matching element)
arr.findIndex(x => x > 25); // 2  (Index of first match)
arr.indexOf(30);            // 2  (Exact value match index)
arr.includes(30);           // true (Boolean presence check)

```

---

### 42. What is the difference between `slice()` and `splice()`?

* `slice(start, end)`: Returns a shallow copy of a portion of an array. **Non-mutating**.
* `splice(start, deleteCount, ...items)`: Adds/removes elements directly. **Mutates original array**.

```javascript
const arr = [1, 2, 3, 4, 5];

arr.slice(1, 3); // [2, 3] (Original arr unchanged)

arr.splice(1, 2); // Removes 2 items starting at index 1 -> arr is now [1, 4, 5]

```

---

### 43. What is the difference between `for...in` and `for...of`?

* `for...in`: Iterates over enumerable **Keys/Properties** (Objects).
* `for...of`: Iterates over iterable **Values** (Arrays, Strings, Maps, Sets).

```javascript
const obj = { a: 1, b: 2 };
for (let key in obj) console.log(key); // "a", "b"

const arr = [10, 20];
for (let val of arr) console.log(val); // 10, 20

```

---

### 44. What is the difference between Array and Set?

| Feature | Array | Set |
| --- | --- | --- |
| **Duplicates** | Allowed | Strictly forbidden (Unique values) |
| **Access** | By index (`arr[0]`) | No index access |
| **Element Check** | `arr.includes(x)` ($O(N)$ time) | `set.has(x)` ($O(1)$ time) |
| **Size** | `.length` | `.size` |

```javascript
const set = new Set([1, 2, 2, 3]); // Set { 1, 2, 3 }
const uniqueArr = [...set];        // [1, 2, 3]

```

---

### 45. What is the difference between `Set` and `WeakSet`?

* `Set`: Can hold primitive values or objects. Strongly referenced (prevents Garbage Collection).
* `WeakSet`: Holds **Objects only**. Weakly referenced (allows GC if no other references exist). Non-iterable.

---

### 46. What is the difference between Object and Map?

| Feature | Object | Map |
| --- | --- | --- |
| **Key Types** | Strings and Symbols only | Any type (Functions, Objects, Primitives) |
| **Order** | Not guaranteed | Insertion order guaranteed |
| **Size** | `Object.keys(obj).length` | Direct `.size` property |
| **Performance** | Basic lookups | Optimized for frequent additions/deletions |

---

### 47. Common String Methods.

```javascript
const str = "  Hello World!  ";

str.trim();            // "Hello World!"
str.toLowerCase();     // "  hello world!  "
str.includes("World"); // true
str.slice(2, 7);       // "Hello"
str.replace("World", "JS"); // "  Hello JS!  "
str.split(" ");        // ["", "", "Hello", "World!", "", ""]

```

---

### 48. Common Array Methods.

```javascript
const arr = [3, 1, 4, 1, 5];

arr.push(9);                          // Adds to end
arr.pop();                           // Removes from end
arr.unshift(0);                       // Adds to start
arr.shift();                         // Removes from start
arr.flat(Infinity);                  // Flattens deeply nested arrays
arr.toSorted((a, b) => a - b);        // ES2023 non-mutating sort

```

---

## SECTION 7: DEEP CLONE vs SHALLOW CLONE

### 49. What is the difference between Shallow Clone and Deep Clone?

* **Shallow Clone:** Copies top-level properties. Nested objects retain memory references to original.
* **Deep Clone:** Recursively copies all properties, creating completely independent nested copies.

```javascript
const original = { name: "Krushna", address: { city: "BBR" } };

// Shallow Copy
const shallow = { ...original };
shallow.address.city = "Delhi"; // ⚠️ Mutates original.address.city too!

// Deep Copy (Modern Recommended ES2022 API)
const deep = structuredClone(original);
deep.address.city = "Mumbai"; // ✅ Original remains "Delhi"

```

---

## SECTION 8: ES6+ MODERN JAVASCRIPT

### 50. What are ES6 Classes?

Classes offer clear syntax for prototype-based inheritance.

```javascript
class Animal {
    constructor(name) { this.name = name; }
    speak() { return `${this.name} makes a sound`; }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    speak() { return `${this.name} barks`; } // Method overriding
}

```

---

### 51. What are Private Class Fields (`#`)?

Private fields starting with `#` cannot be read or modified outside the class body.

```javascript
class BankAccount {
    #balance = 0;

    constructor(initial) { this.#balance = initial; }
    get balance() { return this.#balance; }
}

const account = new BankAccount(100);
console.log(account.balance);  // 100
// console.log(account.#balance); // ❌ SyntaxError

```

---

### 52. What are Template Literals and Tagged Templates?

```javascript
// Template Literal
const name = "Krushna";
const str = `Hello, ${name}!`;

// Tagged Template
function highlight(strings, ...values) {
    return strings.reduce((res, str, i) => `${res}${str}<b>${values[i] || ""}</b>`, "");
}
const output = highlight`Name: ${name}`; // "Name: <b>Krushna</b>"

```

---

### 53. What are Symbols in JavaScript?

Symbols are unique, immutable primitive data types used primarily as object keys to prevent property collision.

```javascript
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false (Every Symbol is unique!)

const user = { [sym1]: 12345 };

```

---

### 54. What are Generators and Iterators?

Generators are functions that can be paused (`yield`) and resumed (`next()`), maintaining state across executions.

```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }

```

---

### 55. What is the difference between ES Modules and CommonJS?

| Feature | ES Modules (ESM) | CommonJS (CJS) |
| --- | --- | --- |
| **Syntax** | `import / export` | `require() / module.exports` |
| **Loading** | Asynchronous / Static | Synchronous / Dynamic |
| **Environment** | Browsers & Modern Node | Legacy Node.js |
| **Tree-Shaking** | Supported | Not supported |

---

### 56. What is `Proxy` and `Reflect` in JavaScript?

A `Proxy` wraps an object to intercept and customize low-level operations (such as property lookup, assignment, or function invocation). `Reflect` provides matching default methods.

```javascript
const user = { name: "Krushna" };

const proxy = new Proxy(user, {
    get(target, prop) {
        console.log(`Accessing property: ${prop}`);
        return Reflect.get(target, prop);
    }
});

console.log(proxy.name); // Logs access, then returns "Krushna"

```

---

### 57. What is `WeakRef` and `FinalizationRegistry`?

* `WeakRef`: Holds a weak reference to an object without preventing Garbage Collection.
* `FinalizationRegistry`: Registers a cleanup callback that triggers after an object instance is garbage collected.

---

### 58. What is the difference between `test()` and `exec()` in RegExp?

* `test()`: Returns a boolean (`true`/`false`) indicating if a string matches the pattern.
* `exec()`: Returns an array containing match details (or `null`).

```javascript
/hello/.test("hello world"); // true
/(\d+)/.exec("age: 25");     // ["25", "25", index: 5, ...]

```

---

### 59. What are the core Error Types in JavaScript?

1. **`SyntaxError`:** Invalid code parsing syntax.
2. **`ReferenceError`:** Variable referenced does not exist in scope.
3. **`TypeError`:** Operation performed on an incompatible data type.
4. **`RangeError`:** Numeric variable exceeds allowed limit.
5. **`URIError`:** Invalid parameter passed to `encodeURI()` or `decodeURI()`.

---

### 60. What is the DOM and BOM?

* **DOM (Document Object Model):** Represents HTML document nodes as objects (`document.getElementById()`).
* **BOM (Browser Object Model):** Interacts with the browser window environment (`window.location`, `window.localStorage`, `window.navigator`).

---

### 61. What is Client-side vs Server-side JavaScript?

* **Client-side JS:** Runs inside the browser, managing UI rendering, DOM mutations, and browser events.
* **Server-side JS:** Runs on server runtimes (Node.js/Deno/Bun), managing filesystem I/O, databases, and HTTP server routes.

---

### 62. What are the advantages of External JavaScript files?

1. Keeps code structured (Separation of Concerns).
2. Facilitates browser caching across web pages.
3. Allows usage of script loading tags (`defer`, `async`).

---

### 63. What is Loosely Coupled vs Tightly Coupled?

* **Loosely Coupled:** Components maintain minimal dependency on each other, improving modularity and testability.
* **Tightly Coupled:** Components depend heavily on internal implementations of each other, making refactoring difficult.

---

### 64. What are Logical Assignment Operators?

```javascript
let a = 0;
a ||= 10;   // a = 10 (Assigns because 0 is falsy)

let b = 5;
b &&= 20;  // b = 20 (Assigns because 5 is truthy)

let c = null;
c ??= "default"; // c = "default" (Assigns because c is null)

```

---

### 65. What is `Object.hasOwn()` vs `hasOwnProperty()`?

`Object.hasOwn()` (ES2022) is a safer static alternative to `obj.hasOwnProperty()` because it works reliably even on objects created with `Object.create(null)`.

```javascript
const obj = Object.create(null);
obj.key = "value";

// obj.hasOwnProperty("key"); // ❌ TypeError: obj.hasOwnProperty is not a function
Object.hasOwn(obj, "key");    // ✅ true

```

---

### 66. What is the difference between `structuredClone()` and `JSON.parse(JSON.stringify())`?

| Feature | `JSON.parse(JSON.stringify())` | `structuredClone()` |
| --- | --- | --- |
| **Dates** | Converted to ISO Strings | Preserved as `Date` objects |
| **RegExp** | Converted to `{}` empty objects | Preserved |
| **Map & Set** | Lost | Preserved |
| **Circular References** | ❌ Throws `TypeError` | ✅ Supported |

---

### 67. What is Top-Level Await?

Top-Level Await (ES2022) allows module developers to use `await` outside `async` functions at the root scope of an ES Module.

```javascript
// Module file (.mjs)
const response = await fetch("/api/config");
export const config = await response.json();

```

---

### 68. What is Debouncing and Throttling?

* **Debouncing:** Postpones function execution until a specified delay has elapsed since the last function invocation.
* **Throttling:** Enforces maximum execution frequency, invoking the function at most once per specified time interval.

```javascript
// Debounce Utility
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Throttle Utility
function throttle(fn, limit) {
    let inThrottle = false;
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

```

---

### 69. What is the execution behavior of `setTimeout(fn, 0)`?

Even with $0\text{ ms}$ delay, the callback is dispatched to the Macrotask Queue. Execution is deferred until the Call Stack is completely clear and all Microtasks are fully drained.

---

### 70. Compare `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()`.

| Method | Add Properties? | Delete Properties? | Modify Existing Properties? |
| --- | --- | --- | --- |
| **`Object.freeze()`** | ❌ No | ❌ No | ❌ No |
| **`Object.seal()`** | ❌ No | ❌ No | ✅ Yes |
| **`Object.preventExtensions()`** | ❌ No | ✅ Yes | ✅ Yes |

---

### 71. Spread Operator usages in Function calls vs Literals.

* **Function Calls:** Unpacks an array into standalone argument parameters (`Math.max(...nums)`).
* **Array Literals:** Concatenates arrays into a new array (`[...a, ...b]`).
* **Object Literals:** Shallow copies or merges object properties (`{ ...obj1, ...obj2 }`).

---

### 72. What is Short-Circuit Evaluation?

Short-circuit evaluation evaluates expressions left-to-right and halts as soon as the outcome is guaranteed.

```javascript
// OR (||): Returns first truthy value
const name = userName || "Default Name";

// AND (&&): Executes right side only if left side is truthy
isLoggedIn && showProfile();

```

---

### 73. What is `WeakMap` vs `Map`?

* **`Map`:** Keys can be any data type. Strongly holds references (prevents Garbage Collection).
* **`WeakMap`:** Keys **MUST be Objects**. Holds weak references allowing keys to be garbage collected if unused elsewhere. Non-iterable.

---

### 74. What is `globalThis`?

`globalThis` provides a standard global namespace object across all JS execution runtimes (Browsers, Node.js, Web Workers).

```javascript
// Browser -> window
// Node.js -> global
// Works Everywhere:
globalThis.setTimeout(() => console.log("Universal"), 100);

```

---

### 75. Compare Error Handling approaches in JavaScript.

#### 1. `try / catch / finally` (Synchronous / Async-Await)

```javascript
try {
    const data = JSON.parse(str);
} catch (err) {
    console.error("Parsing error:", err);
} finally {
    console.log("Cleanup executed");
}

```

#### 2. Promise `.catch()`

```javascript
fetchData()
    .then(res => res.json())
    .catch(err => console.error(err));

```

#### 3. Global Unhandled Handlers

```javascript
// Browser
window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled Promise rejection:", event.reason);
});

// Node.js
process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
});

```

# ================================================================================

END OF JAVASCRIPT THEORY & CONCEPTS (75 QUESTIONS)

```

```