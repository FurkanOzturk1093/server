/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("occupations").del();
  await knex("occupations").insert([
    { occupation_id: 1, occupation_name: "rowValue1" },
    { occupation_id: 2, occupation_name: "rowValue2" },
    { occupation_id: 3, occupation_name: "rowValue3" },
  ]);
};
