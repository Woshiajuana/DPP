
import Vue from 'vue'
import axios from 'axios'
import router from 'src/router'

export const baseURL =
    window.location.host.indexOf('9003') > -1
    || window.location.host.indexOf('localhost') > -1
        ? '//chainstore.g2campaign.com/'
        : '/';

const instance = axios.create({
    baseURL,
    timeout: 30 * 1000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    let { url, baseURL, data, params } = config;
    console.log(`${ url.startsWith('http') || url.startsWith('//') ? url : baseURL + url } 请求参数 =>`, data || params);
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    let { data: respData, config } = response;
    let { url, baseURL } = config;
    console.log(`${ url.startsWith('http') || url.startsWith('//') ? url : baseURL + url } 请求结果 =>`, respData);
    if (!respData) {
        return Promise.reject(`网络繁忙，请稍后再试(1)`);
    }
    let { message, code, data, Data, Status, Message } = respData;
    if (Status !== undefined) code = Status;
    if (Data !== undefined) data = Data;
    if (Message !== undefined) message = Message;
    if ([1].indexOf(+code) > -1) {
        Vue.prototype.$user.del();
        setTimeout(() => router.replace({ path: '/' }), 800);
        return Promise.reject(message || 'token无效，请重新授权登录');
    }
    if (code !== 0) {
        return Promise.reject(message || `网络繁忙，请稍后再试(2)`);
    }
    return data;
}, (error) => {
    console.log('请求响应错误 => ', error.response);
    error = error.response
        ? `网络繁忙，请稍后再试[${error.response.status}]`
        : `网络繁忙，请稍后再试(3)`;
    return Promise.reject(error);
});

const curl = (url, data = {}, options = {}) => {
    let {
        method,
        loading,
        useToken = true,
    } = options = Object.assign({
        url,
        loading: true,
        method: 'post',
    }, options);
    let { $vux, $user } = Vue.prototype;
    if (loading && $vux) $vux.loading.show();
    let { token } = $user.get();
    if (useToken && token) {
        data instanceof FormData ? data.append('token', token) : (data.token = token);
    }
    options[method === 'get' ? 'params' : 'data'] = data;
    delete options.loading;
    return instance(options).finally(() => {
        if (loading && $vux) $vux.loading.hide();
    });
};

curl.get = (url, data = {}, options = {}) => {
    return this(url, data, Object.assign({ method: 'get' }, options));
};

curl.post = (url, data = {}, options = {}) => {
    return this(url, data, options);
};

export default curl;
