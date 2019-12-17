import mongoose from 'mongoose';
import Film from '../filmModel';

export default async function filmCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();
  console.info(req.body);
  const film = new Film({
    _id,
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
    producer: req.body.producer,
  });

  film
    .save()
    .then(() => {
      res.status(201).json({ status: 'ok', data: film });
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
