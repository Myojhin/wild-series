// server/database/tables.js
const ItemRepository = require("./models/ItemRepository");
const CategoryRepository = require("./models/CategoryRepository");
const ProgramRepository = require("./models/ProgramRepository"); // Importer ProgramRepository

const tables = {};

// Enregistrer les repositories
tables.item = new ItemRepository();
tables.category = new CategoryRepository();
tables.program = new ProgramRepository();  // Enregistrer ProgramRepository

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
