//fs is a file system module
const fs = require("fs");

//file write sync. it means file will be wait execute synchronously another word Blocking
fs.writeFileSync("test.txt", "hello World nodejs");
console.log("File written success");

//Read file
const data = fs.readFileSync("test.txt", { encoding: "utf-8"});
console.log("Read Synchronously", data); //actually here it gives binary format