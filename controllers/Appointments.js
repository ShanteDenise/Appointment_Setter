const Appointment = require('../models/Appointment')


const appointments = {

index: (req, res) => {
  Appointment.find().then(data => {
    res.json(data)
  })
},

create: (req, res) => {
    Appointment.create().then(newAppointment => {
      app.push(newAppointment)
      appointment.save()
      res.send(newAppointment)
    })
  }
}




module.exports = appointments;