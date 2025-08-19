const express = require('express');
const path = require('path');
const operaciones = require('./operaciones');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/operar', (req, res) => {
  const { num1, num2, operacion } = req.body;
  let resultado;
  try {
    switch (operacion) {
      case 'suma': resultado = operaciones.suma(num1, num2); break;
      case 'resta': resultado = operaciones.resta(num1, num2); break;
      case 'multiplicacion': resultado = operaciones.multiplicacion(num1, num2); break;
      case 'division': resultado = operaciones.division(num1, num2); break;
      default: return res.status(400).json({ error: 'Operación no válida' });
    }
    res.json({ resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
