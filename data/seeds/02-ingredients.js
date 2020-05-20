
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Cocoa Powder'},
        {id: 2, ingredient: 'Milk'},
        {id: 3, ingredient: 'Eggs'},
        {id: 4, ingredient: 'Ham'},
        {id: 5, ingredient: 'Green Die'}
      ]);
    });
};
