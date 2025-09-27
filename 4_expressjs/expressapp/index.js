const express = require('express');
const app = express(); //creating an app

app.get('/', (req, res) => {
    res.status(200).send("Hello ExpressJS app")
})

app.get('/about', (req, res) => {
    res.status(200).send("This is a Expressjs about page");
})

app.listen(5000, () => {
    console.log("Server running successful 5000");
});