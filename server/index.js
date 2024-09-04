// Charger les variables d'environnement depuis le fichier .env
require("dotenv").config();

// Vérifier la connexion à la base de données
// Remarque : ceci est optionnel et peut être supprimé si la connexion à la base de données
// n'est pas nécessaire lors du démarrage de l'application
require("./database/client").checkConnection();

// Importer l'application Express depuis app/config.js
const app = require("./app/config");

// Obtenir le port à partir des variables d'environnement
const port = process.env.APP_PORT;

// Définir la route GET / pour afficher un message de bienvenue
app.get("/", (req, res) => {
  res.send("Welcome to Wild Series !");
});

// Démarrer le serveur et écouter sur le port spécifié
app
  .listen(port, () => {
    console.info(`Le serveur écoute sur le port ${port}`);
  })
  .on("error", (err) => {
    console.error("Erreur :", err.message);
  });
