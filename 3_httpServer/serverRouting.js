const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.writeHead(200, {"content-type":"text/plain"});
        res.end("Hi nodejs server routing");
         // console.log(req.url); //to get the urls through request
    } else if (req.url == '/about') {
        res.writeHead(200, {"content-type":"text/plain"});
        res.end("Hi nodejs server routing bout Page");
    } else {
        res.writeHead(404, {"content-type":"text/plain"});
        res.end("Page Not Found");
    }
   
});

server.listen(5000, () => {
    console.log("Server Routing http://localhost:5000");
})