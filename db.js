const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  addUser: addUser,
  listUsers: listUsers
}

function listUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function addUser (newUser, testConn) {
  const conn = testConn || connection
  return conn('users')
    .returning('id')
    .insert([{name: newUser.name, email: newUser.email}])
}
