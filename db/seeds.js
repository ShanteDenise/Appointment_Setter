require('dotenv').config();

//Datebase setup
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)

//Pull models from Schema
const User = require('../models/User')
const Appointment = require('../models/Appointment')



const Ashley = new User({ 
    first_name: 'Ashley',
     last_name: 'Burton', 
     phone: 6785550901,
   
 });

   
const Daniel = new User({ 
    first_name: 'Daniel', 
    last_name: 'Lucas', 
    phone: 7706792323,
});

const Lucy = new User({ 
    first_name: 'Lucy', 
    last_name: 'Warner', 
    phone: 2295550321,
});

const appointment1 = new Appointment({
    user: Ashley,
    time: '9:00am - 10:00am',
    isAvailable: false
})
const appointment2 = new Appointment({
    user: Daniel,
    time: '11:00am - 12:00am',
    isAvailable: false
})
const appointment3 = new Appointment({
    user: Lucy,
    time: '1:00pm - 2:00pm',
    isAvailable: false
})
const appointment4 = new Appointment({
    time: '10:00am - 11:00am',
    isAvailable: true
})
const appointment5 = new Appointment({
    time: '12:00am - 1:00pm',
    isAvailable: true
})
const appointment6 = new Appointment({
    time: '2:00pm - 3:00pm',
    isAvailable: true
})
const appointment7 = new Appointment({
    time: '3:00pm - 4:00pm',
    isAvailable: true
})
const appointment8 = new Appointment({
    time: '4:00pm - 5:00pm',
    isAvailable: true
})
const appointment9 = new Appointment({
    time: '5:00pm - 6:00pm',
    isAvailable: true
})

User.deleteMany({})
    .then(() => User.deleteMany({}))
    .then(() => Appointment.deleteMany({}))
    .then(() => Appointment.insertMany([appointment1, appointment4, appointment2, appointment5, appointment3, appointment6, appointment7, appointment8, appointment9]))
    .then(() => User.insertMany([Ashley, Daniel, Lucy]))
    .then(() => appointment1.save())
    .then(() => appointment2.save())
    .then(() => appointment3.save())
    .then(() => appointment4.save())
    .then(() => appointment5.save())
    .then(() => appointment6.save())
    .then(() => appointment7.save())
    .then(() => appointment8.save())
    .then(() => appointment9.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())


