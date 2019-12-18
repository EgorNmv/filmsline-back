import User from '../userModel';

const userAddFilmToFilmsList = (req, res) => {
  const id = req.body.userId;
  User.findById(id)
    .exec()
    .then(user => {
      user.films.push({ film_name: req.body.film_name, film_id: req.body.film_id });
      user.save();
      res.status(201).json({ status: 'ok', data: user });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default userAddFilmToFilmsList;
