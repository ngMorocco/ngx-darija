/* eslint-disable */

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('**/.netlify/functions/:endpoint', async (req, res) => {
  const endpoint = require(`../src/functions/${req.params.endpoint}`);
  const response = await endpoint.handler({ path: req.path });
  res.status(response.statusCode).send(response.body);
});

app.listen(8889);
