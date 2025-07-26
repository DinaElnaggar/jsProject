/*

* Node.js -> Session 1
* This file contains the code for the first session of the Node.js course.
* It includes basic examples of Node.js functionality.

* Node.js -> run time environment
* Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* It allows developers to run JavaScript on the server side, enabling the creation of scalable network

* variables -> global, local, block scope
* In Node.js, variables can be defined in different scopes:
* - Global scope: Variables defined outside of any function or block, accessible throughout the entire application
* - Local scope: Variables defined within a function, accessible only within that function
* - Block scope: Variables defined within a block (e.g., inside curly braces), accessible
*   only within that block
* - Example:

 */

let globalVar = "I am a global variable";
function localScopeExample() {
    let localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
console.log(globalVar); // Accessible here
localScopeExample();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined (not accessible here)
{
    if (true) {
        let blockVar = "I am a block-scoped variable";
        console.log(blockVar); // Accessible here
    }
    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined (not accessible here)
}


/*
* variables -> const, let, var
* In Node.js, variables can be declared using `const`, `let`, or `var`:
* - `const`: Used to declare constants, which cannot be reassigned after their initial assignment.
* - `let`: Used to declare variables that can be reassigned, with block scope
* - `var`: Used to declare variables with function scope, which can be reassigned.
* - Example:
 */

const constantVar = "I am a constant variable";
let mutableVar = "I can be changed";
mutableVar = "I have been changed";
var functionScopedVar = "I am function scoped";
console.log(constantVar); // I am a constant variable
console.log(mutableVar); // I can be changed
console.log(functionScopedVar); // I am function scoped
functionScopedVar = "I have been changed";
console.log(functionScopedVar); // I have been changed

{
    var blockScopedVar = "I am block scoped";
}
console.log(blockScopedVar); // I am block scoped (var is function scoped, not block
// scoped, so it is accessible here)

// Note: Using `var` is generally discouraged in modern JavaScript due to its function scope behavior,
// which can lead to unexpected results. It is recommended to use `let` and `const` for variable declarations.
// `const` is used for constants, `let` is used for variables that can change, and `var` is used for function-scoped variables.
// In modern JavaScript, `let` and `const` are preferred over `var` due to their block scope behavior,
// which helps prevent issues related to variable hoisting and scope leakage.

// Example of variable hoisting with `var`
console.log(hoistedVar); // undefined (due to hoisting)
var hoistedVar = "I am hoisted";
// Example of variable hoisting with `let` and `const`
// console.log(hoistedLet); // Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am hoisted with let";
// console.log(hoistedConst); // Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am hoisted with const";

// Note: Variables declared with `let` and `const` are not hoisted in the same way as `var`.
// They are in a "temporal dead zone" until they are initialized, which means they
// cannot be accessed before their declaration.
// This helps prevent issues related to variable hoisting and scope leakage.

// Example of using `let` and `const` in a loop
for (let i = 0; i < 3; i++) {
    console.log(`Loop iteration ${i}`); // i is block scoped, so it is accessible here
}
// console.log(i); // Uncaught ReferenceError: i is not defined (not accessible here)

// Example of using `const` in a loop
const array = [1, 2, 3];
for (const element of array) {
    console.log(`Element: ${element}`); // element is block scoped, so it is accessible here
}
// console.log(element); // Uncaught ReferenceError: element is not defined (not accessible here
// Note: `const` is used for constants, which cannot be reassigned after their initial assignment.

// However, if the constant is an object or an array, its properties or elements can be
// modified, but the reference to the object or array cannot be changed.

// Example of modifying properties of a constant object
const constantObject = { key: "value" };
constantObject.key = "new value"; // Allowed, as we are modifying a property, not

// reassigning the constant itself
console.log(constantObject); // { key: 'new value' }

// Example of modifying elements of a constant array
const constantArray = [1, 2, 3];
constantArray[0] = 10; // Allowed, as we are modifying an element,
// not reassigning the constant itself
console.log(constantArray); // [10, 2, 3]

// Note: It is a common practice to use `const` for variables that should not be reassigned,
// and `let` for variables that can change. This helps improve code readability and maintainability
// by making the intent of the variable clear.
// Using `var` is generally discouraged in modern JavaScript due to its function scope behavior,
// which can lead to unexpected results. It is recommended to use `let` and `const



/*
* data types -> string, number, boolean, null, undefined, object, array
* primitives -> string, number, boolean, null, undefined
* non-primitives -> object, array
* In Node.js, data types can be categorized into two main groups:
* - Primitive data types: These are basic data types that represent single values.
*  They include:
*  - String: Represents a sequence of characters, enclosed in single or double quotes.
*  - Number: Represents numeric values, both integers and floating-point numbers.
*  - Boolean: Represents a logical value, either true or false.
*  - Null: Represents the intentional absence of any value.
*  - Undefined: Represents a variable that has been declared but not assigned a value.
* - Non-primitive data types: These are more complex data types that can hold multiple values or properties.
* They include:
* - Object: Represents a collection of key-value pairs, where keys are strings and values can be of any data type.
* - Array: Represents an ordered collection of values, which can be of any data type.
* Example:
 */
let stringVar = "Hello, Node.js"; // String
let numberVar = 42; // Number
let booleanVar = true; // Boolean
let nullVar = null; // Null
let undefinedVar; // Undefined (not assigned a value)
let objectVar = { key: "value", anotherKey: 123 }; // Object
let arrayVar = [1, 2, 3, "four", true]; // Array

console.log(stringVar); // Hello, Node.js
console.log(numberVar); // 42
console.log(booleanVar); // true
console.log(nullVar); // null
console.log(undefinedVar); // undefined
console.log(objectVar); // { key: 'value', anotherKey: 123 }
console.log(arrayVar); // [ 1, 2, 3, 'four', true ]


// Note: In Node.js, you can check the data type of a variable using the `typeof` operator.
console.log(typeof stringVar); // string
console.log(typeof numberVar); // number
console.log(typeof booleanVar); // boolean
console.log(typeof nullVar); // object (this is a known quirk in JavaScript)
console.log(typeof undefinedVar); // undefined
console.log(typeof objectVar); // object
console.log(typeof arrayVar); // object (arrays are a type of object in JavaScript)

// Note: In JavaScript, arrays are a special type of object, so `typeof` will return "object" for arrays.
// To check if a variable is an array, you can use the `Array.isArray()`
console.log(Array.isArray(arrayVar)); // true
console.log(Array.isArray(objectVar)); // false

// Note: In Node.js, you can also use the `instanceof` operator to check if a variable is an instance of a specific type.
console.log(arrayVar instanceof Array); // true
console.log(objectVar instanceof Object); // true
console.log(stringVar instanceof String); // false (stringVar is a primitive string, not an instance of String object)

// Note: In JavaScript, strings are immutable, meaning you cannot change a character in a string directly.
// Instead, you can create a new string with the desired changes.
let originalString = "Hello, World!";
let modifiedString = originalString.replace("World", "Node.js");
console.log(originalString); // Hello, World!
console.log(modifiedString); // Hello, Node.js

// Note: In Node.js, you can also use template literals (backticks) to create multi-line strings and embed expressions.
let name = "Node.js";
let greeting = `Hello, ${name}! Welcome to the Node.js course.`;
console.log(greeting); // Hello, Node.js! Welcome to the Node.js course.

// Note: Template literals allow for easier string interpolation and multi-line strings.
// Example of using template literals for multi-line strings
let multiLineString = `This is a multi-line string.
It can span multiple lines without needing to use escape characters.`;
console.log(multiLineString);

// Note: In Node.js, you can also use the `Buffer` class to work with binary data.
const buffer = Buffer.from("Hello, Node.js");
console.log(buffer); // <Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73>
// Note: Buffers are used to handle binary data in Node.js,
// such as reading files, network communication, and more.

/*
* object how to create, access, modify
* In Node.js, objects are collections of key-value pairs.
* You can create an object using object literal notation or the `new Object()` constructor.
* Example of creating an object using object literal notation:
 */

let person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "hiking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

// Example of creating an object using the `new Object()` constructor
let anotherPerson = new Object();
anotherPerson.name = "Jane Smith";
anotherPerson.age = 25;
anotherPerson.isStudent = true;
anotherPerson.hobbies = ["painting", "traveling"];
anotherPerson.address = {
    street: "456 Elm St",
    city: "Othertown",
    country: "Canada"
};

// Accessing object properties
console.log(person.name); // John Doe
console.log(person.age); // 30
console.log(person.hobbies[1]); // coding
console.log(person.address.city); // Anytown

// Modifying object properties
person.age = 31; // Update age
person.hobbies.push("gaming"); // Add a new hobby
console.log(person.age); // 31
console.log(person.hobbies); // [ 'reading', 'coding', 'hiking', 'gaming' ]

// Adding a new property to the object
person.email = "dina@gmail,com"; // Add email property
console.log(person.email); // dina@gmail,com

// Deleting a property from the object
delete person.isStudent; // Remove isStudent property
console.log(person.isStudent); // undefined (property has been deleted)

// Note: In Node.js, you can also use the `Object.keys()`, `Object.values()`, and `Object.entries()` methods to work with objects.
console.log(Object.keys(person)); // [ 'name', 'age', 'hobbies', 'address', 'email' ]
console.log(Object.values(person)); // [ 'John Doe', 31, [ 'reading', 'coding', 'hiking', 'gaming' ], { street: '123 Main St', city: 'Anytown', country: 'USA' }, 'dina@gmail,com' ]
console.log(Object.entries(person)); // [ [ 'name', 'John Doe' ], [ 'age', 31 ], [ 'hobbies', [ 'reading', 'coding', 'hiking', 'gaming' ] ], [ 'address', { street: '123 Main St', city: 'Anytown', country: 'USA' } ], [ 'email', 'dina@gmail,com' ] ]

// Note: In Node.js, you can also use the `Object.assign()` method to merge objects or create shallow copies.
let mergedPerson = Object.assign({}, person, anotherPerson);
console.log(mergedPerson); // Merged object with properties from both person and anotherPerson

// Note: The `Object.assign()` method creates a new object by copying properties from one or more source objects to a target object.
//// If a property exists in multiple source objects, the last one will overwrite the previous ones.
// Example of using `Object.assign()` to create a shallow copy
let shallowCopy = Object.assign({}, person);
shallowCopy.name = "Alice"; // Modify the name in the shallow copy
console.log(shallowCopy.name); // Alice
console.log(person.name); // John Doe (original object remains unchanged)

// Note: In Node.js, you can also use the spread operator (`...`) to create shallow copies or merge objects.
let spreadCopy = { ...person };
spreadCopy.age = 35; // Modify the age in the spread copy
console.log(spreadCopy.age); // 35
console.log(person.age); // 31 (original object remains unchanged)

// Note: The spread operator is a more concise way to create shallow copies or merge objects.
// Example of using the spread operator to merge objects
let mergedWithSpread = { ...person, ...anotherPerson };
console.log(mergedWithSpread); // Merged object with properties from both person and anotherPerson

// Note: In Node.js, you can also use the `Object.freeze()` method to make an object immutable,
// preventing any modifications to its properties.
let frozenPerson = Object.freeze(person);
// frozenPerson.age = 40; // Uncaught TypeError: Cannot assign to read only
// property 'age' (object is frozen, so properties cannot be modified)
console.log(frozenPerson.age); // 31 (original value remains unchanged)

// Note: The `Object.freeze()` method makes an object immutable, meaning its properties cannot be changed,
// added, or deleted. This is useful for creating constants or preventing accidental modifications to objects.

// Example of using `Object.seal()` to prevent adding or deleting properties
let sealedPerson = Object.seal(person);
sealedPerson.age = 40; // Allowed, as we are modifying an existing property
sealedPerson.newProperty = "new value"; // Uncaught TypeError: Cannot add property
// newProperty, object is sealed (cannot add new properties)
console.log(sealedPerson.age); // 40 (property has been modified)
console.log(sealedPerson.newProperty); // undefined (property cannot be added)

// Note: The `Object.seal()` method allows modifications to existing properties but prevents adding or
// deleting properties. This is useful for creating objects that should not have new properties added or removed
// while still allowing modifications to existing properties.

// Example of using `Object.create()` to create a new object with a prototype
let prototypeObject = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
let newPerson = Object.create(prototypeObject);
newPerson.name = "Bob";
newPerson.greet(); // Hello, my name is Bob (inherited method from prototypeObject)

// Note: The `Object.create()` method creates a new object with the specified prototype object and properties.
// This allows for inheritance and prototype chaining in JavaScript.
// Example of using `Object.hasOwnProperty()` to check if an object has a specific property
console.log(person.hasOwnProperty("name")); // true (person has a property named "name"
console.log(person.hasOwnProperty("nonExistentProperty")); // false (person does not have this property)
// Note: The `Object.hasOwnProperty()` method checks if an object has a specific property as its own property,
// not inherited from its prototype chain. This is useful for checking if a property exists in an
// object without considering inherited properties.

// Example of using `Object.prototype.toString.call()` to get the type of an object
console.log(Object.prototype.toString.call(person)); // [object Object]
console.log(Object.prototype.toString.call(arrayVar)); // [object Array]
console.log(Object.prototype.toString.call(stringVar)); // [object String]
// Note: The `Object.prototype.toString.call()` method returns a string representation of the type
// of an object. This is useful for checking the type of an object in a more reliable way than using `typeof`,
// especially for distinguishing between arrays and objects.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
* array how to create, access, modify
* In Node.js, arrays are ordered collections of values that can be of any data type.
* You can create an array using array literal notation or the `new Array()` constructor.
* Example of creating an array using array literal notation:
 */

let fruits = ["apple", "banana", "cherry", "date"];

// Example of creating an array using the `new Array()` constructor
let vegetables = new Array("carrot", "broccoli", "spinach");

// Accessing array elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry
console.log(vegetables[1]); // broccoli

// Modifying array elements
fruits[1] = "blueberry"; // Update second element
console.log(fruits); // [ 'apple', 'blueberry', 'cherry', 'date' ]

fruits.push("elderberry"); // Add a new element to the end of the array
console.log(fruits); // [ 'apple', 'blueberry', 'cherry', 'date', 'elderberry' ]

fruits.pop(); // Remove the last element from the array
console.log(fruits); // [ 'apple', 'blueberry', 'cherry', 'date' ]

fruits.unshift("apricot"); // Add a new element to the beginning of the array
console.log(fruits); // [ 'apricot', 'apple', 'blueberry', 'cherry', 'date' ]

fruits.shift(); // Remove the first element from the array
console.log(fruits); // [ 'apple', 'blueberry', 'cherry', 'date' ]

//.length property
console.log(fruits.length); // 4 (number of elements in the array)

//.slice property
let slicedFruits = fruits.slice(1, 3); // Get a subarray from index 1 to 2 (exclusive)
console.log(slicedFruits); // [ 'blueberry', 'cherry' ] (subarray of fruits)

//.splice property
fruits.splice(1, 2, "kiwi", "mango"); // Remove 2 elements starting from index 1 and add "kiwi" and "mango"
console.log(fruits); // [ 'apple', 'kiwi', 'mango', 'date' ] (array after splice operation)

//[] property
fruits[2] = "orange"; // Update the third element
console.log(fruits); // [ 'apple', 'kiwi', 'orange', 'date' ]

// Note: In Node.js, you can also use the `Array.isArray()` method to check if a variable is an array.
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(vegetables)); // true
console.log(Array.isArray(person)); // false (person is an object, not an array)

// Note: In Node.js, you can also use the `Array.from()` method to create an array from an iterable or array-like object.
let iterable = "Hello";
let arrayFromIterable = Array.from(iterable); // Create an array from a string
console.log(arrayFromIterable); // [ 'H', 'e', 'l', 'l', 'o' ]
// Note: The `Array.from()` method creates a new array from an iterable or array-like object,
// allowing you to convert strings, sets, maps, and other iterable objects into arrays.

// Example of using the `Array.of()` method to create an array from a list of values
let arrayOfValues = Array.of(1, 2, 3, 4, 5); // Create an array from a list of values
console.log(arrayOfValues); // [ 1, 2, 3, 4, 5 ]
// Note: The `Array.of()` method creates a new array from a list of values,
// allowing you to create arrays without needing to use the `new Array()` constructor.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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