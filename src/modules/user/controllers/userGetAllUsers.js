import User from '../userModel';

const userGetAllUsers = (req, res) => {
    User.find()
        .select('-__v')
        .exec()
        .then(users => {
            res.status(200).json({status: 'ok', data: users});
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

export default userGetAllUsers;
