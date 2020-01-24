const express = require('express');
const helmet = require('helmet');

const InfoRouter = require('../information/recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Welcome To My Recipe Book Application </h2>')
});

server.use('/api/recipes', InfoRouter);

module.exports = server;