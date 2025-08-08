/*
    * types of modules:
    * local modules
    * global modules
    * third-party modules
    * built-in modules
    * @return {void}
    * Example:
    * Local modules are modules that are created within your own project. They can be imported and
    * used in your code. For example, you might have a module that contains utility functions
    * specific to your application.
    * Global modules are modules that are available globally in your environment. They can be
    * imported and used in any part of your code without needing to specify a path. For example,
    * the `fs` module in Node.js is a global module that provides file system operations.
    * Third-party modules are modules that are created by other developers and can be
    * installed from package managers like npm. These modules can be used to add
    * functionality to your application without having to write the code yourself.
    * For example, you might use a third-party module like `express` to create a web server.
    * Built-in modules are modules that are included with the programming language or
    * runtime environment. They provide core functionality and can be used without
    * needing to install any additional packages. For example, in Node.js, the `http` module is a built-in module that allows you to create HTTP servers and clients.
    * Example usage:
 */

// * Local module example:
// const myLocalModule = require('./myLocalModule');
// myLocalModule.someFunction();
//
// // Global module example:
// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File content:', data);
//     }
// }

// Third-party module example:
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// }
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// }

// Built-in module example:
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!\n');
// });
// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// }