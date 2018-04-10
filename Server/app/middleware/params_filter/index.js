
import check        from '../../utils/check'

class ParamsFilter {
    async post (format_arr, req, res, next) {
        let format = {};
        format_arr.forEach((item) => {
            format[item] = undefined;
        });
        let params = Object.assign(format, req.body);
        if(!check(res, params)) return;
        req.params = params;
        next();
    }

    async get (format_arr, req, res, next) {
        let format = {};
        format_arr.forEach((item) => {
            format[item] = undefined;
        });
        let params = Object.assign(format, req.query);
        console.log('进入',params);
        if(!check(res, params)) return;
        req.params = params;
        next();
    }
}

export default new ParamsFilter();