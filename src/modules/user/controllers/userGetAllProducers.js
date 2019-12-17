import User from '../userModel';

const filmGetAll = (req, res) => {
  User.find({ type: 1 })
    .exec()
    .then(producers => {
      res.status(200).json({ status: 'ok', data: producers });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

export default filmGetAll;
