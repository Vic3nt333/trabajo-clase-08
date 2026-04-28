const express = require('express');
const router = express.Router();
const { obtenerCursos, saludar } = require('../controllers/api.controller');

router.get('/cursos', obtenerCursos);
router.post('/saludar', saludar);

module.exports = router;
