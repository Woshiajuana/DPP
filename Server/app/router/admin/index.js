
import express          from 'express'
import Admin            from '../../controller/admin'
import paramsParser     from '../../middleware/params-parser'
import tokenParser      from '../../middleware/token-parser'

const router = express.Router();

router.get('/login', (req, res, next) => {
    next(['user_name', 'user_password']);
}, paramsParser.get, Admin.login);

router.get('/create', tokenParser, (req, res, next) => {
    next(['user_name', 'user_password', 'user_level']);
}, paramsParser.get, Admin.create);

router.get('/list', tokenParser, (req, res, next) => {
    next(['page_index', 'page_size']);
}, paramsParser.get, Admin.list);

router.get('/remove', tokenParser, (req, res, next) => {
    next(['_id']);
}, paramsParser.get, Admin.remove);

router.get('/update', tokenParser, (req, res, next) => {
    next(['_id']);
}, paramsParser.get, Admin.update);

export default router;