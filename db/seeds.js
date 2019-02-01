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
    time: '10:00am'
})


const appointment2 = new Appointment({
    user: Daniel,
    time: '12:00am'
})

const appointment3 = new Appointment({
    user: Lucy,
    time: '11:00am'
})

User.deleteMany({})
    .then(() => User.deleteMany({}))
    .then(() => Appointment.deleteMany({}))
    .then(() => Appointment.insertMany([appointment1, appointment2, appointment3]))
    .then(() => User.insertMany([Ashley, Daniel, Lucy]))
    .then(() => appointment1.save())
    .then(() => appointment2.save())
    .then(() => appointment3.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())


