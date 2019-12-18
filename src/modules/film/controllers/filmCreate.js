import mongoose from 'mongoose';
import Film from '../filmModel';

export default async function filmCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const film = new Film({
    _id,
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
    producer: {
      producer_name: req.body.producer_name,
      producer_id: req.body.producer_id,
    },
    start_rental: req.body.start_rental || null,
    end_rental: req.body.end_rental || null,
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
