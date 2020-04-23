require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 4220;

server.listen(port, () => console.log(`this be running on ${port}`))