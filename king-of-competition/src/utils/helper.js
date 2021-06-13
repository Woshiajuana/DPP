
export default {
    formatDate: (fmt = 'yyyy-MM-dd hh:mm:ss', time = new Date()) => {
        var o = {
            "M+" : time.getMonth()+1,
            "d+" : time.getDate(),
            "h+" : time.getHours(),
            "m+" : time.getMinutes(),
            "s+" : time.getSeconds(),
            "q+" : Math.floor((time.getMonth()+3)/3),
            "S"  : time.getMilliseconds()
        };
        if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (time.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
        return fmt;
    },
    loadAllImages (imgUrls) {
        const load = src => new Promise((resolve, reject) => {
            //创建img标签
            let img = new Image();
            img.src = src;
            //跨域选项
            img.setAttribute("crossOrigin", 'Anonymous');
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject('图片加载失败')
            };
        });
        return Promise.all(imgUrls.map(item => load(item)))
    }
};
