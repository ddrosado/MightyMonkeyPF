const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, server is running!');
});

app.listen(port, () => {
  console.log(`Holis soy el server estoy en el puerto ${port}`);
});