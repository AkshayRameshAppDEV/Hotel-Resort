const express = require('express');
const router = express.Router();
const User = require('../models/users');


// get all users
router.get('/', async(req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// get user by id
router.get('/:id', getUser, async(req, res) => {

    res.json(res.user);
})

// create user
router.post('/', async(req, res) => {

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        reservations: req.body.reservations
    });

    try {
        const newUser = await user.save();
        res.json(newUser._id);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

// update user by id
router.patch('/:id', getUser, async(req, res) => {

    if (req.body.firstName) {
        res.user.firstName = req.body.firstName;
    }

    if (req.body.lastName) {
        res.user.lastName = req.body.lastName;
    }

    if (req.body.userName) {
        res.user.userName = req.body.userName;
    }

    if (req.body.email) {
        res.user.email = req.body.email;
    }

    if (req.body.password) {
        res.user.password = req.body.password;
    }

    if (req.body.reservations) {
        res.user.reservations = req.body.reservations;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

// delete user by id
router.delete('/:id', getUser, async(req, res) => {

    try {
        await res.user.remove();
        res.json({message: 'Deleted user'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// middleware function: gets user from database using id, and returns the user object.
async function getUser(req, res, next) {
    let user;

    try {
        user = await User.findById(req.params.id);

        if (!user) {
            return res.status(400).json({message: 'Cannot find user'});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.user = user;
    next();
}

module.exports = router;
