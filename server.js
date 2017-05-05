import config from './config';
import express from 'express';
import usersRouter from './api/users';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {loadUsers} from './usersData';
import {Mockgoose} from 'mockgoose';
import {nodeEnv}  from './config';

export const server = express();

// Connect to database
if (nodeEnv == 'test'){
	var mockgoose = new Mockgoose(mongoose); 
	mockgoose.prepareStorage().then(function() {
  	mongoose.connect(config.mongoDb);
	});
}
else
{
	mongoose.connect(config.mongoDb);
}

mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: '+ err);
    process.exit(-1);
});
// Populate DB with sample data
if(config.seedDb) {
    loadUsers();
}

//configure body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use('/api/users', usersRouter);
server.use(express.static('public'));



server.listen(config.port, () => {
  console.info('Your app is running on port:', config.port);
});
