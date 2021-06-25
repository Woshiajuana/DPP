
import Vue from 'vue'

export default {

    // 验证数据
    check (data, mode = true) {
        let result = false;
        try {
            _core(data)
        } catch (err) {
            result = true;
            let text = typeof err === 'object'
                ? err.errMsg || err.Message || err.message || JSON.stringify(err)
                : err + '';
            mode && Vue.prototype.$vux.toast.show({ text });
        }
        return result;
    },

    // 提取
    input () {
        let result = {};
        if (arguments.length === 0)
            return result;
        let loop = null;
        Each(arguments, (param) => {
            (loop = (param) => {
                Each(param, (item, key) => {
                    let {
                        value,
                        children,
                        children2,
                        hidden,
                    } = item;
                    if (hidden) return;
                    if (typeof value !== 'undefined')
                        result[key] = item.value;
                    if (children) loop(children);
                    if (children2) loop(children2);
                });
            })(param);
        });
        return result;
    },

    // 赋值反显
    assignment () {
        if (arguments.length < 2)
            return null;
        let params = Array.prototype.slice.apply(arguments);
        let source = params[0];
        let expects = params.slice(1);
        let loop = (data) => {
            Each(data, (item, key) => {
                let {
                    value,
                    checkbox,
                    children,
                    children2,
                } = item;
                let sV = source[key];
                if (typeof value !== 'undefined' && (sV || (sV !== null && typeof sV !== 'undefined'))) {
                    item.value = sV;
                }
                if (typeof value !== 'undefined' && checkbox) {
                    item.value = sV;
                }
                if (children) loop(children);
                if (children2) loop(children2);
            });
        };
        expects.forEach((expect) => {
            loop(expect);
        });
    },

    // 过滤空的值
    filterNull (source) {
        let result = {};
        Each(source, (value, key) => {
            if (value !== '' && value !== null)
                result[key] = value;
        });
        return result;
    }

};


function _core(source){
    let loop;
    (loop = (data) => {
        Each(data, (item, index, key) => {
            if (Object.prototype.toString.call(item) === '[object Object]') {
                let {
                    use,
                    value,
                    children,
                    children2,
                    hidden,
                } = item;
                if (hidden) return;
                if (children) loop(children);
                if (children2) loop(children2);
                if (use || value)
                    return _v(item, source);
            }
        });
    })(source);
}


function _v (prop, data) {
    let {
        use,
        value,
        hidden,
    } = prop;
    if (!use || hidden)
        return null;
    use.forEach((item) => {
        let {
            nonempty,
            rule,
            prompt,
            callback,
        } = item;
        if (nonempty && (typeof value === 'undefined' || value === '')) {
            callback && callback(prop, data);
            throw prompt;
        }
        if (typeof rule === 'function' && !rule(value, data)) {
            callback && callback(prop, data);
            throw prompt;
        }
        if (typeof rule === 'object' && !rule.test(value)) {
            callback && callback(prop, data);
            throw prompt;
        }
    });
}


function Each (obj, callback) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        for (let index = 0, length = obj.length; index < length; index++ ) {
            if (callback.call(obj[index], obj[index], index) === false)
                break;
        }
    } else {
        for (let key in obj) {
            if (callback.call(obj[key], obj[key], key) === false)
                break;
        }
    }
    return obj;
}
