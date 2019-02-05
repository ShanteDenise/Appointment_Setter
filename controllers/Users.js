const User = require('../models/User')


const users = { 
  index:(req, res) => {
  User.find().then(users => {
    res.json(users)
  })
},
create: (req, res) => {
  console.log("user " + req.body)
  User.create(req.body).then(newuser => {
    
    res.send(newuser)

  })
}
}


module.exports = users;