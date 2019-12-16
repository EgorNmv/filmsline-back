import User from '../userModel';

export default async function userSignIn(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username })
    .exec()
    .then(user => {
      if (user && user.password === password) {
        res.status(200).json({ status: 'ok', user: user });
      } else {
        res.status(404).json({ status: 'error', user: 'not found user' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}
