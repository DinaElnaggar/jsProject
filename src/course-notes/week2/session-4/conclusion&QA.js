/*
===========================
✅ Conclusion: HTTP Server in Node.js
===========================

In this session, we learned how to create and manage an HTTP server using Node.js's built-in `http` module.

🛠 Server Setup:
- Used `http.createServer()` to handle requests/responses.
- Started server on port 3000 with `server.listen()`.
- Implemented routing for `/`, `/about`, `/users/:id`.
- Supported multiple HTTP methods: GET, POST, PUT, DELETE.

🔁 Server Lifecycle:
- Listened to events: `close`, `error`, `request`.
- Used methods:
  - `server.address()` for server metadata
  - `server.getConnections()` for active connections
- Configured behavior:
  - `server.setTimeout()`
  - `server.keepAliveTimeout`
  - `server.maxHeadersCount`
  - `server.headersTimeout`
  - `server.timeout`

💾 CRUD Operations:
- POST `/users` — create user
- GET `/users/:id` — retrieve user
- PUT `/users/:id` — update user
- DELETE `/users/:id` — delete user

🧹 Graceful Shutdown:
- Used `process.on('SIGINT')` and `process.on('SIGTERM')` to close the server safely.

🔄 Nodemon:
- Installed via `npm install nodemon`
- Configured in package.json or run with `nodemon index.js`

🧪 Testing:
- Tested endpoints via browser, Postman, or curl:
  - `http://localhost:3000/`
  - `http://localhost:3000/about`
  - `http://localhost:3000/users/:id`

===========================
❓ Q&A Section
===========================

Q1: What module is used to create an HTTP server in Node.js?  
🅰️ The built-in `http` module.

Q2: How do you route without Express?  
🅰️ Use `req.method` and `req.url` conditions.

Q3: How to shut down the server gracefully?  
🅰️ Listen to `SIGINT` or `SIGTERM`, then use `server.close()`.

Q4: How to reload server automatically during development?  
🅰️ Use `nodemon`.

Q5: Difference between `setTimeout()` and `keepAliveTimeout`?  
🅰️ `setTimeout()` = inactivity timeout; `keepAliveTimeout` = persistent connection timeout.

Q6: How to read request body in POST?  
🅰️ Use `req.on('data')` and `req.on('end')`, then parse with `JSON.parse()`.

Q7: How to respond with JSON?  
🅰️ Use `res.writeHead(200, { 'Content-Type': 'application/json' })` and `res.end(JSON.stringify(...))`.

Q8: What is `getConnections()` for?  
🅰️ To get the current number of active connections.

Q9: How to control incoming headers?  
🅰️ Use `maxHeadersCount` and `headersTimeout`.

Q10: Can the server be imported in another file?  
🅰️ Yes, using `module.exports = server;` and `require('./httpServer')`.

// End of session summary

*/