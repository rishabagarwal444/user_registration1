const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create User
router.post('/create', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).send("Error creating user");
    }
});

// Read Users
router.get('/read', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.error("Error reading users:", error);
        res.status(400).send("Error reading users");
    }
});

module.exports = router;
