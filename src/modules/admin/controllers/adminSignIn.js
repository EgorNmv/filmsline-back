import Admin from '../adminModel';
import User from '../../user/userModel';

export default async function adminSignIn(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({username: username})
        .exec()
        .then(admin => {
            if (admin && admin.password === password && admin.type === 0) {
                res.status(200).json({status: 'ok', user: admin});
            } else {
                res.status(404).json({status: 'error', user: 'not found user'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}
