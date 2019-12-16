import mongoose from 'mongoose';
import User from '../userModel';

export default async function userSignUp(req, res) {
  console.info('Response is: ', req);
  const _id = new mongoose.Types.ObjectId();
  const user = new User({
    _id,
    username: req.body.username,
    password: req.body.password,
    type: req.body.type,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({ status: 'ok', user: user });
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
