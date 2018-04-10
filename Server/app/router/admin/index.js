
import express          from 'express'
import Admin            from '../../controller/admin'
import paramsFilter     from '../../middleware/params_filter'

const router = express.Router();

router.get('/login', (req, res, next) => {
    next(['user_name', 'user_password']);
}, paramsFilter.get, Admin.login);

export default router;