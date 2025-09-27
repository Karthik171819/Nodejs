const express = require('express');
const app = express(); //creating an app

//using middleware

app.use((req, res, next) => {
    console.log("Request url", req.url);
    next();
})

app.get('/', (req, res) => {
    res.status(200).send("Hello ExpressJS app")
})

app.get('/about', (req, res) => {
    res.status(200).send("This is a Expressjs about page");
})

app.post('/', (req, res) => {
    res.status(200).send("This is a POST Request from expressjs");
})

app.use((req, res, next) => {
    res.status(404).send("404 Page Not Found");
})

app.listen(5000, () => {
    console.log("Server running successful 5000");
});