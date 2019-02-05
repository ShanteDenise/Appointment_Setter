const Appointment = require('../models/Appointment')


const appointments = {

index: (req, res) => {
  Appointment.find().then(data => {
    res.json(data)
  })
}
}




module.exports = appointments;