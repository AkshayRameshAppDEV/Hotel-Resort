const express = require('express');
const router = express.Router();
const Room = require('../models/rooms');


// get all rooms
router.get('/', async (req, res) => {

    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// get room by id
router.get('/:id', getRoom, async (req, res) => {

    res.json(res.room);
})

// create room
router.post('/', async (req, res) => {

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
        res.status(400).json({ message: error.message });
    }
})

// update room by id
router.patch('/:id', getRoom, async (req, res) => {

    if (req.body.roomType) {
        res.room.roomType = req.body.roomType;
    }

    if (req.body.bedDetails) {
        res.room.bedDetails = req.body.bedDetails;
    }


    if (req.body.price) {
        res.room.price = req.body.price;
    }

    if (req.body.numOfGuests) {
        res.room.numOfGuests = req.body.numOfGuests;
    }

    if (req.body.checkInDate) {
        res.room.checkInDate = req.body.checkInDate;
    }

    if (req.body.checkOutDate) {
        res.room.checkOutDate = req.body.checkOutDate;
    }

    if (req.body.reservations) {
        res.room.reservations = req.body.reservations;
    }

    try {
        const updatedRoom = await res.room.save();
        res.json(updatedRoom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// delete room by id
router.delete('/:id', getRoom, async (req, res) => {

    try {
        await res.room.remove();
        res.json({ message: 'Deleted room' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// middleware function: gets room from database using id, and returns the room object.
async function getRoom(req, res, next) {
    let room;

    try {
        room = await Room.findById(req.params.id);

        if (!room) {
            return res.status(400).json({ message: 'Cannot find room' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.room = room;
    next();
}

module.exports = router;
