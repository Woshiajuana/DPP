
import models       from '../../database/db'

const { Db, Schema } = models;

const schema = new Schema({

});

export default Db.model('admins', schema);