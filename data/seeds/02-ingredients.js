
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'Cocoa Powder'},
        {ingredient: 'Milk'},
        {ingredient: 'Eggs'},
        {ingredient: 'Ham'},
        {ingredient: 'Green Die'}
      ]);
    });
};
