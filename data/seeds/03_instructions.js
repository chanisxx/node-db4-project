
exports.seed = async function(knex) {
  await knex('instructions').insert([
    { recipes_id: 1, ingredients_id: 1, quantity_cups: 1.5 },
    { recipes_id: 1, ingredients_id: 2, quantity_cups: 2},
    { recipes_id: 1, ingredients_id: 3, quantity_cups: 4},
    { recipes_id: 2, ingredients_id: 7, quantity_cups: 2},
    { recipes_id: 2, ingredients_id: 8, quantity_cups: .2},
    { recipes_id: 2, ingredients_id: 9, quantity_cups: 2},
    { recipes_id: 2, ingredients_id: 6, quantity_cups: .2},
    { recipes_id: 3, ingredients_id: 6, quantity_cups: .5},
    { recipes_id: 3, ingredients_id: 4, quantity_cups: 4},
    { recipes_id: 3, ingredients_id: 5, quantity_cups: 2},
    { recipes_id: 3, ingredients_id: 2, quantity_cups: 2}
  ])
};
