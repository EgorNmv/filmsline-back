import User from '../userModel';

const userDeleteById = (req, res) => {
  const id = req.params.userId;
  User.remove({ _id: id })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('User deleted');
      } else {
        res.status(400).json('User not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default userDeleteById;
