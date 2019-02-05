const User = require('../models/User')


const users = { 
  index:(req, res) => {
  User.find().then(users => {
    res.json(users)
  })
}
}


module.exports = users;