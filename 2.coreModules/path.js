//Path module- suppose we need to find the exact path or file name ina collection files
const path = require('path');

const filePath = "users/karthik/desktop/demo/app.js";

console.log("Base name",path.basename(filePath));
