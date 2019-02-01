const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Appointment = new Schema({
    time: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    
});

module.exports = mongoose.model('Appointment', Appointment)
