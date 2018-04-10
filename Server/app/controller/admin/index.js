
import module       from '../../model/admin'
import check        from '../../utils/check'
import cue_config   from '../../../config/config.cue'

class Admin {
    async login (req, res, next) {
        let params = {
            user_name: req.body.user_name,
            user_password: req.body.user_password
        };
        console.log(2222222222)
        if(!check(res, params)) return;
        module.find(params, function(err, doc){
            if(!doc.length) return res.json(cue_config.ERROR('帐号或密码不正确'));
            /**创建token*/
            let token = jwt.sign(params, 'app.get(superSecret)', {
                expiresIn: 60 * 60 * 24 /**设置过期时间*/
            });
            res.json(cue_config.SUCCESS({token, user_id: doc[0]._id, user_name: doc[0].user_name}));
        });
    }
}

export default new Admin();