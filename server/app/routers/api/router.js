const express = require('express');

const router = express.Router();

// Import des sous-routeurs
const itemsRouter = require('./items/router'); // Sous-routeur pour les items
const programsRouter = require('./programs/router'); // Sous-routeur pour les séries

// Routes pour les items
router.use('/items', itemsRouter);

// Routes pour les séries (programs)
router.use('/programs', programsRouter);  // Ajout des routes pour les séries

// Route d'accueil
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

module.exports = router;
