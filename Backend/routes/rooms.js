const express = require('express');
const router = express.Router();
const Room = require('../models/rooms');


// get all rooms
router.get('/', async(req, res) => {

    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// get room by id
router.get('/:id', getRoom, async(req, res) => {

    res.json(res.room);
})

// create room
router.post('/', async(req, res) => {

    const room = new Room({
        roomType: req.body.roomType,
        bedDetails: req.body.bedDetails,
        price: req.body.price,
        numOfGuests: req.body.numOfGuests,
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate,
        reservations: req.body.reservations


    });

    try {
        const newRoom = await room.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

// middleware function: gets room from database using id, and returns the room object.
async function getRoom(req, res, next) {
    let room;

    try {
       room = await Room.findById(req.params.id);

        if (!room) {
            return res.status(400).json({message: 'Cannot find room'});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.room = room;
    next();
}

module.exports = router;
