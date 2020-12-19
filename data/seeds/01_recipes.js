
exports.seed = async function(knex) {
  await knex('recipes').insert([
    { name: 'Pizza'},
    { name: 'Hot Dog'},
    { name: 'Taco'}
  ])
};
