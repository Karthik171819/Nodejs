const http = require("http");

//create s server
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Hello NodeJS Server running Successfully");
});

server.listen(5000, () => {
    console.log("server Listening http://localhost:5000");
});