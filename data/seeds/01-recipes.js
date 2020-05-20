
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Hot Chocolate', instructions: 'Heat milk or water, then pour in cocoa powder'},
        {name: 'Eggs and Ham', instructions: 'heat ham, when nearly done, throw eggs in'},
        {name: 'Green Eggs and Ham', instructions: 'See Eggs and Ham, then add green die'}
      ]);
    });
};
