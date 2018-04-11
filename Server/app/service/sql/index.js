import dbHelper from '../../utils/page_query'

class Sql {

    /**
     * 构建函数
     * @param   {Object}    module  数据模型
     * */
    constructor (module) {
        this.module = module;
    }

    /**
     * 添加数据
     * @param   {Object}    params  参数
     * */
    async create (params) {
        return new Promise((resolve, reject) => {
            this.module.create(params, (err, doc) => {
                err ? reject({code: '0001', msg: err}) : resolve({code: '0000', data: doc});
            })
        });
    }

    /**
     * 查找数据
     * @param   {Object}    params  参数
     * */
    async find (params) {
        return new Promise((resolve, reject) => {
            this.module.find(params, (err, doc) => {
                err ? reject({code: '0001', msg: err}) : resolve({code: '0000', data: doc});
            })
        });
    }

    /**
     * 删除数据
     * @param   {Object}    params  参数
     * */
    async remove (params) {
        return new Promise((resolve, reject) => {
            this.module.remove(params, (err, doc) => {
                err ? reject({code: '0001', msg: err}) : resolve({code: '0000', data: doc});
            })
        });
    }

    /**
     * 更新数据
     * @param   {Object}    old_params  被修改对象参数
     * @param   {Object}    new_params  修改对象参数
     * */
    async update (old_params, new_params) {
        return new Promise((resolve, reject) => {
            this.module.update(old_params, new_params, (err, doc) => {
                err ? reject({code: '0001', msg: err}) : resolve({code: '0000', data: doc});
            })
        });
    }

    /**
     * 删除多个分组
     * @param   {String}    key
     * @param   {Array}     arr
     * */
    async removes (key, arr) {
        return new Promise((resolve, reject) => {
            let params = {};
            params[key] = { $in: arr };
            this.module.remove(params, (err, doc) => {
                err ? reject({code: '0001', msg: err}) : resolve({code: '0000', data: doc});
            })
        });
    }

    /**
     * 分页列表
     * @param   {Number,String}     page_index    第几页
     * @param   {Number,String}     page_size     一页多少数据
     * @param   {Object}            new_params    需要返回哪些参数字段
     * @param   {Object}            query_params  模糊查询过滤
     * @param   {Object}            sort_params   排序
     * */
    async paging (page_index, page_size, new_params, query_params, sort_params) {
        return new Promise((resolve, reject) => {
            dbHelper.pageQuery(page_index, page_size, this.module, new_params, '', query_params, sort_params, (err, $page) => {
                err ? reject({code: '0001', msg: err}) : resolve({code: '0000', data: {
                    arr: $page.results,
                    total: $page.total,
                    count: Math.ceil($page.pageCount)
                }});
            });
        });
    }

}

export default Sql;