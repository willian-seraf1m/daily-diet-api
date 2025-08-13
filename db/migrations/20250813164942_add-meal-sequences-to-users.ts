import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('users', (table) => {
    table.integer('current_meal_sequence')
    table.integer('best_meal_sequence')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('users', (table) => {
    table.dropColumn('current_meal_sequence')
    table.dropColumn('best_meal_sequence')
  })
}
