export default {
    LACK_NECESSARY_PARAM (param_name) {
        return {
            code: '1000',
            info: '缺少必要参数:' + param_name
        }
    },
    ERROR (info = '失败') {
        return {
            code: '1001',
            info: info
        }
    },
    SUCCESS ( data = '', info = '成功') {
        return {
            code: '0000',
            info: info,
            data: data
        }
    },
    TOKEN_BEFAULT (info = '请先登录') {
        return {
            code: '2000',
            info: info
        }
    },
    TOKEN_AFTER (info = '请重新登录') {
        return {
            code: '2001',
            info: info
        }
    },
}