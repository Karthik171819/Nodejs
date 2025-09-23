const fs = require("fs");

//file write sync
fs.writeFileSync("test.txt", "hello World");
console.log("File written success");