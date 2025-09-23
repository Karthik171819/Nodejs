//Path module- suppose we need to find the exact path or file name ina collection files
const path = require('path');

const filePath = "users/karthik/desktop/demo/app.js";

//basename() is used to get only filename of directory
console.log("Base name",path.basename(filePath));

//dirname() is used to get only directory name
console.log("Dir name:", path.dirname(filePath));
