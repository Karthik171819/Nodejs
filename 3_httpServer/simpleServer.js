const http = require("http");

//create s server
const server = http.createServer((req, res) => {
    //text data
    // res.writeHead(200, {"content-type": "text/plain"});
    // res.end("Hello NodeJS Server running Successfully");

    //JSON Data
    res.writeHead(200, {"content-type":"application/json"});
    res.end(`{"name":"Karthik", "age":20}`);
});

server.listen(5000, () => {
    console.log("server Listening http://localhost:5000");
});