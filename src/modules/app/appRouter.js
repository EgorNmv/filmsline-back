import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../front', 'index.html'));
});

export default router;
