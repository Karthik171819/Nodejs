//creating a models
const mongoose = reuire('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String
})

mongoose.model("User", userSchema)