const express = require('express');
const app = express();
const port = process.env.PORT;

//endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});


//desplegar el servicio
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
