module.exports = async (knex) => {
  const tableLogs = await knex.schema.hasTable('logs');
  if (tableLogs) return;
  await knex.schema.createTable('logs', (table) => {
    table.increments('id').primary();
    table.text('message');
    table.string('level');
    table.string('timestamp');
    table.string('service_name');
  });
};
