// Almacenamiento en memoria
let tareas = [];
let contadorId = 1;

// GET /api/tareas - Obtener todas las tareas
const obtenerTareas = (req, res) => {
  res.json(tareas);
};

// POST /api/tareas - Agregar nueva tarea
const agregarTarea = (req, res) => {
  const { texto } = req.body;

  // Validación
  if (!texto || texto.trim() === '') {
    return res.status(400).json({ error: 'El campo texto es obligatorio' });
  }

  // Crear nueva tarea
  const nuevaTarea = {
    id: contadorId++,
    texto: texto.trim(),
    completada: false
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
};

// PUT /api/tareas/:id/completar - Marcar tarea como completada
const completarTarea = (req, res) => {
  const { id } = req.params;
  
  // Validar que el id sea un número
  const idNumero = parseInt(id, 10);
  if (isNaN(idNumero)) {
    return res.status(400).json({ error: 'El ID debe ser un número válido' });
  }

  // Buscar la tarea
  const tarea = tareas.find(t => t.id === idNumero);
  if (!tarea) {
    return res.status(404).json({ error: `Tarea con ID ${id} no encontrada` });
  }

  // Marcar como completada
  tarea.completada = true;
  res.status(200).json({ mensaje: 'Tarea marcada como completada', tarea });
};

// DELETE /api/tareas/:id - Borrar una tarea
const borrarTarea = (req, res) => {
  const { id } = req.params;
  
  // Validar que el id sea un número
  const idNumero = parseInt(id, 10);
  if (isNaN(idNumero)) {
    return res.status(400).json({ error: 'El ID debe ser un número válido' });
  }

  // Buscar el índice de la tarea
  const indice = tareas.findIndex(t => t.id === idNumero);
  if (indice === -1) {
    return res.status(404).json({ error: `Tarea con ID ${id} no encontrada` });
  }

  // Borrar la tarea
  const tareaEliminada = tareas.splice(indice, 1);
  res.status(200).json({ mensaje: 'Tarea eliminada correctamente', tarea: tareaEliminada[0] });
};

module.exports = { obtenerTareas, agregarTarea, completarTarea, borrarTarea };
