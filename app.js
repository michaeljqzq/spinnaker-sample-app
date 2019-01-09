const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.write('Hello world, spinnaker on Azure!');
  res.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));