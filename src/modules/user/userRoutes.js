import { Router } from 'express';

import userSignIn from './controllers/userSignIn';
import userSignUp from './controllers/userSignUp';
import userGetAllProducers from './controllers/userGetAllProducers';
import userDeleteById from './controllers/userDeleteById';
import userGetById from './controllers/userGetById';
import userGetAllUsers from './controllers/userGetAllUsers';
import userAddFilmToFilmsList from './controllers/userAddFilmToFilmsList';

const router = Router();

router.get('/', userGetAllProducers);
router.get('/users', userGetAllUsers);
router.get('/:userId', userGetById);
router.post('/join', userSignUp);
router.post('/login', userSignIn);
router.post('/film', userAddFilmToFilmsList);
router.delete('/:userId', userDeleteById);

export default router;
