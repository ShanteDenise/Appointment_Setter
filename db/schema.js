const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    }
})

const AppointmentSchema = new Schema({
    time: {
        type: Date,
        required: true
    },
    User: [UserSchema]
    
});

const UserSchema = mongoose.model('User', UserSchema)
const AppointmentSchema = mongoose.model('Appointment', AppointmentSchema)

module.exports = {
    UserModel: UserModel,
    AppointmentModel: AppointmentModel
}