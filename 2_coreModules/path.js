//Path module- suppose we need to find the exact path or file name in a collection files
const path = require('path');

const filePath = "users/karthik/desktop/demo/app.js";

//basename() is used to get only filename of directory
console.log("Base name",path.basename(filePath));

//dirname() is used to get only directory name
console.log("Dir name:", path.dirname(filePath));

//extname() is used to get only extension name
console.log("Extension name:", path.extname(filePath));

//to check current directory file path
console.log(__dirname);

//joining path (windows path\\)
console.log("joinedPath", path.join(__dirname, "1.intro", "app.js"));

