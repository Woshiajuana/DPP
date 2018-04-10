
import check        from '../../utils/check'

class ParamsFilter {
    async post (format, req, res, next) {
        let params = Object.assign(format, req.body);
        if(!check(res, params)) return;
        req.params = params;
        next();
    }
    async get (format, req, res, next) {
        let params = Object.assign(format, req.query);
        console.log('进入',params)
        if(!check(res, params)) return console.log('返回');
        console.log('继续');
        req.params = params;
        next();
    }
}

export default new ParamsFilter();