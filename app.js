const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api.routes');
const logger = require('./middlewares/logger');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
