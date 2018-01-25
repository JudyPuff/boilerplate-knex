const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')
<<<<<<< HEAD
const addUser = require('./routes/adduser')
=======
const profileRoutes = require('./routes/profiles')

>>>>>>> d70439c36a7a980914961acb5b611fc5198893ac
const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.use('/', userRoutes)
<<<<<<< HEAD
server.use('/adduser', addUser)
=======
server.use('/profiles', profileRoutes)
>>>>>>> d70439c36a7a980914961acb5b611fc5198893ac

module.exports = server

