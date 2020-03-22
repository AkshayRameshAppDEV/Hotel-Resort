const express = require('express');
const router = express.Router();
const Room = require('../models/rooms');
const Reservation = require('../models/reservations');

const fetch = require('node-fetch');

var ObjectId = require('mongodb').ObjectId; 


// get all rooms
router.get('/', async (req, res) => {

    // check if parameters exist
    if (Object.keys(req.query).length == 0) {

        try {
            const rooms = await Room.find();
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {

        let { checkinDate, checkoutDate, guests } = req.query;

        // get rooms that satisfy guest requirement

        var roomsThatSatisfyGuestRequirements = await Room.find({ numOfGuests: { $gte: guests } });

        // final rooms array that will be returned to roomList.js
        var roomsToReturn = [];

        for (let j = 0; j < roomsThatSatisfyGuestRequirements.length; j++) {

            let room = roomsThatSatisfyGuestRequirements[j];

            let reservations = room.reservations;
            let reservationisOk = true;

            for (let i = 0; i < reservations.length; i++) {

                let reservation = reservations[i];

                // ********************

                // let reservationAvailable = await fetch(`https://localhost:5000/reservations?reservationId=${reservation}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}`);

                // let reservationAvailable = await fetch(`https://localhost:5000/reservations?reservationId=3de&checkinDate=2020-03-21&checkoutDate=2020-03-27`);

                // ********************
                let reservationInfo = await Reservation.find(ObjectId(reservation)); 

                let queryCheckinDate = new Date(checkinDate),
                    queryCheckoutDate = new Date(checkoutDate);

                let dbCheckinDate = new Date(reservationInfo[0].checkInDate),
                    dbCheckoutDate = new Date(reservationInfo[0].checkOutDate);

                // console.log('queryCheckinDate: ' + queryCheckinDate)
                // console.log('queryCheckoutDate: ' + queryCheckoutDate)
                // console.log('dbCheckinDate: ' + dbCheckinDate)
                // console.log('dbCheckinDate: ' + dbCheckoutDate)

                if ((dbCheckinDate >= queryCheckinDate && dbCheckinDate <= queryCheckoutDate) || (dbCheckoutDate >= queryCheckinDate && dbCheckoutDate <= queryCheckoutDate)) {
                    reservationisOk = false;
                    break;
                }
            }

            if (reservationisOk) {
                roomsToReturn.push(room);
            }
        }
        // return rooms to frontend
        res.json(roomsToReturn);
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
