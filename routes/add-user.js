const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('addUser')
})

router.post('/', (req, res) => {
  let newUser = {
    name: req.body.name,
    email: req.body.email
  }
  db.addUser(newUser)
    .then(() => {
      res.redirect('/')
    })
})

module.exports = router
