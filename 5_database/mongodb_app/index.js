const express = require('express');
const db = require('./db');
const app = express();
const User = require("./models/User");

app.use(express.json())
//User Routes
//Create User
app.post("/api/users", (req, res) => {
    const data = req.body;
    console.log(data);
})

app.listen(5000, () => {
    console.log("server listenting to http://localhost:3000");
})

