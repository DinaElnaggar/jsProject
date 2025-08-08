/*
JavaScript Operators Overview
 * This file demonstrates various types of operators in JavaScript.
 * It includes examples of arithmetic, assignment, comparison, logical, bitwise, and ternary operators.
 * Each operator is explained with examples to illustrate its usage and behavior.
 * @file operators.js
 * @description This file contains examples of different types of operators in JavaScript.
 * It covers arithmetic, assignment, comparison, logical, bitwise, and ternary operators.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Operators
 */

// --- Arithmetic Operators ---
// +, -, *, /, %, ++, --
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // ~3.333...
console.log(a % b); // 1 (remainder of division)


// Prefix vs Postfix increment
let y = 5;
console.log(++y); // prefix: increments before use → 6
y = 5;
console.log(y++); // postfix: use then increment → prints 5, then y becomes 6

// --- Assignment Operators ---
let x = 10;
x += 5;  // equivalent to x = x + 5; now x is
console.log(x); // 15
x -= 3;  // equivalent to x = x - 3; now x is
console.log(x); // 12
x *= 2;  // equivalent to x = x * 2; now x is
console.log(x); // 24
x /= 4;  // equivalent to x = x / 4; now x is
console.log(x); // 6
x %= 2;  // equivalent to x = x % 2; now x is
console.log(x); // 0 (remainder of division)
x **= 3; // equivalent to x = x ** 3; now x is
console.log(x); // 0 (0 raised to any power is still 0)

// --- Comparison Operators ---
console.log(5 == '5');   // true (value only)
console.log(5 === '5');  // false (value + type)
console.log(5 != '5');   // false
console.log(5 !== '5');  // true
console.log(6 > 2);      // true
console.log(3 <= 3);     // true

// --- Logical Operators ---
console.log(true && false); // false (both must be true)
console.log(true || false); // true (at least one true)
console.log(!true);         // false (negation operator)


// --- Bitwise Operators ---
let m = 5;  // binary: 0101
let n = 3;  // binary: 0011
console.log(m & n); // 1 (binary AND: 0101 & 001 = 0001)
console.log(m | n); // 7 (binary OR: 0101 | 0011 = 0111)
console.log(m ^ n); // 6 (binary XOR: 0101 ^ 001 = 0110)
console.log(~m);    // -6 (bitwise NOT: flips bits, 0101 becomes 1010, which is -6 in two's complement)
console.log(m << 1); // 10 (left shift: 0101 becomes 1010, which is 10)
console.log(m >> 1); // 2 (right shift: 0101 becomes 0010, which is 2)
console.log(m >>> 1); // 2 (unsigned right shift: same as >> for positive numbers)

// --- Ternary Operator ---
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // 'Yes' (if age is 18 or more, canVote is 'Yes', otherwise 'No')


