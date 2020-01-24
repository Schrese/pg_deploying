const db = require('../data/db-config.js');

module.exports = {
    getRecipes, 
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    /* 
        select i.ingredient, ri.quantity, ri.quantity_type
        from recipes_ingredients as ri
        join recipes as r on ri.recipes_id = r.id
        join ingredients as i on ri.ingredients_id = i.id
        where r.id = 1
    */
    return db.from('recipes_ingredients as ri')
        .join('recipes as r', 'ri.recipes_id', 'r.id')
        .join('ingredients as i', 'ri.ingredients_id', 'i.id')
        .where('r.id', id)
        .select('i.ingredient', 'ri.quantity', 'ri.quantity_type')
}

function getInstructions(id) {
    /*
        select recipes.instructions 
        from recipes where recipes.id = 1
    */
   return db.from('recipes').where('recipes.id', id).select('recipes.instructions').first();
}