import express from 'express';
import _ from 'lodash';
import mongoose from 'mongoose';
import User from './userModel';
import config from './../../config';


const router = express.Router();

//Get users
router.get('/', (req, res) => {
 User.find((err, users) => {
    if(err) { return handleError(res, err); }
    return res.send(users);
  });
});



//Add a user
router.post('/', (req, res) => {
		let newUser = req.body;
		if (newUser){
           User.create(newUser, (err, user) => {
              if(err) { return handleError(res, err); }
                 return res.status(201).send({user});
          });
      }else{
      	 return handleError(res, err);
      }
});

//Update a user
router.put('/:id', (req, res) => {
	 let key = req.params.id;
	 let updateUser = req.body;

   if(updateUser._id) { delete updateUser._id; }
   User.findById(req.params.id,  (err, user) => {
      if (err) { return handleError(res, err); }
        if(!user) { return res.send(404); }
            const updated = _.merge(user, req.body);
            updated.save((err) => {
                  if (err) { return handleError(res, err); }
                          return res.send(user);
            });
      });
});

//Delete a user
router.delete('/:id', (req, res) => {
	 let key = req.params.id;
   User.findById(key, (err, user)=> {
    if(err) { return res.status(400).send(err);}
    if(!user) { return res.send(404); }
    user.remove(err => {
      if(err) { return handleError(res, err); }
      return res.send(user);
    });
  });
});

router.get('/profile/:id', (req, res) => {
  let key = req.params.id;
 User.findById(key, (err, user) => {
    if(err) { return handleError(res, err); }
    return res.send(user);
    console.log('jjjjjjjjjjjjjjj', user)
  });
});

function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;
