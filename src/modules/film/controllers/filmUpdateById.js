import Film from '../filmModel';

export default async function todoUpdateById(req, res) {
  const id = req.params.filmId;

  Film.update({ _id: id }, { $set: req.body })
    .exec()
    .then(film => {
      if (film.n) {
        res.status(200).json('Film updated');
      } else {
        res.status(400).json('Film not found');
      }
    })
    .catch(err => {
      // res.status(500).json(err);
      res.status(500).json('Film not found');
    });
}
