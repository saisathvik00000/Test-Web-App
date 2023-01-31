const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, This is test web application created for DOCKER');
});

app.listen(8080, () => {
  console.log('Test App listening on port 8080!');
});