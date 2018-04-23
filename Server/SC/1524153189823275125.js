// { "framework": "Vue" }

!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=261)}({0:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(15),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default},1:function(t,e,r){"use strict";Promise.prototype.handle=function(){var t=["0000","0001","0002","0003","0004","1001"],e={"0000":"成功","0001":"网络错误","0002":"下载失败","0003":"文件删除失败","0004":"文件存储失败",1001:"扫描超时","01":"缺少必填参数","02":"参数格式不正确","03":"找不到对应的值","04":"未知错误","05":"返回数据为空或解析错误"};return this.catch(function(r){if(-1!=Object.prototype.toString.call(r).indexOf("Error"))throw r.message;if(r&&r.code){var o=r.code;throw o=-1!=t.indexOf(o)?o:o.substr(2),e[o]||r.data||e["04"]}throw r})},Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(r){return e.resolve(t()).then(function(){return r})},function(r){return e.resolve(t()).then(function(){throw r})})}},10:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("jfLoadingModule");e.default={show:function(){o.show()},hide:function(){o.dismiss()}}},11:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(1);var o=r(14),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default},110:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),i=o(n),u=r(16),a=o(u),l=r(4),s=o(l),f=r(11),c=o(f),d=r(53),m=o(d);e.default={components:{ddPage:r(50),textTextImg:r(70)},data:function(){return{revenue:"",money:"0.00",amount:"0.00",fee:"0.00",payTime:"",status:"",data:""}},methods:{getDetile:function(t){var e=this;i.default.getToken().then(function(r){var o={pageIndex:1,pageSize:25,orderId:t,bizType:"TRANSFLOW_DETAIL"},n={method:"POST",body:o,https:!0,loading:!0};(0,a.default)("GetJFPayTrasactionInfo.Req",n).then(function(t){if("0000"!=t.respCode)return s.default.toast({message:t.respDesc});e.data=t.data,e.amount=m.default.tofixed(t.data.bizAmount),e.fee=m.default.tofixed(t.data.fee),e.money=m.default.tofixed(parseFloat(t.data.bizAmount)-parseFloat(t.data.fee)),e.payTime=t.data.localDate.replace(/(\d{4})(\d{2})(\d{2})/g,"$1-$2-$3")+" "+t.data.localTime.replace(/(\d{2})(\d{2})(\d{2})/g,"$1:$2"),e.status=t.data.payTag}).catch(function(t){})})}},mounted:function(){var t=c.default.getParmas(this).orderId;this.status=c.default.getParmas(this).status,this.getDetile(t)}}},12:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(20),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default},13:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(19),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default},14:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(7),i=o(n),u=r(10),a=o(u),l=r(8),s=o(l),f=r(9),c=o(f),d=r(0),m=o(d),h=weex.requireModule("navigator"),p=weex.requireModule("pageManagerModule"),g=weex.requireModule("externalAppModule"),_=new c.default(1e3);e.default={push:function(t,e){if(!_.do(t+JSON.stringify(e)))return null;a.default.show();var r=m.default.isObject(t)?t.url:t,o=m.default.isObject(t)?t.animated:"true",n=m.default.isObject(t)?t.close:"";i.default.page(r).then(function(t){t=e?t+"?parmas="+encodeURIComponent(JSON.stringify(e)):t,h.push({url:t,animated:o,close:n},function(t){})}).catch(function(t){s.default.toast({message:t})}).finally(function(){a.default.hide()})},pop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"true";h.pop({animated:t},function(t){})},root:function(){p.popToRootPage(function(t){})},getParmas:function(t){var e=t.$getConfig().bundleUrl,r=e.indexOf("?parmas=")>-1?e.substr(e.indexOf("?parmas=")+8):"";return r?JSON.parse(decodeURIComponent(decodeURIComponent(r))):""},back:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";p.popWithParam({popBack:t+"",popFront:e+""},function(t){})},del:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";p.deletePageWithParam({popBack:t+"",popFront:e+""},function(t){})},external:function(t){g.open(t)}}},15:function(t,e,r){"use strict";function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t};e.default={fill:function(t){return i(t)},keys:function(t){return u(t)},keyBy:function(t,e){return f(t,e)},catKeys:function(t,e){return c(t,e)},catArrayKey:function(t,e){return d(t,e)},defaults:function(t,e){return m(t,e)},isEmpty:function(t){return a(t)},getType:function(t){return l(t)},checkType:function(t,e){return s(t,e)},isString:function(t){return s(t,"string")},isBoolean:function(t){return s(t,"boolean")},isArray:function(t){return s(t,"array")},isNumber:function(t){return s(t,"number")},isFunction:function(t){return s(t,"function")},isObject:function(t){return s(t,"object")},isError:function(t){return s(t,"error")}};var i=function(t){return Array.apply(null,Array(t))},u=function(t){var e=[];if("object"===l(t)&&!a(t))for(var r in t)e.push(r);return e},a=function(t){if(s(t,"string")||s(t,"array"))return 0===t.length;if(s(t,"object"))for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0},l=function(t){return Object.prototype.toString.call(t).toLowerCase().match(/\s\w+/)[0].trim()},s=function(t,e){return l(t)===e.toLowerCase()},f=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(s(t,"array"))return t.forEach(function(t){r=n({},r,o({},t[e],t))}),r},c=function(t,e){var r={};return s(t,"object")&&s(e,"array")&&e.forEach(function(e){r[e]=t[e]}),r},d=function(t,e){var r=[];return s(t,"array")&&s(e,"string")&&t.forEach(function(t){t[e]&&-1==r.indexOf(t[e])&&r.push(t[e])}),r},m=function(t,e){return c(t,u(e))}},16:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){e=e||{},this.method=e.method||"GET",this.body=e.body||{},this.type=e.type||!1;var r={appUser:"ds_mpos",signkey:"36f9c59d46ad450f84c47f81e10b429c"};return this.body=Object.assign(this.body,r),this.headers=e.headers||{},this.api=t,this.https=e.https||!1,this["_gw"==this.https?"_gw":this.https?"_https":"_fetch"]()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return e.loading&&d.default.show(),new n(t,e).finally(function(){e.loading&&d.default.hide()})};var i=r(2),u=o(i),a=r(3),l=o(a),s=r(17),f=o(s),c=r(18),d=o(c),m=r(13),h=o(m),p=r(4),g=o(p),_=weex.requireModule("stream"),y=weex.requireModule("jfHttpsModule");n.prototype._gw=function(){var t=this;return new Promise(function(e,r){l.default.getToken().then(function(o){var n=t.method.toLocaleUpperCase(),i={headers:{"Content-Type":"application/json"},method:n,url:u.default.GW_API_URL+t.api,type:"json",timeout:6e4,body:JSON.stringify(t.body)};console.log("请求的地址：",u.default.GW_API_URL+t.api),console.log("请求的总参数：",i),console.log("请求的参数：",t.body),_.fetch(i,function(t){console.log("后台返回的总数据：",t),t.data?e(t.data):r("获取sign失败")})}).catch(function(){h.default.show("login")})})},n.prototype._https=function(){var t=this,e=this,r=this.method.toLocaleLowerCase(),o=u.default.API_URL+this.api;return this.body.mobileNo=this.body.mobileNo||"",this.body.token=this.body.token||"",this.body.version="3.7.4",console.log(e.api+"_接口URL地址：",o),new Promise(function(n,i){l.default.getToken().then(function(r){t.body.mobileNo||(console.log(e.api+"_请求的用户手机号码：",r.mobileNo),t.body.mobileNo=r.encryptMobileNo),t.body.token=r.token}).finally(function(){console.log(e.api+"_接口URL参数：",t.body),y[r](o,t.body,function(t){if(console.log(e.api+"_接口返回的数据：",t),"0000"!==t.code)return i("请求失败");try{"PE15"===t.data.respCode?(i(t.data.respDesc),l.default.logout().finally(function(){return h.default.show("jfb_login")})):n(t.data)}catch(t){i(t)}})})})},n.prototype._fetch=function(){var t=this;return l.default.getToken().then(function(e){return t.body.token=e.token,t.body.version="3.7.4",t.body.mobileNo||(t.body.mobileNo=e.encryptMobileNo),console.log("request.js-1——用户信息：",e),f.default.getUUID(e.mobileNo)}).then(function(e){return t.body.uuid=e,delete t.body.appUser,t.body.app_user="ds_mpos",console.log("request.js-2——UUID：",e),console.log("request.js-3——加密前的参数：",t.body),f.default.md5({req:JSON.stringify(t.body)})}).then(function(e){console.log("request.js-4——MD5：",e);var r=t.method.toLocaleUpperCase(),o=t.type?u.default.API_STORE+t.api:u.default.API_NEXTPAY+t.api;console.log("request.js-5——请求URL：",o);var n={headers:{"Content-Type":"application/x-www-form-urlencoded"},method:r,url:o,type:"text",timeout:6e4};return"GET"==r?n.url=n.url+"?req="+e.req+"&sign="+e.sign+"&ts="+e.ts:"POST"==r&&(n.body="req="+e.req+"&sign="+e.sign+"&ts="+e.ts),new Promise(function(t,e){console.log("request.js-6——发起请求："),console.log("request.js-7——请求参数：",n),_.fetch(n,function(r){if(console.log("request.js-8——请求返回结果：",r),console.log("request.js-8——请求解析结果：",decodeURIComponent(r.data)),200!==r.status)return g.default.toast({message:"服务器异常，请稍后再试"}),e();try{var o=decodeURIComponent(r.data),n=o.indexOf("{"),i=o.lastIndexOf("}");o=o.substr(n,i-n+1);var u=JSON.parse(o);"0001"===u.code||"0002"===u.code?(e(u.msg),l.default.logout().finally(function(){return h.default.show("jfb_login")})):t(u)}catch(t){e(t)}})})})}},17:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t){if("object"===g.default.getType(t))return t;try{return JSON.parse(t)}catch(t){return{}}}function i(t){var e=t;try{e=-1!==t.indexOf("jfzf")?e.replace(/jfzf/g,"h5pay.html?ur=jfzf"):e.replace(/weixin/g,"h5pay.html?ur=weixin")}catch(t){}return e}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},a=r(27),l=o(a),s=r(3),f=o(s),c=r(2),d=o(c),m=r(4),h=o(m),p=r(0),g=o(p),_=weex.requireModule("jfServiceModule"),y=weex.requireModule("openPayModule");e.default={md5:function(t){return new Promise(function(e,r){_.md5(t,function(t){"0000"===t.code?e(t.data):r(t)})}).handle()},getUUID:function(t){return new Promise(function(e,r){_.getUUID(t,function(t){"0000"===t.code?e(t.data):r(t)})}).handle()},getParameter:function(){return new Promise(function(t,e){_.getParameter(function(r){"0000"===r.code?t(r.data):e(r)})}).handle()},pay:function(t){return new Promise(function(e,r){l.default.get().then(function(o){t.orgCode||(t.orgCode=d.default.ORG_CODE,t.orgId=d.default.ORG_CODE);var a=u({amount:"",merchantOrderId:"",goodsDesc:"",merchantCode:"123456",merchantName:"",merchantMessage:"",mobileNo:"",fromMobileNo:"",city:o.province+"|"+o.city+"|"+o.subLocality,payType:"0,1,2",latitude:o.latitude,longitude:o.longitude,reOrPayFlag:"0"},t);console.log("调用支付参数",a),b().then(function(){y.pay(a,function(t){if("0000"!==t.code)return r(t);var o=n(t.data);if("0001"===o.code)return r({code:"ds_system",msg:"网络异常"});if("0002"===o.code)return r({code:"ds_system",msg:"交易取消"});var u=n(o.result),a=n(u.mate),l=n(u.result);if("0000"!==a.code)return r(a);var s="";"0"==o.type&&(s=i(l.codeImgUrl)),e({type:o.type,msg:a.msg,link:s})})})}).catch(function(t){r({msg:t,code:"LOCATION"})})})},pay1:function(t){return l.default.get().then(function(e){return new Promise(function(r,o){t.orgCode||(t.orgCode=d.default.ORG_CODE,t.orgId=d.default.ORG_CODE);var a=u({amount:"",merchantOrderId:"",goodsDesc:"",merchantCode:"",fromMerchantCode:"",merchantName:"",merchantMessage:"",mobileNo:"",fromMobileNo:"",city:e.province+"|"+e.city+"|"+e.subLocality,payType:"0,1,2",latitude:e.latitude,longitude:e.longitude,reOrPayFlag:"0"},t);console.log("调用支付参数",a),b().then(function(){y.pay(a,function(t){if("0000"!==t.code)return o(t);var e=n(t.data);if("0001"===e.code)return o({code:"ds_system",msg:"网络异常"});if("0002"===e.code)return o({code:"ds_system",msg:"交易取消"});var u=n(e.result),a=n(u.mate),l=n(u.result);if("0000"!==a.code)return o(a);var s="";"0"==e.type&&(s=i(l.codeImgUrl)),r({type:e.type,msg:a.msg,link:s})})})})}).catch(function(t){return h.default.alert({message:t+"",okTitle:"知道了"})})},query:function(){return new Promise(function(t,e){f.default.getToken().then(function(r){b().then(function(){y.queryBalance({mobileNo:r.encryptMobileNo,merchantCode:r.payCustomerId,orgCode:d.default.ORG_CODE,orgId:d.default.ORG_CODE},function(r){if("0000"!==r.code)return e(r);var o=n(r.data);if("0001"===o.code)return e({code:"ds_system",msg:"网络异常"});var i=n(o.result),u=n(i.mate),a=n(i.result),l=n(a.message);if("0000"!==u.code)return e(u);t(l)})}).catch(function(t){e("环境设置失败！")})}).catch(function(t){e()})}).handle()},encryptPassword:function(t,e){return new Promise(function(r,o){_.encryptPwd(t,e,function(t){"0000"===t.code?r(t.data):o(t)})}).handle()},drawMoney:function(t){return new Promise(function(e,r){f.default.getToken().then(function(o){b().then(function(){y.drawMoney({mobileNo:o.encryptMobileNo,merchantCode:o.payCustomerId,amount:t,secondToFlag:"T0",orgCode:d.default.ORG_CODE,orgId:d.default.ORG_CODE},function(t){if(console.log(t),"0000"!=t.code)return r(t);if("0001"===t.data.code)return r({code:"ds_system",msg:"网络异常"});var o=t.data.result.mate;if("0000"!==o.code)return r(o.msg);e(o)})}).catch(function(t){r("环境设置失败！")})}).catch(function(t){r()})}).handle()}};var v=!1,b=function(){return new Promise(function(t,e){if(v)return t();y.setOpenPayUrl(d.default.OPEN_PAY,d.default.OPEN_PAY_UPLOAD,function(r){if("0000"!=r.code)return e();v=!0,t()})})}},177:function(t,e){t.exports={"line-o":{borderColor:"#cccccc",backgroundColor:"#FFFFFF",borderBottomWidth:1,borderBottomStyle:"solid"}}},18:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(1);var o=r(10),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default},19:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(7),i=o(n),u=r(9),a=o(u),l=weex.requireModule("transitionModule"),s=new a.default(1e3);e.default={show:function(t){return new Promise(function(e,r){if(!s.do(t))return null;i.default.page(t).then(function(t){l.present({url:t,animated:"true"},function(t){e()})})}).handle()},close:function(){return new Promise(function(t,e){l.dismiss({},function(e){t()})}).handle()}}},2:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={GW_API_URL:"http://gw.finumi.com/open-misc/",API_URL:"https://appdl.91dbq.com/jfpay_prepo_new/",API_NEXTPAY:"http://210.22.146.219:3489/nextpay_shop/v1/",API_STORE:"http://newfd.91dbq.com/nextpay_shop/v1/",OPEN_PAY:"https://openpays.91dbq.com/",OPEN_PAY_UPLOAD:"http://openpay-file.91dbq.com:9527/",ORG_CODE:"170330165348",MACHINES_TOOL_ORG_CODE:"170904134355",MACHINES_TOOL_MERCHANT_CODE:"8508120858515018",SOURCE:"http://appimg.91dbq.com/img/jfb/image/0.0.2/"}},20:function(t,e,r){"use strict";function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},i=weex.requireModule("storage"),u=function(t,e,r){return new Promise(function(o,n){if("string"!=p(t))return n("key must be string");i.setItem(t,m(e,r),function(t){"success"===t.result?o():n("set store error")})})},a=function(t){return new Promise(function(e,r){if("string"!=p(t))return r("key must be string");i.getItem(t,function(o){"success"===o.result?e(h(o.data)):r(t+" is undefined")})})},l=function(t){return new Promise(function(e,r){if("string"!=p(t))return r("key must be string");i.getAllKeys(function(o){-1!=o.data.indexOf(t)?e():r(t+" is undefined")})})},s=function(t){return new Promise(function(e,r){if("string"!=p(t))return r("key must be string");i.removeItem(t,function(o){if("success"===o.result)return e();l(t).then(function(){return r("remove store error")}).catch(function(){return e()})})})},f=function(){return new Promise(function(t,e){i.getAllKeys(function(r){"success"===r.result?t(r.data):e(r)})})},c=function(){return f().then(function(t){var e=[];return t.forEach(function(t){return e.push(a(t).then(function(e){return o({},t,e)}))}),Promise.all(e).then(function(t){var e={};return t.forEach(function(t){e=n({},e,t)}),e})})},d=function(){return f().then(function(t){var e=[];return t.forEach(function(t){return e.push(s(t))}),Promise.all(e)})};e.default={set:u,get:a,has:l,remove:s,getAllKeys:f,getAll:c,clear:d};var m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return JSON.stringify({_name_:"store",type:p(t),effect:e,lastaccess:(new Date).getTime(),storage:t})},h=function(t){try{var e=JSON.parse(t);return"store"===e._name_?e.storage:e}catch(e){return t}},p=function(t){return Object.prototype.toString.call(t).toLowerCase().match(/\s\w+/)[0].trim()}},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dd-page",{attrs:{title:"交易详情"}},[r("scroller",[r("div",{staticClass:["line-o"]}),r("text-text-img",{attrs:{name:"立即提款",value:t.revenue,rightImgGo:!1,borderBottomColor:"#fff",rightTxtColor:"#979797",leftTxtColor:"#979797"}}),r("text-text-img",{attrs:{name:t.money,value:t.status,itemHeight:"120",rightImgGo:!1,rightTxtColor:"#979797",borderBottomColor:"#fff",leftFontSize:"80",leftTxtColor:"#000"}}),r("text-text-img",{attrs:{name:"支付账户",value:t.data.account,itemHeight:"70",rightImgGo:!1,rightTxtColor:"#979797",leftTxtColor:"#979797",borderBottomColor:"#fff"}}),r("text-text-img",{attrs:{name:"结算卡号",value:t.data.settleAccount,itemHeight:"70",rightImgGo:!1,rightTxtColor:"#979797",leftTxtColor:"#979797",borderBottomColor:"#fff"}}),r("text-text-img",{attrs:{name:"交易金额",value:t.amount,itemHeight:"70",rightImgGo:!1,rightTxtColor:"#979797",leftTxtColor:"#979797",borderBottomColor:"#fff"}}),r("text-text-img",{attrs:{name:"手续费",value:t.fee,itemHeight:"70",rightImgGo:!1,rightTxtColor:"#979797",leftTxtColor:"#979797",borderBottomColor:"#fff"}}),r("text-text-img",{attrs:{name:"交易时间",value:t.payTime,itemHeight:"70",rightImgGo:!1,rightTxtColor:"#979797",leftTxtColor:"#979797",borderBottomColor:"#fff"}}),r("text-text-img",{attrs:{name:"订单号",value:t.data.payOrderId,itemHeight:"70",rightImgGo:!1,rightTxtColor:"#979797",leftTxtColor:"#979797",borderBottomColor:"#fff"}})],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0},261:function(t,e,r){var o,n,i=[];i.push(r(177)),o=r(110);var u=r(216);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="F:\\workproject\\jfb_web\\src\\modules\\jfb\\cashdetail.vue",n.render=u.render,n.staticRenderFns=u.staticRenderFns,n._scopeId="data-v-b8587f34",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)},27:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(1);var o=r(28),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default},28:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("jfLocationModule");e.default={get:function(){return new Promise(function(t,e){o.getLocation(function(r){"0000"===r.code?t(r.data):e(r)})}).handle()}}},3:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0});var i=r(12),u=o(i),a=r(0),l=o(a),s={realName:"",mobileNo:"",encryptMobileNo:"",userType:"",certPid:"",certType:"",token:"",authenFlag:"",email:"",customerId:"",payCustomerId:"",status:"",collection_or_payment:!1,authScanRecognizeTimeoutCount:""};e.default={login:function(t){return u.default.set("DD_AUTH_STORE_DATA",l.default.defaults(t,s)).catch(function(t){throw"登录失败"})},update:function(t){return l.default.isObject(t)?u.default.get("DD_AUTH_STORE_DATA").then(function(e){return e=l.default.isObject(e)?e:{},e=Object.assign(e,t),u.default.set("DD_AUTH_STORE_DATA",e)}):Promise.reject("update input must be object")},getToken:function(){return u.default.get("DD_AUTH_STORE_DATA").catch(function(t){throw"用户未登录"})},cache:{set:function(t,e){return l.default.isString(t)?l.default.isEmpty(t)?Promise.reject("cache must has value"):u.default.get("DD_AUTH_CACHE_STORE_DATA").then(function(r){return r=l.default.isObject(r)?r:{},r[t]=e,u.default.set("DD_AUTH_CACHE_STORE_DATA",r)}).catch(function(r){return u.default.set("DD_AUTH_CACHE_STORE_DATA",n({},t,e))}):Promise.reject("cache must has key")},get:function(t){return l.default.isString(t)?u.default.get("DD_AUTH_CACHE_STORE_DATA").then(function(e){return l.default.isObject(e)&&e[t]?Promise.resolve(e[t]):Promise.reject("cache don't has"+t)}):Promise.reject("cache must has key")}},logout:function(){return Promise.all([u.default.remove("DD_AUTH_STORE_DATA"),u.default.remove("DD_AUTH_CACHE_STORE_DATA"),u.default.remove("pay_history")]).catch(function(t){throw"缓存清除失败"})}}},4:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(1);var o=r(8),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default},40:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"},type:{default:"default"},borderWith:{default:"1"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick")},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick")}}}},41:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{ddNavbar:r(48)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"},type:{default:"default"},borderWith:{default:"1"}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},42:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(11),i=o(n),u=r(51),a=o(u),l=r(6),s=o(l);e.default={props:{backgroundColor:{default:"#ffffff"},title:{default:""},titleColor:{default:"#000"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"#000"},leftItemSrc:{default:(0,s.default)("jfb_return_icon.png?v=1")},leftItemTitle:{default:""},leftItemColor:{default:"#000"},borderWith:{default:"1"},type:{default:"default"}},computed:{_leftItemSrc:function(){return"clear"===this.type?"":this.leftItemSrc}},data:function(){return{navBarHeight:0}},components:{ddNavpage:r(49)},created:function(){var t=this.$getConfig().env;if("iOS"===t.platform){var e=t.scale,r=t.deviceWidth/e;this.navBarHeight=48e3/r,this.navBarHeight<149&&(this.navBarHeight=160)}else this.navBarHeight=88,a.default.color("#000000")},methods:{naviBarLeftItemClick:function(t){return"avatar"===this.type||"emit"===this.type?this.$emit("leftItemClick",t):this.leftItemSrc?i.default.pop():void 0},naviBarRightItemClick:function(t){this.$emit("rightItemClick",t)}}}},43:function(t,e){t.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750,borderBottomColor:"#e5e5e5"},"right-item":{position:"absolute",bottom:0,right:0,width:108,height:88},"left-item":{position:"absolute",bottom:0,left:0,width:108,height:88},"right-text":{position:"absolute",top:28,right:32,textAlign:"right",fontSize:30,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",top:28,left:32,textAlign:"center",fontSize:30,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:26,left:172,right:172,textAlign:"center",fontSize:34,fontFamily:"'Open Sans', sans-serif"},"left-image":{position:"absolute",bottom:20,left:28,width:48,height:48},"right-image":{position:"absolute",bottom:20,right:28,width:48,height:48},avatar:{width:60,height:60,bottom:15,borderRadius:30}}},44:function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750,backgroundColor:"#F5F5F9"}}},45:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor,borderBottomWidth:t.borderWith},attrs:{dataRole:t.dataRole}},[r("div",{staticClass:["right-item"],attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t.rightItemSrc?t._e():r("text",{staticClass:["right-text"],style:{color:t.rightItemColor}},[t._v(t._s(t.rightItemTitle)+"\n    ")]),t.rightItemSrc?r("image",{staticClass:["right-image"],attrs:{src:t.rightItemSrc,resize:"cover"}}):t._e()]),r("div",{staticClass:["left-item"],attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t.leftItemSrc?t._e():r("text",{staticClass:["left-text"],style:{color:t.leftItemColor}},[t._v(t._s(t.leftItemTitle)+"\n    ")]),t.leftItemSrc?r("image",{class:["left-image",t.type],attrs:{src:t.leftItemSrc,resize:"cover"}}):t._e()]),r("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},46:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("dd-navpage",{attrs:{dataRole:"none",height:t.navBarHeight,title:t.title,backgroundColor:t.backgroundColor,titleColor:t.titleColor,leftItemSrc:t._leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor,borderWith:t.borderWith,type:t.type},on:{naviBarLeftItemClick:t.naviBarLeftItemClick,naviBarRightItemClick:t.naviBarRightItemClick}},[t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},47:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["wrapper"]},[r("dd-navbar",{attrs:{dataRole:t.dataRole,height:t.height,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor,borderWith:t.borderWith,type:t.type},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),r("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},48:function(t,e,r){var o,n,i=[];i.push(r(43)),o=r(40);var u=r(45);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="F:\\workproject\\jfb_web\\src\\dd-components\\vue\\dd-navbar.vue",n.render=u.render,n.staticRenderFns=u.staticRenderFns,n._scopeId="data-v-0b999732",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=o},49:function(t,e,r){var o,n,i=[];i.push(r(44)),o=r(41);var u=r(47);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="F:\\workproject\\jfb_web\\src\\dd-components\\vue\\dd-navpage.vue",n.render=u.render,n.staticRenderFns=u.staticRenderFns,n._scopeId="data-v-2ab6542a",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=o},5:function(t,e,r){"use strict";function o(t){this.timer="",this.deferred="",this.duration=t||2e3}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,o.prototype.do=function(t){var e=this;if(this.deferred!=t)return this.deferred=t,clearTimeout(this.timer),this.timer=setTimeout(function(){e.deferred=""},this.duration),!0}},50:function(t,e,r){var o,n,i=[];o=r(42);var u=r(46);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="F:\\workproject\\jfb_web\\src\\dd-components\\vue\\dd-page.vue",n.render=u.render,n.staticRenderFns=u.staticRenderFns,n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=o},51:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(52),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default},52:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("statusBarModule");e.default={color:function(t){return o.setStatusbarColor(t)},style:function(t){return o.setStatusbarStyle(t)}}},53:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={tofixed:function(t){return((parseFloat(t)||0)/100).toFixed(2)},formateMoney:function(t){var e=parseFloat(t);if(e){t=(e/100).toFixed(2)+"";var r=t.split(".")[0].split("").reverse(),o=t.split(".")[1],n="";return r.forEach(function(t,e){n+=r[e]+((e+1)%3==0&&e+1!=r.length?",":"")}),n.split("").reverse().join("")+"."+o}return 0==t?"0.00":"---"},todate:function(t){if(t){return t.substr(0,4)+"-"+t.substr(4,2)+"-"+t.substr(6,2)}return"---"},dateformat:function(t){if(t){return t.substr(0,4)+"年"+t.substr(4,2)+"月"+t.substr(6,2)+"日"}return"年 月 日"},dayFormat:function(t){if(t){return t.substr(6,2)+"号"}return" 号"},nameFormatStar:function(t){if(t){return t.replace(/.(?=.)/g,"*")}},cardFormatStar:function(t){if(t){return t.replace(/(\d{0})\d+(\d{4})/,"$1 **** **** **** $2")}},cardFormatStar2:function(t){if(t){return t.replace(/(\d{4})\d+(\d{4})/,"$1 **** **** $2")}},bankcardformat:function(t){if(t){return t.substr(0,4)+" "+t.substr(4,4)+" "+t.substr(8,4)+" "+t.substr(12,4)+" "+t.substr(16,4)}return""},bankcardLastNum:function(t){if(t){return t.substr(t.length-4)}return""},hidephone:function(t){return t?t.substr(0,4)+"****"+t.substr(7,4):"---"},phoneFouth:function(t){if(t){return t.substring(0,3)+"****"+t.substring(8,11)}return""},removeSpaces:function(t){return t.replace(/\s+/g,"")},date:function(t,e){var r=e||new Date,o={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in o)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?o[n]:("00"+o[n]).substr((""+o[n]).length)));return t},getDateStr:function(t){var e=new Date;return e.setDate(e.getDate()+t),e.getFullYear()+"."+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"."+(e.getDate()<10?"0"+e.getDate():e.getDate())}}},6:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(2),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t){return n.default.SOURCE+t}},64:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(6),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={props:{marginTop:{default:0},itemHeight:{default:100},itemShow:{default:!0},name:{default:""},leftFontSize:{default:30},leftTxtColor:{default:"#4a4a4a"},value:{default:""},rightFontSize:{default:30},rightTxtColor:{default:"#4a4a4a"},rightImgGo:{default:!0},borderBottomColor:{default:"#e5e5e5"}},methods:{onclickitem:function(t){this.$emit("onItemClick")}},computed:{right_img:function(){return(0,n.default)("tkzh_3.png")}}}},66:function(t,e){t.exports={item:{justifyContent:"flex-start",flexDirection:"row",alignItems:"center",backgroundColor:"#FFFFFF",borderBottomWidth:1,borderBottomStyle:"solid","backgroundColor:active":"#f2f2f2"},"item-right":{position:"absolute",right:30,justifyContent:"center",flexDirection:"row",alignItems:"center"},txt:{marginLeft:30},"txt-low":{color:"#4a4a4a"},"arrow-right":{width:40,height:40,marginLeft:5}}},68:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.itemShow?r("div",{staticClass:["item"],style:{height:t.itemHeight,borderBottomColor:t.borderBottomColor,marginTop:t.marginTop},on:{click:t.onclickitem}},[r("text",{staticClass:["txt"],style:{fontSize:t.leftFontSize,color:t.leftTxtColor}},[t._v(t._s(t.name))]),r("div",{staticClass:["item-right"],style:{height:t.itemHeight}},[r("text",{staticClass:["txt-low"],style:{fontSize:t.rightFontSize,color:t.rightTxtColor}},[t._v(t._s(t.value))]),t.rightImgGo?r("image",{staticClass:["arrow-right"],attrs:{src:t.right_img}}):t._e()])]):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0},7:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),n=function(t){return t&&t.__esModule?t:{default:t}}(o),i=weex.requireModule("loadResurceModule");e.default={page:function(t){if(n.default.isString(t))return u(t).handle();if(n.default.isArray(t)){var e=[];return t.forEach(function(t){return e.push(u(t))}),Promise.all(e).handle()}},source:function(t){return new Promise(function(e,r){i.getUrlPath(t,function(t){"0000"===t.code?e(t.data):r(t)})}).handle()}};var u=function(t){return new Promise(function(e,r){var o=t.substr(t.lastIndexOf("/")+1).split(".")[0];i.getRoutePath(o,function(t){"0000"===t.code?e(t.data):r(t)})})}},70:function(t,e,r){var o,n,i=[];i.push(r(66)),o=r(64);var u=r(68);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="F:\\workproject\\jfb_web\\src\\modules\\jfb\\components\\text-text-img.vue",n.render=u.render,n.staticRenderFns=u.staticRenderFns,n._scopeId="data-v-7b682e9f",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=o},8:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),i=o(n),u=r(0),a=o(u),l=weex.requireModule("modal"),s=new i.default(2e3);e.default={toast:function(t){return s.do(t.message)?a.default.isEmpty(t.message)?null:(t.duration=t.duration||2,void l.toast(t)):null},alert:function(t,e){l.alert(t,e)},confirm:function(t,e){l.confirm(t,e)},prompt:function(t,e){l.prompt(t,e)}}},9:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(5),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default}});