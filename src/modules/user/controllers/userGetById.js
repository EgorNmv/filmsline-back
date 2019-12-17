import User from '../userModel';

const userDeleteById = (req, res) => {
  const id = req.params.userId;
  User.findById(id)
    .exec()
    .then(user => {
      if (user) {
        res.status(200).json({ status: 'ok', data: user });
      } else {
        res.status(404).json('No user for provided id');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default userDeleteById;
