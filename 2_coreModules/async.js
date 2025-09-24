//async function
//asynchronous file writing
const fs = require("fs");

//write file asynchronous, Non-blocking
//WrittenFile("filePath", "string/data", callBack())
fs.writeFile("asyncTest.txt", "hello node asynchronous", (err) => {
    if (err) throw err;
    console.log("File Written Completed");//2nd execute

    //ReadFile (Asynchronous)
    fs.readFile("asyncTest.txt", {encoding: "utf-8"}, (err, data) => {
        console.log("Read File Complete Async", data);
    });
});
console.log("File written processing"); //1st execute