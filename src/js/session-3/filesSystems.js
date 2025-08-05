
/*
   * fileSystems module using es6 syntax
   * This module provides functions to interact with the file system.
   * It includes functions to read, write, and delete files.
   * @module fileSystems
   * @example
   * import { readFile, writeFile, deleteFile } from './fileSystems.js';
   *   * // Example usage:
   * readFile('example.txt').then(data => console.log(data))
   *   * writeFile('example.txt', 'Hello, World!').then(() => console.log('File written successfully'))
   *   * deleteFile('example.txt').then(() => console.log('File deleted successfully'))
   * @returns {void}
   * @throws {Error} If the file operation fails
   * @see {@link https://nodejs.org/api/fs.html|Node.js File System Module}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise|Promise}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import|import statement}

 */

/*
    * fs.writeFileSync("file name", "text it will put in it") is a synchronous method that writes data to a file, replacing the file if it already exists.
    * It blocks the execution of the program until the file is written.
    * @param {string} path - The path to the file where data will be written
    * @param {string|Buffer} data - The data to be written to the file
    * @param {Object} [options] - Optional parameters for writing the file

 */

/*
    * fs.readFileSync("file name", "utf8 (lang)") is a synchronous method that reads the contents of a file.
    * It blocks the execution of the program until the file is read.
    * @param {string} path - The path to the file to be read
    * @param {Object} [options] - Optional parameters for reading the file
    * @returns {string|Buffer} - The contents of the file
 */

/*
   * fs.appendFileSync("file name", "text it will put in it") is a synchronous method that appends data to a file.
   * If the file does not exist, it will be created.
   * It blocks the execution of the program until the data is appended.
   * @param {string} path - The path to the file where data will be appended
   * @param {string|Buffer} data - The data to be appended to the file
   * @param {Object} [options] - Optional parameters for appending the file
   * @returns {void}
 */

/*
    * fs.unlinkSync("file name") is a synchronous method that deletes a file.
    * It blocks the execution of the program until the file is deleted.
    * @param {string} path - The path to the file to be deleted
    * @returns {void}
    * @throws {Error} If the file does not exist or cannot be deleted
 */

/*
    * fs.mkdirSync("file name") is a synchronous method that creates a directory.
    * If the directory already exists, it will throw an error.
    * It blocks the execution of the program until the directory is created.
    * @param {string} path - The path to the directory to be created
    * @param {Object} [options] - Optional parameters for creating the directory
    * @returns {void}
 */

/*
    * fs.existsSync("file name") is a synchronous method that checks if a file or directory exists.
    * It returns true if the file or directory exists, false otherwise.
    * @param {string} path - The path to the file or directory to check
    * @returns {boolean} - true if the file or directory exists, false otherwise
    * @throws {Error} If the path is invalid or cannot be accessed
 */