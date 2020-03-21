const mongoose = require('mongoose');
var Schema = mongoose.Schema, 
ObjectId = Schema.ObjectId;

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
        type: ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Reservation', reservationSchema);