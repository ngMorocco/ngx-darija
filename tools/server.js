/* eslint-disable */

const express = require('express');
const path = require('path');
const app = express();
const playlist = require('../src/functions/playlist');
const cors = require('cors');

const lang = process.argv[2] || 'en';
const dir = path.join(__dirname, '..', 'dist', lang);

app.get('**/.netlify/functions/playlist', cors(), async (_, res) => {
  const response = await playlist.handler();
  res.status(response.statusCode).send(response.body);
});

console.log(`🚀 Serving files from ${dir} 🚀`);

app.listen(8889);
