import express from 'express';
import users from './users';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ users: users });
});

router.post('/', (req, res) => {
  res.send({ users: users });
});

export default router;
