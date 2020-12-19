
exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { name: 'Tomato sauce' },
    { name: 'Cheese' },
    { name: 'Dough' },
    { name: 'Tortillas' },
    { name: 'Ground Beef' },
    { name: 'Hot Sauce' },
    { name: 'Weiner' },
    { name: 'Ketchup' },
    { name: 'Bun' },
  ])
};
