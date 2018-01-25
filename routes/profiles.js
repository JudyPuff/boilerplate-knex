const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/:id', (req, res) => {
  let byId = req.params.id
  db.getProfile(byId)
    .then(profile => {
      res.render('profiles', profile)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
