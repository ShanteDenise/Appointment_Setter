const Appointment = require('../models/Appointment')


const appointmentsController = {

index: (req, res) => {
  Appointment.find()
  .populate('user')
  .then(data => {
    res.json(data)
  })
},

create: (req, res) => {
    Appointment.create().then(newAppointment => {
      app.push(newAppointment)
      appointment.save()
      res.send(newAppointment)
    })
  },
  update: (req, res) => {
    Appointment.findByIdAndUpdate(req.params.id, req.body)
    .then((newAppointment) => {
      newAppointment.save()
      res.send(newAppointment)
    })
  
    
  }
}




module.exports = appointmentsController;