const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/userdb")
    //create a promise
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Database connection failed", err);
    })