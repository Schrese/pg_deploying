
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipes_id: 1, ingredients_id: 1, quantity: 2.00, quantity_type: 'g' },
        {recipes_id: 1, ingredients_id: 2, quantity: 8.00, quantity_type: 'oz' },
        {recipes_id: 2, ingredients_id: 3, quantity: 1.00, quantity_type: 'whole eggs' },
        {recipes_id: 2, ingredients_id: 4, quantity: 1.00, quantity_type: 'oz' },
        {recipes_id: 3, ingredients_id: 3, quantity: 1.50, quantity_type: 'oz' },
        {recipes_id: 3, ingredients_id: 4, quantity: 1.00, quantity_type: 'whole egg' },
        {recipes_id: 3, ingredients_id: 5, quantity: 2.20, quantity_type: 'drops' },
      ]);
    });
};
