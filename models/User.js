const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema ({
    first_name: String,
    last_name:String,
    phone: {
        type: Number,
        min: 10,
    },

})

module.exports = mongoose.model('User', User)