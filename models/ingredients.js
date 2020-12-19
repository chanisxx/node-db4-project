const db = require('../data/config')

function find() {
    return db('ingredients as ing')
    .leftJoin('recipes', 'recipe.id', 'ing.recipe_id')
    .select('ing,id', 'ing.name', 'recipe.name as recipe_name')
}

function findById(id) {
    return db('ingredients as ing')
    .where('ing.id', id)
    .leftJoin('recipe', 'recipe.id', 'ing.recipe_id')
    .first('ing,id', 'ing.name', 'recipe.name as recipe_name')
}

module.exports = {
    find, 
    findById
}