// server/database/models/ProgramRepository.js
const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // On passe "program" comme nom de la table
    super({ table: "program" });
  }

  async readAll() {
    // Exécuter la requête SQL pour récupérer toutes les séries
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = ProgramRepository;
