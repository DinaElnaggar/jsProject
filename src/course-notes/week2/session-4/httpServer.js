
/*
    * How to create server using http:
    * 1. Import the http module.
    * 2. Create a server using http.createServer().
    * 3. Use the server.listen() method to start the server.
    * 4. Use the request and response objects to handle incoming requests and send responses.
    * 5. Use the server.close() method to stop the server.
    * 6. Use the server.on() method to listen for events like 'request',
    *    'close', 'error', etc.
    * 7. Use the server.address() method to get the address of the server.
    * 8. Use the server.getConnections() method to get the number of connections.
    * 9. Use the server.setTimeout() method to set the timeout for the server.
    * 10. Use the server.keepAliveTimeout property to set the keep-alive timeout
    *     for the server.
    * 11. Use the server.maxHeadersCount property to set the maximum number of headers
    *     that can be received by the server.
    * 12. Use the server.headersTimeout property to set the timeout for headers.
    * 13. Use the server.timeout property to set the timeout for the server.
    * 14. Use the server.listen() method to start the server on a specific port
    *     and hostname.
 */

const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response body "Hello World"
    res.end('Hello World\n');

    let { url, method } = req;
    console.log(`Received request: ${method} ${url}`);

    if(method === 'GET' && url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.statusCode = 200;
        res.end('Welcome to the home page!\n');
    } else if(method === 'GET' && url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the about page.\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found.\n');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});

// Handle server close event
server.on('close', () => {
    console.log('Server closed');
});

// Handle server error event
server.on('error', (err) => {
    console.error(`Server error: ${err}`);
});

// Handle server request event
server.on('request', (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
});

// Get server address
console.log(`Server address: ${server.address().address}:${server.address().port}`);

// Set server timeout
server.setTimeout(5000, () => {
    console.log('Server timed out');
});

// Set keep-alive timeout
server.keepAliveTimeout = 1000;

// Set maximum headers count
server.maxHeadersCount = 100;

// Set headers timeout
server.headersTimeout = 2000;

// Set server timeout
server.timeout = 3000;

// Get the number of connections
server.getConnections((err, count) => {
    if (err) {
        console.error(`Error getting connections: ${err}`);
    } else {
        console.log(`Number of connections: ${count}`);
    }
});

// Close the server after 10 seconds
setTimeout(() => {
    server.close();
}, 10000);

///////////////////////////////////////////////////////

/*
    * This code creates a simple HTTP server using Node.js's http module.
    * The server listens on port 3000 and responds to GET requests for the home
    * page and the about page. It also handles errors, logs requests, and manages
    * server events like close and timeout.
    * The server can be extended to handle more routes and functionalities as needed.
    * It is a basic example of how to create and manage an HTTP server in Node.js.
    * You can run this code in a Node.js environment to see how it works.
    * Make sure to have Node.js installed on your machine.
    * To run the server, save this code in a file named httpServer.js and execute it using the command:
    * node httpServer.js
    * Then, you can access the server at http://localhost:3000/ in your web browser.
    * You can also test the different routes by navigating to http://localhost:3000/about.
    * Feel free to modify the code to add more routes or functionalities as needed.
*/

/*
    * CRUD using HTTP request:
    * 1. Create (POST): Use the POST method to create a new resource.
    * 2. Read (GET): Use the GET method to retrieve a resource.
    * 3. Update (PUT/PATCH): Use the PUT or PATCH method to update an existing resource.
    * 4. Delete (DELETE): Use the DELETE method to remove a resource.
    * Each method corresponds to a specific action on the resource.
    * 5. Use appropriate status codes to indicate the result of the operation.
    * 6. Use request and response bodies to send and receive data.
    * 7. Use headers to provide additional information about the request or response.
    * 8. Use query parameters to filter or sort resources.
    * 9. Use URL parameters to specify the resource being acted upon.
    * 10. Use authentication and authorization to secure the API endpoints.
    * 11. Use CORS headers to allow cross-origin requests if needed.
    * 12. Use JSON or XML as the data format for request and response bodies.
    * 13. Use versioning in the API to manage changes over time.
    * 14. Use error handling to provide meaningful error messages and status codes.
    * 15. Use logging to track requests and responses for debugging and monitoring.
*/

module.exports = server; // Export the server for testing or further use
// You can import this server in another file to use or test it.

// Example of importing and using the server in another file
// const server = require('./httpServer');
// server.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000/');
// });

// Note: Make sure to handle the server lifecycle properly in your application.
// For example, you may want to gracefully shut down the server on process termination.
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM, shutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

// This ensures that the server is properly closed when the application is terminated.
// You can also add more event listeners or middleware as needed for your application.

// This code provides a basic structure for an HTTP server in Node.js.
// You can extend it further by adding more routes, middleware, or functionalities as needed.
// It serves as a good starting point for building web applications or APIs using Node.js.
// Happy coding!
// Remember to test your server thoroughly and handle edge cases as needed.
// You can also use tools like Postman or curl to test your API endpoints.
// Enjoy building your Node.js applications!  

const server = http.createServer((req, res) => {
    // add new user:
    if (req.method === 'POST' && req.url === '/users') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });
        req.on('end', () => {
            const user = JSON.parse(body);
            // users.push(user); // Assuming users is an array defined elsewhere
            console.log('New user added:', user);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User created successfully', user }));
        });
    } //update user:
    else if (req.method === 'PUT' && req.url.startsWith('/users/')) {
        const userId = req.url.split('/')[2]; // Extract user ID from URL
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });
        req.on('end', () => {
            const updatedUser = JSON.parse(body);
            // Update user logic here, e.g., find user by ID and update it
            console.log(`User ${userId} updated:`, updatedUser);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User updated successfully', user: updatedUser }));
        });
    } //delete user:
    else if (req.method === 'DELETE' && req.url.startsWith('/users/')) {
        const userId = req.url.split('/')[2]; // Extract user ID from URL
        // Delete user logic here, e.g., find user by ID and remove it
        console.log(`User ${userId} deleted`);
        res.writeHead(204); // No Content
        res.end();
    } //get user:
    else if (req.method === 'GET' && req.url.startsWith('/users/')) {
        const userId = req.url.split('/')[2]; // Extract user ID from URL
        // Get user logic here, e.g., find user by ID and return it
        const user = { id: userId, name: 'John Doe' }; // Example user object
        console.log(`User ${userId} retrieved:`, user);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
    }
    // Handle other routes or methods as needed
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});

// Export the server for testing or further use
module.exports = server;