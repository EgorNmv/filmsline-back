import Film from '../filmModel';

const filmGetAll = (req, res) => {
  Film.find()
    .select('-__v')
    .exec()
    .then(films => {
      res.status(200).json(films);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

export default filmGetAll;
