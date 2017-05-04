import config from './config';
import express from 'express';
import usersRouter from './api/users';

const server = express();

server.use('/api/users', usersRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Your app is running on port:', config.port);
});
