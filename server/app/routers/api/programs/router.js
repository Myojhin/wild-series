const express = require('express');

const { browse } = require('../../../controllers/programActions');

const router = express.Router();

// Route pour récupérer la liste des séries
router.get('/', browse);

module.exports = router;
