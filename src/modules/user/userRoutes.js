import { Router } from 'express';

import userSignIn from './controllers/userSignIn';
import userSignUp from './controllers/userSignUp';
import userGetAllProducers from './controllers/userGetAllProducers';
import userDeleteById from './controllers/userDeleteById';

const router = Router();

router.post('/join', userSignUp);
router.post('/login', userSignIn);
router.get('/', userGetAllProducers);
router.delete('/:userId', userDeleteById);

export default router;
