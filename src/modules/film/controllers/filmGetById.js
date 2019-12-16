import Film from '../filmModel';

const filmGetById = (req, res) => {
  const id = req.params.filmId;
  Film.findById(id)
    .exec()
    .then(film => {
      if (film) {
        res.status(200).json({ status: 'ok', data: film });
      } else {
        res.status(404).json('No film for provided id');
      }
    })
    .catch(err => {
      console.log(err);
      // res.status(500).json({ error: err });
      res.status(500).json('Film not found');
    });
};

export default filmGetById;
