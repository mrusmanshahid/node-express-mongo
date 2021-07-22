import {Router} from 'express';
import recordRouter from './record.routes';

const router: Router = Router();

router.use('/records', recordRouter);

export default router;
