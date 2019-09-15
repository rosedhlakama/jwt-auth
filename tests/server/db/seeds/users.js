// TODO: implement or import a generateHash function = DONE
const { generateHash } = require('authenticare/server')

exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('jess'),
      generateHash('jules')
    ]))
    .then(([jessHash, julesHash]) =>
      knex('users').insert([
        { id: 1, username: 'jess', hash: jessHash },
        { id: 2, username: 'jules', hash: julesHash }
      ])
    )
}
