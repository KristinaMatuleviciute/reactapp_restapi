import config from './config';
import express from 'express';
import usersRouter from './api/users';
import bodyParser from 'body-parser';

const server = express();

//configure body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use('/api/users', usersRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Your app is running on port:', config.port);
});
