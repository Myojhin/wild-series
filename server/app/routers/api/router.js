const express = require('express');

const router = express.Router();

// Import des autres routeurs (Programmes, Items, etc.)
const categoriesRouter = require('./categories/router');  // Nouveau routeur pour les catégories
const programsRouter = require('./programs/router');
const itemsRouter = require('./items/router');

// Définir la route d'accueil
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

// Utilisation des sous-routeurs
router.use('/categories', categoriesRouter);  // Ajout des routes pour les catégories
router.use('/programs', programsRouter);  // Routes pour les séries
router.use('/items', itemsRouter);  // Routes pour les items

module.exports = router;
