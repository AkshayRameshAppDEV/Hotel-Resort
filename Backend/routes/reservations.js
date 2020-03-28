const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Reservation = require('../models/reservations');

/*
    GET /reservations/{id}

    return reservations that fall between checkin date and checkout date
*/

router.get('/', async (req, res) => {

    // res.json({message: "Reservations api"});

    let { reservationId, checkinDate, checkoutDate } = req.query;

    // let reservationInfo = await Reservation.findById(reservationId);
    let reservationInfo = await Reservation.find({userID: reservationId});

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
router.post('/', async(req, res) => {

    const reservation = new Reservation({
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate,
        userID: req.body.userID,
    });

    try {
        const newReservation = await reservation.save();
        res.json(newReservation._id);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;
