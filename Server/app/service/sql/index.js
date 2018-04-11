
class Sql {
    constructor (module) {
        this.module = module;
    }
    async find(params) {
        return new Promise((resolve, reject) => {
            this.module.find(params, (err, doc) => {
                err ? reject({code: '0001', msg: err}) : resolve({code: '0000', data: doc});
            })
        });
    }
}

export default Sql;