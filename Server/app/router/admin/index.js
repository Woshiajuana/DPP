
import express  from 'express'
import Admin    from '../../controller/admin'

const router = express.Router();

router.get('/login', Admin.login);

export default router;