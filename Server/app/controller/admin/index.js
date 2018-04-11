
import module       from '../../model/admin'
import cue_config   from '../../../config/config.cue'
import Sql          from '../../service/sql'
import log          from '../../../tool/log'
import jwt          from 'jsonwebtoken';

const sql = new Sql(module);

class Admin {

    constructor() {
        this.LIST_LEVE = 5;
    }

    /**
     * 登录验证
     * */
    async login (req, res, next) {
        let { params } = req;
        const { code, data, msg } = await sql.find(params);
        if (code !== '0000') {
            log(msg);
            return res.json(cue_config.ERROR());
        }
        if (!data.length) return res.json(cue_config.ERROR('帐号或密码不正确'));
        const token = jwt.sign(params, 'app.get(superSecret)', {
            expiresIn: 60 * 60 * 24
        });
        res.json(cue_config.SUCCESS({token, user_id: data[0]._id, user_name: data[0].user_name}));
    }

    /**
     * 创建管理员
     * */
    async create (req, res, next) {
        let { user, params } = req;
        console.log(user);
        if (user.user_level >= params.user_level) return res.json(cue_config.ERROR('权限不足'));
        const { code, msg } = await sql.create(params);
        if (code !== '0000') {
            log(msg);
            return res.json(cue_config.ERROR());
        }
        res.json(cue_config.SUCCESS());
    }

    /**
     * 管理员列表
     * */
    async list (req, res, next) {
        let { user, params } = req;
        if (user.user_level >= this.LIST_LEVE) return res.json(cue_config.ERROR('权限不足'));
        const { code, data, msg } = await sql.paging(params.page_index, params.page_size);
        if (code !== '0000') {
            log(msg);
            return res.json(cue_config.ERROR());
        }
        res.json(cue_config.SUCCESS(data));
    }

}

export default new Admin();