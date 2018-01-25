const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id)
}

function addUser (user, testConn) {
  const newName = user.name
  const newEmail = user.email
  const conn = testConn || connection
  return conn('users')
    .insert({
      name: newName,
      email: newEmail
    })
    .catch(err => {
      console.status(500)
    })
}
