
import models       from '../../database/db'

const { Db, Schema } = models;

const schema = new Schema({
    user_name: { type: String, unique: true },
    user_password: String,
    user_date: Date,
    privilege_level: Number,
},{
    versionKey: false,
});

export default Db.model('admins', schema);