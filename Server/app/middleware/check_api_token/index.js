
import cue_config from '../../../config/config.cue'
const jwt = require('jsonwebtoken');
/**检查用户会话*/
export default (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['authorization'];
    if(!token) return res.json(cue_config.TOKEN_BEFAULT());
    jwt.verify(token, 'app.get(superSecret)', (err, decoded) => {
        if(err) return res.json(cue_config.TOKEN_AFTER());
        req.user = decoded;
        next();
    });
};