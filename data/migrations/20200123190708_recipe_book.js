
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();

    tbl.string('name', 130).notNullable().index();

    tbl.string('instructions', 3000).notNullable();

  })
  .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('name', 200).notNullable().index();
  })

  .createTable('recipes_ingredients', tbl => {
      tbl.increments();

      tbl.integer('recipes_id').unsigned().notNullable().references('id').inTable('recipes').onDelete('RESTRICT').onUpdate('CASCADE');

      tbl.integer('ingredients_id').unsigned().notNullable().references('id').inTable('ingredients').onDelete('RESTRICT').onUpdate('CASCADE');

      tbl.float('quantity', [2]).notNullable();

      tbl.string('quantity_type', 100).notNullable();
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
