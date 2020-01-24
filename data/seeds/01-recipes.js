
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Hot Chocolate', instructions: 'Heat milk or water, then pour in cocoa powder'},
        {id: 2, name: 'Eggs and Ham', instructions: 'heat ham, when nearly done, throw eggs in'},
        {id: 3, name: 'Green Eggs and Ham', instructions: 'See Eggs and Ham, then add green die'}
      ]);
    });
};
