const cursos = [
  { codigo: 'IEI-054', nombre: 'Programación Web', semestre: 'En curso' }
];

const obtenerCursos = (req, res) => {
  res.json(cursos);
};

const saludar = (req, res) => {
  const { nombre } = req.body;
  if (!nombre) {
    return res.status(400).json({ error: 'El campo nombre es obligatorio' });
  }
  res.status(201).json({ mensaje: `Hola, ${nombre}, bienvenido al backend` });
};

module.exports = { obtenerCursos, saludar };
