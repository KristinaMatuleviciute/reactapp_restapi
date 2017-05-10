import express from 'express';
import _ from 'lodash';
import mongoose from 'mongoose';
import User from './userModel';
import config from './../../config';
import jwt from 'jsonwebtoken';



const router = express.Router();

//Get users
router.get('/', (req, res) => {
    User.find((err, users) => {
        if (err) {
            return handleError(res, err);
        }
        return res.send(users);
    });
});



//Add a user
router.post('/', (req, res) => {
    let newUser = req.body;
    if (newUser) {
        User.create(newUser, (err, user) => {
            if (err) {
                return handleError(res, err);
            }
            return res.status(201).send({
                user
            });
        });
    } else {
        return handleError(res, err);
    }
});

//Update a user
router.put('/:id', (req, res) => {
    let key = req.params.id;
    let updateUser = req.body;

    if (updateUser._id) {
        delete updateUser._id;
    }
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return handleError(res, err);
        }
        if (!user) {
            return res.send(404);
        }
        const updated = _.merge(user, req.body);
        updated.save((err) => {
            if (err) {
                return handleError(res, err);
            }
            return res.send(user);
        });
    });
});

//Delete a user
router.delete('/:id', (req, res) => {
    let key = req.params.id;
    User.findById(key, (err, user) => {
        if (err) {
            return res.status(400).send(err);
        }
        if (!user) {
            return res.send(404);
        }
        user.remove(err => {
            if (err) {
                return handleError(res, err);
            }
            return res.send(user);
        });
    });
});

router.get('/profile/:id', (req, res) => {
    let key = req.params.id;
    User.findById(key, (err, user) => {
        if (err) {
            return handleError(res, err);
        }
        return res.send(user);
    });
});

router.post('/login', (req, res) => {
  if(!req.body.name){
  		res.status(400).send('Username required');
  		return;
  	}
  	if(!req.body.password){
  		res.status(400).send('Password required');
  		return;
  }
    User.find({email: req.body.name, password: req.body.password},(err, user) => {

        if (err) {
            return handleError(res, err);
        }
        var myToken = jwt.sign({name :req.body.name}, 'hello')
        return res.status(200).json({
                      user: user,
                      token: myToken
                    });
    });
});

function handleError(res, err) {
    return res.status(500).send(err);
};

export default router;
