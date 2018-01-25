const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')
const addUser = require('./routes/add-user')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.use('/', userRoutes)
server.use('/adduser', addUser)


module.exports = server

