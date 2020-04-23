const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const userRouter = require('../users/user-router');
const restricted = require('../auth/restricted-middleware');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, checkRole(''), userRouter);

// COME BACK TO THIS
function checkRole(user) {
    return (req, res, next) => {

    }
}

server.get('/', (req, res) => {
    res.send("it works...?");
});

module.exports = server;