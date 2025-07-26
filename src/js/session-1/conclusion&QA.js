/*
# Conclusion

1- Node.js as a Runtime Environment

Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side JS execution and scalable networking.

2- Variable Scope

- Global scope: accessible anywhere in the app.

- Local (function) scope: confined to function bodies.

- Block scope: created by blocks (e.g. { … }) via let or const.

3- Variable Declarations: var, let, const

- const: immutable binding (cannot be reassigned).

- let: mutable binding, block-scoped.

- var: function-scoped, hoisted—generally discouraged in modern JS.

4- Hoisting Behavior

var variables are hoisted (initially undefined).

let and const are also hoisted but uninitialized (temporal dead zone), causing runtime errors if accessed before declaration.

5- JavaScript Data Types

- Primitives: string, number, boolean, null, undefined.

- Non‑primitives: arrays & objects (both yield "object" with typeof).

- Confirm arrays with Array.isArray() or instanceof Array.

6- Working with Objects

- Creation via literal ({}) or new Object().

- Access, modify, add, delete properties; use Object.keys, values, entries, assign, spread operator.

- Control mutability using Object.freeze() (makes immutable) and Object.seal() (prevents adding/deleting props).

7- Arrays in Node.js

- Creation via literal or new Array().

- Access/update elements; methods like push, pop, shift, unshift, slice, splice.

- Use Array.from, Array.of, and checking array type with Array.isArray().
 */


/*
 Test Questions (with Answers)

1. What is Node.js, and why is it useful?

- Answer:
Node.js is a JavaScript runtime built on Chrome’s V8 engine, allowing JavaScript to run on the server side.
 It’s useful for creating scalable, non-blocking (event-driven) network applications.


---------------------------------------------------------------------------------------------
2. Explain the difference between global scope, local scope, and block scope.

- Answer:
Global scope: variables declared outside any function or block; accessible everywhere.

Local (function) scope: declared inside a function; accessible only within that function.

Block scope: created by blocks ({ ... }) for let and const; accessible only within that block.


---------------------------------------------------------------------------------------------
3. What is the difference between var, let, and const?

- Answer:
var: function-scoped; hoisted with default value undefined.

let: block-scoped; cannot be accessed before initialization.

const: block-scoped; binding cannot be reassigned (though contents of objects/arrays may change).


---------------------------------------------------------------------------------------------
4. Why is hoisting behavior for var, let, and const important to understand?

- Answer:
var gets hoisted, meaning it’s defined at top of scope (default undefined), which can cause
unexpected behavior. let and const are hoisted but not initialized, causing errors if accessed
before declaration (temporal dead zone). This affects code reliability.

---------------------------------------------------------------------------------------------
5. Identify primitive and non-primitive data types in JavaScript.

- Answer:
Primitive: string, number, boolean, null, undefined.

Non‑primitive: object (including arrays and functions).


---------------------------------------------------------------------------------------------
6. How can you tell if a JavaScript variable is an array or a plain object?

- Answer:
Use Array.isArray(variable) or variable instanceof Array — only arrays return true.
 typeof returns "object" for both arrays and objects.


---------------------------------------------------------------------------------------------
7. Provide examples of object operations: creation, access, modification, and immutability.

- Answer:

 */

// Creation:
let obj = { name: "Alice", age: 25 };
let obj2 = new Object();

//Access/modify:
obj.age = 26;
console.log(obj.name); // Alice
console.log(obj.age); // 26

//Add/delete:

obj.email = "alice@example.com";
delete obj.age;

// Immutability
Object.freeze(obj);
obj.name = "Bob";  // fails silently or throws
Object.seal(obj);
obj.newProp = "value";  // fails


/*
---------------------------------------------------------------------------------------------
8. Describe common array operations in Node.js.

- Answer:
- Create: let arr = [1, 2, 3] or new Array("a", "b").

- Access/update: arr[0] = 10.

- Methods:
   . push() / pop(): add/remove end,

   . unshift() / shift(): add/remove front,

   . slice(): extract portion,

   . splice(): remove/insert elements.


---------------------------------------------------------------------------------------------
9. What do these return?

let x;
console.log(typeof x);
console.log(typeof null);
console.log(Array.isArray([]));

- Answer:

typeof x → "undefined"

typeof null → "object" (quirk)

Array.isArray([]) → true


---------------------------------------------------------------------------------------------
10. Explain how to make a shallow copy of an object and why that matters.

- Answer:
Use Object.assign({}, sourceObj) or the spread operator { ...sourceObj } to create a shallow clone.
This ensures modifying the clone doesn’t alter the original.
Useful for immutability patterns and avoiding side effects.


 */