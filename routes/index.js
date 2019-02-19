const express = require('express')
const router = express.Router()
const usersController = require('../controllers/Users')
const appointmentsController = require('../controllers/Appointments')

router.get('/api/users', usersController.index)
router.post('/api/users', usersController.create)

router.get('/api/appointments', appointmentsController.index)
router.post('/api/appointments', appointmentsController.create)
router.patch('/api/appointments/:id', appointmentsController.update)
router.get('/api/users/:id/edit', usersController.edit)


module.exports = router
