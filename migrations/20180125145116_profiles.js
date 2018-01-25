
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('country')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
