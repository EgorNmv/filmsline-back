import { Router } from 'express';

import adminSignIn from './controllers/adminSignIn';

const router = Router();

router.post('/', adminSignIn);

export default router;
