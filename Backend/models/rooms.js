const mongoose = require('mongoose');
var Schema = mongoose.Schema, 
ObjectId = Schema.ObjectId;

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true
    },
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
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    reservations: {
        type: ObjectId,
        required: true
    }

});

module.exports = mongoose.model('Room', roomSchema);