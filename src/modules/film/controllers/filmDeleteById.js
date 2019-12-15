import Film from '../filmModel';

const filmDeleteById = (req, res) => {
  const id = req.params.filmId;
  Film.remove({ _id: id })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Film deleted');
      } else {
        res.status(400).json('Film not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default filmDeleteById;
