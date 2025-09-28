const express = require('express');
const router = express.Router(); //Router is an object not a function
const User = require("../models/User");
//User Routes
//Create User routes
//POST -user routes
router.post("/", async (req, res) => {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved)   
})

//GET All Users- user routes
router.get("/", async (req, res) => {
   const users =await User.find();
   res.status(201).json(users)
})

//GET single users, you should give id
router.get("/:id", async (req, res) => {
   const user =await User.findById(req.params.id);
   res.status(201).json(user)
})

//UPDATE User - PUT /api/user/:id
router.put("/:id", async (req, res) => {
   const user_update =await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
   res.status(201).json(user_update)
})

//DELETE User - /api/user/:id
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204)
})

module.exports = router;