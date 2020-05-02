const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Reservation = require('../models/reservations');
const Room = require('../models/rooms');

/*
    GET /reservations/{id}

    return reservations that fall between checkin date and checkout date

    
*/

// get reservation by id
router.get('/:id', getReservation, async(req, res) => {

    res.json(res.reservation);
})

router.get('/', async (req, res) => {

    // res.json({message: "Reservations api"});

    let { reservationId, checkinDate, checkoutDate } = req.query;

    // let reservationInfo = await Reservation.findById(reservationId);
    let reservationInfo = await Reservation.find({ userID: reservationId });

    let queryCheckinDate = new Date(checkinDate),
        queryCheckoutDate = new Date(checkoutDate);

    let dbCheckinDate = new Date(reservationInfo.checkinDate),
        dbCheckoutDate = new Date(reservationInfo.checkoutDate);

    if ((queryCheckinDate >= dbCheckinDate && queryCheckinDate <= dbCheckoutDate) || (queryCheckoutDate >= dbCheckinDate && queryCheckoutDate <= dbCheckoutDate)) {
        res.json({ available: false });
    } else {
        res.json({ available: true });
    }
})

// POST REQUEST
// create reservation
router.post('/', async (req, res) => {

    const reservation = new Reservation({
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate,
        userID: req.body.userID,
        roomID: req.body.roomID
    });

    try {
        const newReservation = await reservation.save();
        res.json(newReservation._id);

        await User.update({ "_id": newReservation.userID }, { $push: { "reservations": newReservation._id } });
        await Room.update({ "_id": newReservation.roomID }, { $push: { "reservations": newReservation._id } });



    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})



// delete reservation by id
router.delete('/:id', getReservation, async (req, res) => {

    try {
        console.log("user ID:" + res.reservation.userID)
        await User.update(
            { '_id': res.reservation.userID },
            { $pull: { "reservations": res.reservation._id } }
        );
        await Room.update(
            { '_id': res.reservation.roomID },
            { $pull: { "reservations": res.reservation._id } }
        );
        console.log("Room ID:" + res.reservation.roomID)
        console.log(await Room.find())
        await res.reservation.remove();
        res.json({ message: 'Deleted reservation' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// middleware function: gets room from database using id, and returns the reservation object.
async function getReservation(req, res, next) {
    let reservation;

    try {
        reservation = await Reservation.findById(req.params.id);

        if (!reservation) {
            return res.status(400).json({ message: 'Cannot find reservation' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.reservation = reservation;
    next();
}

module.exports = router;
