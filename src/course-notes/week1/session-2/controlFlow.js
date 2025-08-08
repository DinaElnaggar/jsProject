
/*
    * Control Flow in JavaScript
    * This file demonstrates various control flow statements in JavaScript.
    * It includes examples of conditional statements, loops, and their syntax.
    * It also highlights the importance of using braces for clarity and avoiding common pitfalls.
    * * @file controlFlow.js
    * @description This file contains examples of control flow statements in JavaScript.
    * It covers if/else statements, for loops, while loops, and do...while loops.
    * It also demonstrates the use of braces for clarity and avoiding common pitfalls.
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/
    * @see https://www.w3schools.com/js/js_controlflow.asp
    * @see https://javascript.info/control-flow
    * @see https://www.freecodecamp.org/news/javascript-control-flow/
    * @see https://www.javatpoint.com/javascript-control-flow-statements
 */



// --- Conditional Statements: if / else if / else ---
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`);
    }
}
checkNumber(5); // Positive number (5 is positive)
checkNumber(-3); // Negative number (-3 is negative)
checkNumber(0); // Zero   (0 is zero)

// One-statement form (no braces allowed)
if (true)
    console.log('One-statement if works');

// But always prefer braces to avoid ambiguity (dangling else) :contentReference[oaicite:2]{index=2}


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --- For Loop ---
const items = ['apple', 'banana', 'cherry'];
for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i}: ${items[i]}`);
}

// All three parts (init; condition; increment) are optional.
// Example: infinite loop with break inside :contentReference[oaicite:3]{index=3}
for (let i = 0;; i++) {
    if (i >= 3) break;
    console.log('Loop count:', i);
}


// Example: traditional while-loop (like for) :contentReference[oaicite:5]{index=5}
let count = 0;
while (count < 3) {
    console.log('Count is', count);
    count++;
}

// Example: do...while ensures at least one run :contentReference[oaicite:6]{index=6}
let n = 0;
do {
    console.log('n is', n);
    n++;
} while (n < 2);

// Example: for...of loop for iterating over iterable objects
const iterable = ['a', 'b', 'c'];
for (const item of iterable) {
    console.log('Item:', item);
}

// Example: for...in loop for iterating over object properties
const obj = { x: 1, y: 2, z: 3 };
for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// Example: forEach method for arrays
items.forEach((item, index) => {
    console.log(`Item ${index}: ${item}`);
});
// Note: forEach does not support break/continue, use for...of or traditional for
// Example: forEach with arrow function
items.forEach(item => console.log('Item:', item));

/*

* Explanation & References
    - if / else if / else: Use block {} syntax to avoid ambiguity in nested conditions; condition tested left to right,
     first true branch executes

    - for loop includes three parts: initialization, test condition, increment/decrement. All optional.
     Useful for fixed-iteration loops and arrays

    - while loop: repeats while condition is true; checks before body executes (pre-test)

    - do...while: executes the body at least once, then tests condition (post-test loop)
 */