
import mongoose     from 'mongoose'
import config       from '../../../config/config.test'
import log          from '../../../tool/log'

const DB_URL = config.DB_URL;
const Db = mongoose.connect(DB_URL, {server:{auto_reconnect:true}}).connection;
const Schema = mongoose.Schema;

Db.once('connected', () => {
    log('连接数据库成功')
});

Db.on('error', (error) => {
    log(`数据库异常出错：${error}`, '004');
    mongoose.disconnect();
});

Db.on('close', () => {
    log('数据库断开，重新连接数据库');
    mongoose.connect(DB_URL, {server:{auto_reconnect:true}});
});

export default {
    Schema,
    Db,
};