const db = require('../data/config')

function findById(id) {
    return db('instructions')
    .where('id', id)
    .first()
}

function findInstructions(recipe) {
    return db('instructions_ingredients as ii')
    .join('recipes', 'recipes.id', 'ii.recipes_id')
    .join('ingredients as ing', 'ing.id', 'ii.ingredients_id')
    .where('recipes.id', recipe)
    .select(
        'recpies.name as recipes_name',
        'ing.name as ingredients_name',
        'ii.quantity'
    )
}

module.exports = {
    findById,
    findInstructions
}