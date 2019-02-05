const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const appointmentsController = require('../controllers/appointments')

router.get('/api/users', usersController.index)
router.post('/api/users', usersController.create)

router.get('/api/appointments', appointmentsController.index)
router.post('/api/appointments', appointmentsController.create)
router.patch('/api/appointments/:id', appointmentsController.update)
module.exports = router
