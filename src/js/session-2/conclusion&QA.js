/*
✅ Session 2 Conclusion

--- Operators & Control Flow ---

# Operators in JavaScript are symbols or keywords that perform operations on operands and return results.
- Arithmetic (e.g. +, -, *, /, %, **, ++, --), assignment (+=, -=, *=, /=, %=, **=), comparison (==, ===, !=, !==, >, <, >=, <=), logical (&&, ||, !), bitwise (&, |, ^, ~, <<, >>, >>>) and ternary (condition ? valueIfTrue : valueIfFalse) operators covered.
- These enable calculations, comparisons, logical decisions, and concise conditional assignments. :citeturn0search2turn0search6

# Control Flow includes:
- Conditional statements (`if`, `else if`, `else`, ternary) for branching logic.
- Loops (`for`, `while`, `do...while`, `for...of`, `for...in`) for repeating execution.
- Always use braces `{}` for clarity and to prevent bugs from ambiguous nesting. :citeturn0search2turn0search6

# Logical operators (`&&`, `||`, `!`) support short‑circuit evaluation and combining conditions.
# Bitwise operators work at the binary level for numerical manipulation.
# Ternary provides inline conditional expressions. :citeturn0search2turn0search6

--- Error Handling ---

JavaScript error handling uses `try...catch...finally`:
- `try`: executes code that may throw an exception.
- `catch`: handles errors; the error object provides `name`, `message`, and optionally `stack`. You can omit the binding if not used. :citeturn0search2turn0search2
- `finally`: always executes before exiting the construct, even after `return` or `throw`. Often used for cleanup. :citeturn0search2turn0search14
- **Important**: returning from `finally` overrides any `return` or error thrown in `try` or `catch`. Avoid control flow statements in `finally`. :citeturn0search14turn0search0

Advanced topics covered:
- **Custom Errors**: extend `Error` to create specific error types, improving clarity and error handling. :citeturn0search3turn0search15
- **Asynchronous Error Handling**:
  - Use `async/await` inside `try...catch` or `.catch()` on Promises. `try...catch` does not catch errors in callbacks like `setTimeout`. :citeturn0search1turn0search7
- In Node.js/Express, define centralized error-handling middleware `(err, req, res, next)` to capture thrown or rejected errors (especially in Express 5 where async handlers automatically forward errors). :citeturn0search1turn0search15
*/

/*
 Test Questions & Answers

---------------------------------------------------------------------------------------------
1. What categories of operators are there in JavaScript?
   # Answer:
   Arithmetic, assignment, comparison, logical, bitwise, and the ternary operator.

---------------------------------------------------------------------------------------------
2. Explain prefix vs postfix increment with an example.
   # Answer:
    `++y` increments y first then returns the new value; `y++` returns the current value, then increments.

---------------------------------------------------------------------------------------------
3. How do compound assignment operators like `+=` or `*=` work?
   # Answer:
    `x += 5` is shorthand for `x = x + 5`; similar for `-=`, `*=`, `/=`, `%=`, `**=`.

---------------------------------------------------------------------------------------------
4. What’s the difference between `==` and `===`?
 `==` compares values with type coercion; `===` compares both value and type (strict equality). 

---------------------------------------------------------------------------------------------
5. What are logical operators and how do they behave?
 `&&` returns true if both operands are true; `||` returns true if at least one operand is true; 
`!` negates a boolean. They also support short-circuit evaluation. 

---------------------------------------------------------------------------------------------
6. How does the ternary operator work? Provide syntax.
 `condition ? exprIfTrue : exprIfFalse`. It returns one of two values based on the condition. 

---------------------------------------------------------------------------------------------
7. How do bitwise operators like `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>` operate?
   # Answer:
    They operate on 32-bit integers. E.g. `5 & 3` yields `1` because `0101 & 0011` = `0001`.

---------------------------------------------------------------------------------------------
8. What is control flow and which constructs belong to it?
   # Answer:
     Control flow determines execution order using conditional statements (`if`, ternary)
     and loops (`for`, `while`, `do…while`, `for...of`, `for...in`).

---------------------------------------------------------------------------------------------
9. What are the differences between `for`, `while`, and `do...while` loops?
   # Answer: 
- `for`: fixed number of iterations, supports init/condition/increment.
- `while`: tests before each iteration.
- `do...while`: executes at least once before checking condition. 

---------------------------------------------------------------------------------------------
10. Explain `for...of` vs `for...in` loops.
   # Answer: 
- `for...of`: iterates over iterable values (arrays, strings, etc.).
- `for...in`: iterates over object property keys. 

---------------------------------------------------------------------------------------------
11. What do `break` and `continue` do inside loops?
   # Answer: 
- `break` exits the current loop entirely.
- `continue` skips the rest of the current iteration and proceeds with next.

---------------------------------------------------------------------------------------------
12. What are `try`, `catch`, and `finally` used for?
   # Answer: 
- `try`: run code that may throw.
- `catch`: handle thrown error.
- `finally`: run cleanup code regardless of outcome. 

---------------------------------------------------------------------------------------------
13. What are typical properties on the error object in `catch(err)`?
   # Answer:
    `err.name`, `err.message`, and often `err.stack`.

---------------------------------------------------------------------------------------------
14. What happens if you `return` inside a `finally` block?
   # Answer:
    The return in `finally` overrides any return or exception from `try` or `catch`. Avoid doing that.

---------------------------------------------------------------------------------------------
15. Why extend the `Error` class when creating custom error types?
   # Answer:
    To distinguish error types (e.g. ValidationError) and include extra context like `statusCode`,
     improving readability and structured error responses.

 ---------------------------------------------------------------------------------------------
16. How do you handle errors in async functions and Express routes?
   # Answer:
    Use `async/await` inside `try...catch`, or `.catch(next)` on Promises. In Express 5+,
    async handler rejections are automatically forwarded to error middleware; in earlier versions, you must call `next(err)`.

*/
