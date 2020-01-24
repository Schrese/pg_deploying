
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, recipes_id: 1, ingredients_id: 1, quantity: 2.00, quantity_type: 'g' },
        {id: 2, recipes_id: 1, ingredients_id: 2, quantity: 8.00, quantity_type: 'oz' },
        {id: 3, recipes_id: 2, ingredients_id: 3, quantity: 1.00, quantity_type: 'whole eggs' },
        {id: 4, recipes_id: 2, ingredients_id: 4, quantity: 1.00, quantity_type: 'oz' },
        {id: 5, recipes_id: 3, ingredients_id: 3, quantity: 1.50, quantity_type: 'oz' },
        {id: 6, recipes_id: 3, ingredients_id: 4, quantity: 1.00, quantity_type: 'whole egg' },
        {id: 7, recipes_id: 3, ingredients_id: 5, quantity: 2.20, quantity_type: 'drops' },
      ]);
    });
};
