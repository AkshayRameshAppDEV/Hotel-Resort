const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    roomID: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Reservation', reservationSchema);