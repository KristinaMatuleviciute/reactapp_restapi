import express from 'express';
import users from './users';
import _ from 'lodash';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ users: users });
});

router.post('/', (req, res) => {
  res.send({ users: users });
});

router.post('/', (req, res) => {
        let newUser = req.body;
        if (newUser){
          users.push({name: newUser.name, address : newUser.address, phone_number: newUser.phone_number }) ;
          res.status(201).send({message: "User Created"});
      }else{
            res.status(400).send({message: "Unable to find User in request. No User Found in body"});
      }
});
//Update a user
router.put('/:id', (req, res) => {
     let key = req.params.id;
     let updateUser = req.body;
     var index = _.findIndex(users, user => {
                 return user.phone_number === key;
              });
            if (index !== -1) {
               users.splice(index, 1, {name: updateUser.name, address: updateUser.address, phone_number: updateUser.phone_number});
               res.status(200).send({message: "User Updated"});
              }
              else{
          res.status(400).send({message: "Unable to find User in request. No User Found in body"}) ;
      }
});

//Delete a user
router.delete('/:id', (req, res) => {
     let key = req.params.id;
   var elements = _.remove(users,
              user => {
                     return user.phone_number === key;
                  });
    if (elements){
       res.status(200).send({message: "User deleted"});
    }else{
      res.status(400).send({message: "Unable to find user. No user Deleted"}) ;
      }


});



export default router;
