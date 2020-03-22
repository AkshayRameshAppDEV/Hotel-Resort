const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomType: {
        type: String,
        required: true
    },
    bedDetails: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    numOfGuests: {
        type: Number,
        required: true
    },
    reservations: {
        type: Array,
        required: true
    }

});

module.exports = mongoose.model('Room', roomSchema);