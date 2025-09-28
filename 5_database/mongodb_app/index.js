const express = require('express');
const db = require('./db');
const app = express();
const User = require("./models/User");

app.use(express.json())
//User Routes
//Create User routes
app.post("/api/users", async (req, res) => {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved)
    
})

app.listen(3000, () => {
    console.log("server listenting to http://localhost:3000");
})

