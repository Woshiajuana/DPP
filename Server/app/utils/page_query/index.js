/**
 * Created by Administrator on 2017/4/25.
 */

import async from 'async'

const pageQuery = (page, pageSize, Model, projection, populate, queryParams, sortParams, callback) => {
    let start = (page - 1) * pageSize;
    let $page = { pageNumber: page };
    async.parallel({
        count: (done) => {  // 查询数量
            Model.count(queryParams).exec((err, count) => {
                done(err, count);
            });
        },
        records: (done) => {   // 查询一页的记录
            Model.find(queryParams, projection).skip(start).limit(pageSize).populate(populate).sort(sortParams).exec((err, doc) => {
                done(err, doc);
            });
        }
    }, (err, results) => {
        let count = results.count;
        $page.total = count;
        $page.pageCount = (count - 1) / pageSize + 1;
        $page.results = results.records;
        $page.results.forEach((item, index) => {
            item.article_con && (item.article_con = '') && delete item.article_con;
        });
        callback(err, $page);
    });
};

export default {
    pageQuery: pageQuery
}