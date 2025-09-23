//asynchronous file writing
const fs = require("fs");

//write file asynchronous
//WrittenFile("filePath", "string/data", callBack())
fs.writeFile("ayncTest.txt", "hello node aynchronous", (err) => {
    if (err) throw err;
    console.log("File Written Completed");//2nd execute
});
console.log("File written processing"); //1st execute