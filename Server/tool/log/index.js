/**
 * 命令日志
 * */
import config       from '../../config/config.default'
export default (log_str, stage) => {
    if (!config.is_log) return;
    switch (stage) {
        case '000':
            return console.log(`成功=> ===== ${log_str}`);
        case '001':
            return console.log(`警告=> ===== ${log_str}`);
        case '004':
            return console.log(`错误=> ===== ${log_str}`);
        default:
            return console.log(`提示=> ===== ${log_str}`);

    }
};
