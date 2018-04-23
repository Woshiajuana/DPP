import request  from 'request'
import fs       from 'fs'
let num = 0;
request('http://dyc-api.91dbq.com/api/tree?appid=XinJiFuBao&platform=ios&version=0.0.0&engine=0.0.1', (error, response, body) => {
    const tree = JSON.parse(body);
    for( let key in tree.resource){
        let url  = `${tree.base}/${tree.resource[key].src}`;
        let name = url.substring(url.lastIndexOf('/') + 1);
        downloadFile(url, name, () => {
            num++;
            console.log(name+'下载完毕,' + num + '条');
        })
    }
});

function downloadFile(url,filename,callback){
    const stream = fs.createWriteStream('./SC/' + filename);
    request(url).pipe(stream).on('close', callback);
}