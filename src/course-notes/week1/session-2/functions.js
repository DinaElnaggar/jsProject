/*
    * Functions in JavaScript
    * This file demonstrates various types of functions in JavaScript.
    * It includes examples of function declarations, expressions, and immediately-invoked function expressions (IIFE).
    * It also highlights the concept of hoisting in JavaScript.
 */

// --- Function Declaration (hoisted) ---
console.log(greet('Alice'));       // "Hello, Alice"
console.log(greet());              // "Hello, Anonymous"

function greet(name = "Anonymous") {
    // default parameter ensures name isn't undefined
    return `Hello, ${name}`;
}
console.log(greet('Alice'));       // "Hello, Alice"
console.log(greet());              // "Hello, Anonymous"

// --- Function Expression (not hoisted) ---

console.log(multiply(5, 2));       // TypeError: multiply is not a function
console.log(multiply(5));          // TypeError: multiply is not a function

const multiply = function(x, y = 1) {
    return x * y;
};
console.log(multiply(5, 2));       // 10
console.log(multiply(5));          // uses default y = 1 → 5


// --- Immediately-Invoked Function Expression (IIFE) ---
(function() {
    console.log('This runs immediately');
})();  // runs once without polluting global scope

// --- Note on hoisting ---
// Declaration is lifted to top of its scope, expression is not.
// Cannot call multiply before its line.

// Hoisting allows function declarations to be called before they are defined in the code.
// Function expressions are not hoisted, so they must be defined before use.
