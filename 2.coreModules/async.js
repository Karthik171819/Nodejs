//asynchronous file writing
const fs = require("fs");

//write file asynchronous
fs.writeFile("ayncTest.txt", "hello node aynchronous", () => {
    console.log("File Written Completed");//2nd execute
});
console.log("File written processing"); //1st execute