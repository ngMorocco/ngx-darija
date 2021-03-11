/* eslint-disable */

const express = require('express');
const path = require('path');
const app = express();
const playlist = require('../src/functions/playlist');
var cors = require('cors')

const lang = process.argv[2] || 'en';
const dir = path.join(__dirname, '..', 'dist', lang);

// app.use(express.static(dir));

app.get('**/.netlify/functions/playlist', cors(), async (req, res) => {
    console.log(req.method);
    const response = await playlist.handler();
    res.status(response.statusCode).send(response.body);
});

console.log(`🚀 Serving files from ${dir} 🚀`);

app.listen(8889);
