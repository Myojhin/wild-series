const express = require('express');
const { browse, read } = require('../../../controllers/categoryActions');  // Import des actions depuis categoryActions.js

const router = express.Router();

// Route pour lister toutes les catégories (GET /api/categories)
router.get('/', browse);

// Route pour lire une catégorie spécifique (GET /api/categories/:id)
router.get('/:id', read);

module.exports = router;
