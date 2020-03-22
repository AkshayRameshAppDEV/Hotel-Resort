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

module.exports = router;
