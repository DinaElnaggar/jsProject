/*
========================
📘 Session Conclusion
========================

✅ This session covered essential JavaScript concepts that are frequently used in both frontend and backend development. Each concept was demonstrated with practical examples and well-structured syntax. Here's a breakdown:

1. **Destructuring**
   - Extracting properties from objects (shallow or nested).
   - Enhances readability and cleaner variable assignment.

2. **Callback Functions**
   - Functions passed as arguments to other functions.
   - Enables asynchronous and functional programming patterns.

3. **Higher-Order Functions**
   - Functions that accept or return other functions.
   - Useful in middleware, function wrapping, and control flows.

4. **Async/Await & Promises**
   - Simplifies handling asynchronous operations.
   - Avoids callback hell and improves error handling.

5. **Arrow Functions**
   - Concise syntax for function expressions.
   - Lexically binds `this`.

6. **'this' & Strict Mode**
   - Shows how `this` behaves differently in strict vs non-strict mode.
   - Important for understanding context.

7. **Closures**
   - Functions that capture variables from their outer scope.
   - Enables data privacy and stateful functions.

8. **Modules in JS**
   - Understanding local, global, third-party, and built-in modules.
   - Knowing how to use `require`, `import`, and file system operations.

9. **File System Module (Node.js)**
   - Demonstrates synchronous file operations like `writeFileSync`, `readFileSync`, etc.
   - Crucial for backend development in Node.js.


========================
❓ Interview Q&A Section
========================

🔸 **Q1: What is destructuring in JavaScript?**
**A:** Destructuring is a syntax that lets you unpack values from arrays or properties from objects into distinct variables.

🔸 **Q2: What is the difference between a callback and a higher-order function?**
**A:** A callback is a function passed as an argument to another function.
       A higher-order function is any function that takes another function as an argument or returns a function.

🔸 **Q3: What are the benefits of using async/await over traditional Promises?**
**A:** Async/await provides a cleaner, more readable way to handle asynchronous code compared to `.then()` chaining.

🔸 **Q4: How does 'this' behave differently in strict mode?**
**A:** In non-strict mode, 'this' in a standalone function refers to the global object, while in strict mode it becomes `undefined`.

🔸 **Q5: What is a closure in JavaScript?**
**A:** A closure is a function that remembers variables from its lexical scope even when the function is executed outside that scope.

🔸 **Q6: What types of modules exist in JavaScript and Node.js?**
**A:**
- Local Modules
- Global Modules
- Third-party Modules (e.g., from npm)
- Built-in Modules (like `fs`, `http`, etc.)

🔸 **Q7: How do you use the Node.js `fs` module synchronously?**
**A:** You can use `fs.writeFileSync`, `fs.readFileSync`, `fs.appendFileSync`, etc., to perform blocking file operations.

🔸 **Q8: What's the benefit of arrow functions?**
**A:** They provide a shorter syntax and inherit `this` from the enclosing context.

🔸 **Q9: How does the `fs.existsSync()` function work?**
**A:** It checks if a file or directory exists synchronously and returns `true` or `false`.

🔸 **Q10: How does `fs.unlinkSync()` differ from `fs.appendFileSync()`?**
**A:** `fs.unlinkSync()` deletes a file, while `fs.appendFileSync()` adds data to the end of a file.

*/