Here are **10 high-frequency, tricky output-based JavaScript questions** frequently asked in senior (4+ Yrs) interview rounds, complete with execution traces and concise "Why" explanations.

---

### Question 1: Async/Await Microtask Queueing

```javascript
async function async1() {
    console.log('1');
    await async2();
    console.log('2');
}

async function async2() {
    console.log('3');
}

console.log('4');

setTimeout(() => {
    console.log('5');
}, 0);

async1();

new Promise((resolve) => {
    console.log('6');
    resolve();
}).then(() => {
    console.log('7');
});

console.log('8');

```

**Output:**

```text
4
1
3
6
8
2
7
5

```

**Why:**

1. Synchronous execution runs first: `4` is logged.
2. `async1()` is invoked $\rightarrow$ logs `1`. It calls `async2()`, which logs `3`. The `await` pauses `async1` and queues its continuation (`console.log('2')`) into the **Microtask Queue**.
3. Promise executor runs synchronously $\rightarrow$ logs `6`. Its `.then()` callback (`console.log('7')`) is queued into the **Microtask Queue**.
4. Synchronous code continues $\rightarrow$ logs `8`.
5. Call stack empties. Microtask Queue processes in FIFO order: logs `2`, then logs `7`.
6. Macrotask Queue processes `setTimeout` $\rightarrow$ logs `5`.

---

### Question 2: Object Key Implicit Coercion

```javascript
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

```

**Output:**

```text
456

```

**Why:**
JavaScript object keys must be Strings or Symbols. When passing an object as a key (`a[b]`), JS implicitly converts it to a string by calling `.toString()`, which evaluates to `"[object Object]"`.

* `a[b] = 123` becomes `a["[object Object]"] = 123`.
* `a[c] = 456` overwrites `a["[object Object]"] = 456`.
* `a[b]` retrieves `a["[object Object]"]`, returning `456`.
*(To avoid this, use a ES6 `Map`)*.

---

### Question 3: Function Scope vs Block Scope Hoisting

```javascript
var x = 1;

function foo() {
    console.log(x);
    var x = 2;
}

foo();

```

**Output:**

```text
undefined

```

**Why:**
Inside `foo()`, `var x` is hoisted to the top of the function's local scope, shadowing the global `var x = 1`. However, only the declaration is hoisted, not the initialization (`x = 2`). Thus, when `console.log(x)` runs, local `x` exists but is `undefined`.

---

### Question 4: Temporal Dead Zone (TDZ) Shadowing

```javascript
let a = 10;

function check() {
    console.log(a);
    let a = 20;
}

check();

```

**Output:**

```text
Uncaught ReferenceError: Cannot access 'a' before initialization

```

**Why:**
`let` and `const` variables **are hoisted**, but they reside in a **Temporal Dead Zone (TDZ)** from the start of the block until the execution reaches the declaration line. Inside `check()`, local `let a` shadows the outer `a = 10`, but accessing it before `let a = 20` executes throws a `ReferenceError`.

---

### Question 5: `this` Context in Arrow vs Regular Functions

```javascript
const user = {
    name: 'Alice',
    regularFunc: function() {
        console.log(this.name);
    },
    arrowFunc: () => {
        console.log(this.name);
    },
    nestedFunc: function() {
        const inner = () => console.log(this.name);
        inner();
    }
};

user.regularFunc();
user.arrowFunc();
user.nestedFunc();

```

**Output:**

```text
Alice
undefined (or "" in browser non-strict)
Alice

```

**Why:**

1. `regularFunc`: Called directly as a method of `user`, so `this` points to `user`.
2. `arrowFunc`: Arrow functions do **not** have their own `this`. They inherit `this` lexically from their outer scope (here, the global/window context where `user` was defined), where `this.name` is `undefined`.
3. `nestedFunc`: The outer regular function's `this` is bound to `user`. The inner arrow function inherits this lexical `this`, logging `'Alice'`.

---

### Question 6: Implicit Type Coercion (+ vs -)

```javascript
console.log(1 + '2' + '2');
console.log(1 + +'2' + '2');
console.log('A' - 'B' + '2');
console.log('A' - 'B' + 2);

```

**Output:**

```text
"122"
"32"
"NaN2"
NaN

```

**Why:**

1. `1 + '2'` $\rightarrow$ String concatenation `"12"`. `"12" + '2'` $\rightarrow$ `"122"`.
2. `+'2'` uses unary plus to coerce `'2'` into number `2`. So `1 + 2` $\rightarrow$ `3`. Then `3 + '2'` $\rightarrow$ `"32"`.
3. `'A' - 'B'` evaluates numeric subtraction on non-numeric strings $\rightarrow$ `NaN`. Then `NaN + '2'` $\rightarrow$ `"NaN2"`.
4. `NaN + 2` $\rightarrow$ any numeric operation on `NaN` results in `NaN`.

---

### Question 7: Promise Resolution Immutability

```javascript
const p = new Promise((resolve, reject) => {
    resolve('Success 1');
    reject('Error 1');
    resolve('Success 2');
});

p.then((res) => console.log(res))
 .catch((err) => console.log(err));

```

**Output:**

```text
Success 1

```

**Why:**
A Promise state can only change **once** (from `pending` to either `fulfilled` or `rejected`). Any subsequent calls to `resolve()` or `reject()` inside the executor function are completely ignored.

---

### Question 8: Closure Traps in Array Methods (`map` index)

```javascript
console.log(["1", "2", "3"].map(parseInt));

```

**Output:**

```text
[1, NaN, NaN]

```

**Why:**
`Array.prototype.map` passes 3 arguments to its callback: `(element, index, array)`.
`parseInt` accepts 2 arguments: `(string, radix)`.

The calls happen as follows:

* `parseInt("1", 0)` $\rightarrow$ radix `0` defaults to base 10 $\rightarrow$ `1`
* `parseInt("2", 1)` $\rightarrow$ radix `1` is invalid $\rightarrow$ `NaN`
* `parseInt("3", 2)` $\rightarrow$ `"3"` is not a valid binary digit $\rightarrow$ `NaN`

*(Fix: `["1", "2", "3"].map(num => parseInt(num, 10))`)*

---

### Question 9: Object Mutation vs Reassignment inside Functions

```javascript
function modify(obj, num) {
    obj.name = 'Updated';
    num = 100;

    obj = { name: 'Reassigned' };
}

const user = { name: 'Original' };
let count = 10;

modify(user, count);

console.log(user.name);
console.log(count);

```

**Output:**

```text
Updated
10

```

**Why:**

1. `num` (primitive) is passed by **value**. Mutating `num = 100` inside the function does not affect `count`.
2. `user` (object) is passed by **copy of reference**.
* `obj.name = 'Updated'` mutates the original object in memory.
* `obj = { name: 'Reassigned' }` rebinds the local parameter pointer `obj` to a new object in memory, leaving the outer `user` reference unaffected.



---

### Question 10: Array Length Truncation & Sparse Arrays

```javascript
const arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log(arr);

arr.length = 5;
console.log(arr[3]);
console.log(Object.keys(arr));

```

**Output:**

```text
[1, 2]
undefined
["0", "1"]

```

**Why:**

1. Setting `arr.length = 2` **mutates and truncates** the array, deleting elements at indices `2, 3, 4`.
2. Resetting `arr.length = 5` allocates space without creating elements (creates a sparse array / empty slots).
3. `arr[3]` returns `undefined` because index `3` doesn't exist.
4. `Object.keys(arr)` ignores empty slots in sparse arrays, returning only actual initialized indices `["0", "1"]`.