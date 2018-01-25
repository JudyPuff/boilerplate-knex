const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('adduser')
}) 

router.post('/add', (req, res) => {
  const user = req.body
  db.addUser(user)
    .then(() => {
      res.redirect('/')
    })
})

module.exports = router