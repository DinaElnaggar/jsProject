 /*
    * destruct function
    *  it takes an object and destructures it to extract specific properties
    * @param {Object} obj - The object to destructure
    * @return {Object} - An object containing the destructured properties
    * Example:

  */
function destruct(obj) {
    const { name, age, city } = obj;
    return { name, age, city };

}
// Example usage
 const person = { name: 'John', age: 30, city: 'New York', country: 'USA' };
    const result = destruct(person);
    console.log(result); // { name: 'John', age: 30, city: 'New York' }
/*
    * it used for object or nested object destructuring
 */


function destructNested(obj) {
    const { name, age, address: { city, country } } = obj;
    return { name, age, city, country };
}
// Example usage
const personNested = {
    name: 'Jane',
    age: 25,
    address: {
        city: 'Los Angeles',
        country: 'USA'
    }
}
const nestedResult = destructNested(personNested);
console.log(nestedResult); // { name: 'Jane', age: 25, city: 'Los Angeles', country: 'USA' }

 // ---------------------------------------------------------------------------------------------

/*
    * callback function
    *  it takes a function as an argument and calls it with a message
    * @param {Function} callback - The function to call
    * @return {void}
    * Example:
 */

function callbackFunction(callback) {
    const message = "Hello, this is a callback!";
    callback(message);
}
// Example usage
function myCallback(msg) {
    console.log(msg);
}
callbackFunction(myCallback); // Output: Hello, this is a callback!
/*
    * it used for callback function
 */
function callbackFunctionWithArgs(callback, arg1, arg2) {
    const result = callback(arg1, arg2);
    console.log(result);
}

// Example usage
function add(a, b) {
    return a + b;
}

callbackFunctionWithArgs(add, 5, 10); // Output: 15

 // ---------------------------------------------------------------------------------------------

 /*
     * higher order function
     *  it takes a function as an argument and returns a new function
     * @param {Function} func - The function to wrap
     * @return {Function} - A new function that calls the original function
     * Example:
  */

function higherOrderFunction(func) {
    return function(...args) {
        console.log("Calling the original function with arguments:", args);
        return func(...args);
    };
}
// Example usage
function originalFunction(x, y) {
    return x + y;
}

const wrappedFunction = higherOrderFunction(originalFunction);
console.log(wrappedFunction(5, 10)); // Output: Calling the original function with arguments: [ 5, 10 ]
// Output: 15

/*
    * it used for higher order function
    *  it takes a function as an argument and returns a new function that logs the arguments
    * @param {Function} func - The function to wrap
    * @return {Function} - A new function that logs the arguments and calls the original function
    * Example:
 */

function higherOrderFunctionWithLogging(func) {
    return function(...args) {
        console.log("Arguments passed:", args);
        return func(...args);
    };
}

// Example usage
function multiply(a, b) {
    return a * b;
}
const loggedMultiply = higherOrderFunctionWithLogging(multiply);
console.log(loggedMultiply(3, 4)); // Output: Arguments passed: [3, 4]
// Output: 12

 // ---------------------------------------------------------------------------------------------

 /*
     * async function
     *  it takes a promise and returns a resolved value
     * @param {Promise} promise - The promise to resolve
     * @return {Promise} - A promise that resolves to the value of the original promise
     * Example:
  */

async function asyncFunction(promise) {
    try {
        const result = await promise;
        return result;
    } catch (error) {
        console.error("Error:", error);
        throw error; // Re-throw the error for further handling if needed
    }
}
// Example usage
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully!");
    }, 1000);
});
asyncFunction(myPromise)
    .then(result => console.log(result)) // Output: Promise resolved successfully!
    .catch(error => console.error("Caught error:", error));

 // ---------------------------------------------------------------------------------------------

 /*
    * promise function
    * it takes a value and returns a resolved promise with that value
    * @param {any} value - The value to resolve the promise with
    * @return {Promise} - A promise that resolves to the given value
    * Example:
    */
 function promiseFunction(value) {
     return new Promise((resolve) => {
         resolve(value);
     });
 }
 // Example usage
 promiseFunction("Hello, Promise!")
     .then(result => console.log(result)) // Output: Hello, Promise!
     .catch(error => console.error("Caught error:", error));

/*
   * arrow function
   * it takes two numbers and returns their sum
   * @param {number} a - The first number
   * @param {number} b - The second number
   * @return {number} - The sum of the two numbers
   * Example:
   */
const arrowFunction = (a, b) => a + b;
// Example usage
const sum = arrowFunction(5, 10);
console.log(sum); // Output: 15
/*
   * it used for arrow function
   * it takes an array of numbers and returns their product
   * @param {Array<number>} numbers - The array of numbers
   * @return {number} - The product of the numbers
   * Example:
   */
const arrowFunctionProduct = (numbers) => numbers.reduce((acc, num) => acc * num, 1);
// Example usage
const numbersArray = [2, 3, 4];
const product = arrowFunctionProduct(numbersArray);
console.log(product); // Output: 24

// ---------------------------------------------------------------------------------------------

/*
   * this / use strict
   * it demonstrates the use of 'this' in a function
   * @return {void}
   * Example:
 */

function thisExample() {
    console.log(this); // In non-strict mode, 'this' refers to the global object (window in browsers)
}
// Example usage
thisExample(); // Output: Window object (or global object in Node.js)
/*
   * it used for 'this' in strict mode
   * it demonstrates the use of 'this' in strict mode
   * @return {void}
   * Example:
 */
"use strict";
function thisStrictExample() {
    console.log(this); // In strict mode, 'this' is undefined in a regular function
}
// Example usage
thisStrictExample(); // Output: undefined

 /*
 so (this) is a keyword in JavaScript that refers to the context in which a function is called.
    It allows you to access properties and methods of the object that is currently executing the code. In non-strict mode, if a function is called without an object context, 'this' refers to the global object (window in browsers).
     In strict mode, 'this' is undefined in such cases.
    * The use of 'use strict' enables strict mode, which changes the behavior of JavaScript in several ways, including how 'this' is handled.

  */

// ---------------------------------------------------------------------------------------------
/*
   * closure function
   * it demonstrates the concept of closures in JavaScript
   * @return {Function} - A function that returns a message
   * Example:
 */
function closureExample() {
    const message = "This is a closure!";

    return function() {
        console.log(message); // Accesses the outer function's variable
    };
}
// Example usage
const closureFunc = closureExample();
closureFunc(); // Output: This is a closure!
