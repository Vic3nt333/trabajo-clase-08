const express = require('express');
const router = express.Router();
const { obtenerCursos, saludar } = require('../controllers/api.controller');
const { obtenerTareas, agregarTarea, completarTarea } = require('../controllers/tareas.controller');

// Rutas de cursos
router.get('/cursos', obtenerCursos);
router.post('/saludar', saludar);

// Rutas de tareas
router.get('/tareas', obtenerTareas);
router.post('/tareas', agregarTarea);
router.put('/tareas/:id/completar', completarTarea);

module.exports = router;
