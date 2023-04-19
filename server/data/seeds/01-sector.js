/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("sectors").del();
  await knex("sectors").insert([
    { sector_id: 1, sector_name: "rowValue1" },
    { sector_id: 2, sector_name: "rowValue2" },
    { sector_id: 3, sector_name: "rowValue3" },
  ]);
};
