
const helperFnPromise = (fn, options = {}, msg = '') => {
    return new Promise(((resolve, reject) => {
        wx[fn]({
            ...options,
            success: resolve,
            cancel: () => {
                reject(msg);
            },
            error: (err) => {
                reject(err);
                console.log(`${fn} error => `, err);
            },
        })
    }));
};

export default {

    // 扫一扫
    scanQRCode: (options = {}) => helperFnPromise('scanQRCode', options),

    // 获取用户地理位置
    getLocation: (options = {}) => helperFnPromise('getLocation', options, '已取消定位'),

    // 获取用户地理位置
    getLocation1: (options = {}) => new Promise(((resolve, reject) => {
        return resolve({
            latitude: 31.22114,
            longitude: 121.54409,
        });
        // wx.getLocation({
        //     ...options,
        //     success: resolve,
        //     cancel: () => {
        //         reject('需要获取您的定位哦');
        //     },
        //     error: (err) => {
        //         reject();
        //         console.log(`${fn} error => `, err);
        //     },
        // });
    })),

    // 微信支付
    chooseWXPay: (options = {}) => helperFnPromise('chooseWXPay', options, '已取消支付'),

}
