const express = require('express');

const { browse, read } = require('../../../controllers/programActions');

const router = express.Router();

// Route pour récupérer la liste des séries
router.get('/', browse);
router.get("/:id", read); // Complete path is: /api/programs/:id

module.exports = router;
