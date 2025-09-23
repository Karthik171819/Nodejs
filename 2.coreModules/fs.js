//fs is a file system module
const fs = require("fs");

//file write sync. it means file will be wait execute synchronously 
fs.writeFileSync("test.txt", "hello World");
console.log("File written success");