const express = require('express')
const router = express.Router()
const users = require('../controllers/users')
const appointments = require('../controllers/appointments')

router.get('/api/users', users.index)
router.get('/api/appointments', appointments.index)


module.exports = router
