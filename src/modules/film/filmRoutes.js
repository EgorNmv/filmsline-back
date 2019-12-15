import { Router } from 'express';

import filmGetAll from './controllers/filmGetAll';
import filmGetById from './controllers/filmGetById';
import filmUpdateById from './controllers/filmUpdateById';
import filmCreate from './controllers/filmCreate';
import filmDeleteById from './controllers/filmDeleteById';

const router = Router();

router.get('/', filmGetAll);
router.post('/', filmCreate);
router.get('/:filmId', filmGetById);
router.put('/:filmId', filmUpdateById);
router.delete('/:filmId', filmDeleteById);

export default router;
