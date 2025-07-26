/*
    * Error Handling in JavaScript
    * This file demonstrates various error handling techniques in JavaScript.
    * It includes examples of try..catch blocks, error objects, and custom error handling.
 */


// Basic try..catch Syntax
try {
    // Intentionally causing an error by calling an undefined function
    // code that may throw
    let result = someUndefinedFunction();
} catch (err) {
    // Catching the error
    console.error('Error caught:', err.message);
} finally {
    // This block executes regardless of an error
    console.log('Finally block executed.');
    // optional cleanup
    console.log('Execution ended.');
}

// Example: JSON parsing with error handling
// This example demonstrates how to handle errors when parsing JSON data
// The JSON string is intentionally malformed to trigger an error
const jsonString = '{ "name": "John" ';
try {
    const obj = JSON.parse(jsonString);
} catch (err) {
    console.error('Failed to parse JSON:', err.message);
}

// Example: Custom Error Handling
// This example shows how to create and throw a custom error
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent constructor with the error message
        this.name = 'CustomError'; // Set the error name
    }
}

function riskyOperation() {
    // Simulating a risky operation that may fail
    throw new CustomError('Something went wrong in riskyOperation!');
}

try {
    riskyOperation();
} catch (err) {
    if (err instanceof CustomError) {
        // Handle custom error
        console.error('Custom Error caught:', err.message);
    }
    else {
        // Handle general errors
        // This block catches any error that is not a CustomError
        console.error('General Error caught:', err.message);
    }
} finally {
    // This block executes regardless of an error
    // It can be used for cleanup or final logging
    console.log('Risky operation completed with error handling.');
}

// Example: Asynchronous Error Handling
// This example demonstrates how to handle errors in asynchronous code using async/await
async function asyncOperation() {
    // Simulating an asynchronous operation that may fail
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Asynchronous operation failed!'));
        }, 1000);
    });
}

async function handleAsyncOperation() {
    try {
        await asyncOperation();
    } catch (err) {
        console.error('Error in async operation:', err.message);
    } finally {
        console.log('Async operation completed with error handling.');
    }
}

handleAsyncOperation();

// Example: Error Handling in Event Listeners
// This example shows how to handle errors in event listeners
document.getElementById('myButton').addEventListener('click', function() {
    try {
        // Intentionally causing an error by accessing an undefined variable
        console.log(undefinedVariable);
    } catch (err) {
        console.error('Error in event listener:', err.message);
    }
});
// Note: Ensure there is an element with id 'myButton' in your HTML for the event listener example to work
