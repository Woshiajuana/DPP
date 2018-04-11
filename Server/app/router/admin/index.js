
import express          from 'express'
import Admin            from '../../controller/admin'
import paramsFilter     from '../../middleware/params_filter'
import checkApiToken    from '../../middleware/check_api_token'

const router = express.Router();

router.get('/login', (req, res, next) => {
    next(['user_name', 'user_password']);
}, paramsFilter.get, Admin.login);

router.get('/create', checkApiToken, (req, res, next) => {
    next(['user_name', 'user_password', 'user_level']);
}, paramsFilter.get, Admin.create);

router.get('/create', checkApiToken, (req, res, next) => {
    next(['page_index', 'page_size']);
}, paramsFilter.get, Admin.list);

export default router;