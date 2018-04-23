// { "framework": "Vue" }

!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=284)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(15),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default},1:function(e,t,r){"use strict";Promise.prototype.handle=function(){var e=["0000","0001","0002","0003","0004","1001"],t={"0000":"成功","0001":"网络错误","0002":"下载失败","0003":"文件删除失败","0004":"文件存储失败",1001:"扫描超时","01":"缺少必填参数","02":"参数格式不正确","03":"找不到对应的值","04":"未知错误","05":"返回数据为空或解析错误"};return this.catch(function(r){if(-1!=Object.prototype.toString.call(r).indexOf("Error"))throw r.message;if(r&&r.code){var n=r.code;throw n=-1!=e.indexOf(n)?n:n.substr(2),t[n]||r.data||t["04"]}throw r})},Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(r){return t.resolve(e()).then(function(){return r})},function(r){return t.resolve(e()).then(function(){throw r})})}},10:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("jfLoadingModule");t.default={show:function(){n.show()},hide:function(){n.dismiss()}}},11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1);var n=r(14),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default},12:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(20),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default},127:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(6),a=n(i),o=r(11),u=n(o),d=r(16),_=n(d),s=r(4),c=n(s),l=r(3),f=n(l),h=r(12),g=n(h),v=r(26),p=n(v);t.default={components:{WovView:p.default},data:function(){return{null_src:(0,a.default)("jfb_message_null_icon.png"),arrow_src:(0,a.default)("tkzh_3.png"),auth:"",messagelist:"",readIdList:[]}},mounted:function(){this.getReadIdList(),this.getMessages()},methods:{getReadIdList:function(){var e=this;f.default.getToken().then(function(t){e.auth=t;var r="READNOTICEID"+t.mobileNo;g.default.get(r).then(function(t){e.readIdList=t}).catch(function(t){e.readIdList=[]})})},handleRead:function(e,t){var r=this;f.default.getToken().then(function(n){if(-1!==r.readIdList.indexOf(e.noticeId))return u.default.push("jfb_messagedetail",e);var i=e.noticeId;r.messagelist[t].isRead=!0;var a="READNOTICEID"+n.mobileNo;r.readIdList.push(i),g.default.set(a,r.readIdList).then(function(){u.default.push("jfb_messagedetail",e)}).catch(function(e){c.default.toast({message:e})})})},getMessages:function(){var e=this;f.default.getToken().then(function(t){var r={noticeId:"0000"},n={method:"POST",body:r,https:!0,loading:!0};return(0,_.default)("getNoticeList.Req",n).then(function(t){if("0000"!==t.respCode)return c.default.toast({message:t.respDesc});e.messagelist=t.data||[]}).catch(function(e){c.default.toast({message:e})})}).catch(function(e){c.default.toast({message:e})})}}}},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(19),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default},14:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),a=n(i),o=r(10),u=n(o),d=r(8),_=n(d),s=r(9),c=n(s),l=r(0),f=n(l),h=weex.requireModule("navigator"),g=weex.requireModule("pageManagerModule"),v=weex.requireModule("externalAppModule"),p=new c.default(1e3);t.default={push:function(e,t){if(!p.do(e+JSON.stringify(t)))return null;u.default.show();var r=f.default.isObject(e)?e.url:e,n=f.default.isObject(e)?e.animated:"true",i=f.default.isObject(e)?e.close:"";a.default.page(r).then(function(e){e=t?e+"?parmas="+encodeURIComponent(JSON.stringify(t)):e,h.push({url:e,animated:n,close:i},function(e){})}).catch(function(e){_.default.toast({message:e})}).finally(function(){u.default.hide()})},pop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"true";h.pop({animated:e},function(e){})},root:function(){g.popToRootPage(function(e){})},getParmas:function(e){var t=e.$getConfig().bundleUrl,r=t.indexOf("?parmas=")>-1?t.substr(t.indexOf("?parmas=")+8):"";return r?JSON.parse(decodeURIComponent(decodeURIComponent(r))):""},back:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";g.popWithParam({popBack:e+"",popFront:t+""},function(e){})},del:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";g.deletePageWithParam({popBack:e+"",popFront:t+""},function(e){})},external:function(e){v.open(e)}}},15:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default={fill:function(e){return a(e)},keys:function(e){return o(e)},keyBy:function(e,t){return s(e,t)},catKeys:function(e,t){return c(e,t)},catArrayKey:function(e,t){return l(e,t)},defaults:function(e,t){return f(e,t)},isEmpty:function(e){return u(e)},getType:function(e){return d(e)},checkType:function(e,t){return _(e,t)},isString:function(e){return _(e,"string")},isBoolean:function(e){return _(e,"boolean")},isArray:function(e){return _(e,"array")},isNumber:function(e){return _(e,"number")},isFunction:function(e){return _(e,"function")},isObject:function(e){return _(e,"object")},isError:function(e){return _(e,"error")}};var a=function(e){return Array.apply(null,Array(e))},o=function(e){var t=[];if("object"===d(e)&&!u(e))for(var r in e)t.push(r);return t},u=function(e){if(_(e,"string")||_(e,"array"))return 0===e.length;if(_(e,"object"))for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0},d=function(e){return Object.prototype.toString.call(e).toLowerCase().match(/\s\w+/)[0].trim()},_=function(e,t){return d(e)===t.toLowerCase()},s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(_(e,"array"))return e.forEach(function(e){r=i({},r,n({},e[t],e))}),r},c=function(e,t){var r={};return _(e,"object")&&_(t,"array")&&t.forEach(function(t){r[t]=e[t]}),r},l=function(e,t){var r=[];return _(e,"array")&&_(t,"string")&&e.forEach(function(e){e[t]&&-1==r.indexOf(e[t])&&r.push(e[t])}),r},f=function(e,t){return c(e,o(t))}},16:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){t=t||{},this.method=t.method||"GET",this.body=t.body||{},this.type=t.type||!1;var r={appUser:"ds_mpos",signkey:"36f9c59d46ad450f84c47f81e10b429c"};return this.body=Object.assign(this.body,r),this.headers=t.headers||{},this.api=e,this.https=t.https||!1,this["_gw"==this.https?"_gw":this.https?"_https":"_fetch"]()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return t.loading&&l.default.show(),new i(e,t).finally(function(){t.loading&&l.default.hide()})};var a=r(2),o=n(a),u=r(3),d=n(u),_=r(17),s=n(_),c=r(18),l=n(c),f=r(13),h=n(f),g=r(4),v=n(g),p=weex.requireModule("stream"),m=weex.requireModule("jfHttpsModule");i.prototype._gw=function(){var e=this;return new Promise(function(t,r){d.default.getToken().then(function(n){var i=e.method.toLocaleUpperCase(),a={headers:{"Content-Type":"application/json"},method:i,url:o.default.GW_API_URL+e.api,type:"json",timeout:6e4,body:JSON.stringify(e.body)};console.log("请求的地址：",o.default.GW_API_URL+e.api),console.log("请求的总参数：",a),console.log("请求的参数：",e.body),p.fetch(a,function(e){console.log("后台返回的总数据：",e),e.data?t(e.data):r("获取sign失败")})}).catch(function(){h.default.show("login")})})},i.prototype._https=function(){var e=this,t=this,r=this.method.toLocaleLowerCase(),n=o.default.API_URL+this.api;return this.body.mobileNo=this.body.mobileNo||"",this.body.token=this.body.token||"",this.body.version="3.7.4",console.log(t.api+"_接口URL地址：",n),new Promise(function(i,a){d.default.getToken().then(function(r){e.body.mobileNo||(console.log(t.api+"_请求的用户手机号码：",r.mobileNo),e.body.mobileNo=r.encryptMobileNo),e.body.token=r.token}).finally(function(){console.log(t.api+"_接口URL参数：",e.body),m[r](n,e.body,function(e){if(console.log(t.api+"_接口返回的数据：",e),"0000"!==e.code)return a("请求失败");try{"PE15"===e.data.respCode?(a(e.data.respDesc),d.default.logout().finally(function(){return h.default.show("jfb_login")})):i(e.data)}catch(e){a(e)}})})})},i.prototype._fetch=function(){var e=this;return d.default.getToken().then(function(t){return e.body.token=t.token,e.body.version="3.7.4",e.body.mobileNo||(e.body.mobileNo=t.encryptMobileNo),console.log("request.js-1——用户信息：",t),s.default.getUUID(t.mobileNo)}).then(function(t){return e.body.uuid=t,delete e.body.appUser,e.body.app_user="ds_mpos",console.log("request.js-2——UUID：",t),console.log("request.js-3——加密前的参数：",e.body),s.default.md5({req:JSON.stringify(e.body)})}).then(function(t){console.log("request.js-4——MD5：",t);var r=e.method.toLocaleUpperCase(),n=e.type?o.default.API_STORE+e.api:o.default.API_NEXTPAY+e.api;console.log("request.js-5——请求URL：",n);var i={headers:{"Content-Type":"application/x-www-form-urlencoded"},method:r,url:n,type:"text",timeout:6e4};return"GET"==r?i.url=i.url+"?req="+t.req+"&sign="+t.sign+"&ts="+t.ts:"POST"==r&&(i.body="req="+t.req+"&sign="+t.sign+"&ts="+t.ts),new Promise(function(e,t){console.log("request.js-6——发起请求："),console.log("request.js-7——请求参数：",i),p.fetch(i,function(r){if(console.log("request.js-8——请求返回结果：",r),console.log("request.js-8——请求解析结果：",decodeURIComponent(r.data)),200!==r.status)return v.default.toast({message:"服务器异常，请稍后再试"}),t();try{var n=decodeURIComponent(r.data),i=n.indexOf("{"),a=n.lastIndexOf("}");n=n.substr(i,a-i+1);var o=JSON.parse(n);"0001"===o.code||"0002"===o.code?(t(o.msg),d.default.logout().finally(function(){return h.default.show("jfb_login")})):e(o)}catch(e){t(e)}})})})}},169:function(e,t){e.exports={scroller:{flex:1},row:{width:750,height:160,backgroundColor:"#ffffff"},panel:{"backgroundColor:active":"#f2f2f2",height:160,width:750,flexDirection:"row",alignItems:"flex-start",paddingLeft:30,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#f2f2f2"},left:{flexDirection:"column"},title:{marginTop:30,flexDirection:"row",alignItems:"center"},"time-txt":{fontSize:28,color:"#9b9b9b"},"time-txt2":{fontSize:18,color:"#b81b2b",marginBottom:4},readdiv:{marginLeft:10,marginTop:4,width:54,height:20,borderRadius:1e3,borderWidth:2,borderColor:"#b81b2b",alignItems:"center",justifyContent:"center"},"message-txt":{marginTop:20,fontSize:30,color:"#000000"},"arrow-right":{width:26,height:26,position:"absolute",top:60,right:30},"message-null":{flex:1,alignItems:"center"},"message-null-img":{width:240,height:240,marginTop:120},"message-null-txt":{marginTop:48,fontSize:26,color:"#979797"}}},17:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if("object"===v.default.getType(e))return e;try{return JSON.parse(e)}catch(e){return{}}}function a(e){var t=e;try{t=-1!==e.indexOf("jfzf")?t.replace(/jfzf/g,"h5pay.html?ur=jfzf"):t.replace(/weixin/g,"h5pay.html?ur=weixin")}catch(e){}return t}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(27),d=n(u),_=r(3),s=n(_),c=r(2),l=n(c),f=r(4),h=n(f),g=r(0),v=n(g),p=weex.requireModule("jfServiceModule"),m=weex.requireModule("openPayModule");t.default={md5:function(e){return new Promise(function(t,r){p.md5(e,function(e){"0000"===e.code?t(e.data):r(e)})}).handle()},getUUID:function(e){return new Promise(function(t,r){p.getUUID(e,function(e){"0000"===e.code?t(e.data):r(e)})}).handle()},getParameter:function(){return new Promise(function(e,t){p.getParameter(function(r){"0000"===r.code?e(r.data):t(r)})}).handle()},pay:function(e){return new Promise(function(t,r){d.default.get().then(function(n){e.orgCode||(e.orgCode=l.default.ORG_CODE,e.orgId=l.default.ORG_CODE);var u=o({amount:"",merchantOrderId:"",goodsDesc:"",merchantCode:"123456",merchantName:"",merchantMessage:"",mobileNo:"",fromMobileNo:"",city:n.province+"|"+n.city+"|"+n.subLocality,payType:"0,1,2",latitude:n.latitude,longitude:n.longitude,reOrPayFlag:"0"},e);console.log("调用支付参数",u),y().then(function(){m.pay(u,function(e){if("0000"!==e.code)return r(e);var n=i(e.data);if("0001"===n.code)return r({code:"ds_system",msg:"网络异常"});if("0002"===n.code)return r({code:"ds_system",msg:"交易取消"});var o=i(n.result),u=i(o.mate),d=i(o.result);if("0000"!==u.code)return r(u);var _="";"0"==n.type&&(_=a(d.codeImgUrl)),t({type:n.type,msg:u.msg,link:_})})})}).catch(function(e){r({msg:e,code:"LOCATION"})})})},pay1:function(e){return d.default.get().then(function(t){return new Promise(function(r,n){e.orgCode||(e.orgCode=l.default.ORG_CODE,e.orgId=l.default.ORG_CODE);var u=o({amount:"",merchantOrderId:"",goodsDesc:"",merchantCode:"",fromMerchantCode:"",merchantName:"",merchantMessage:"",mobileNo:"",fromMobileNo:"",city:t.province+"|"+t.city+"|"+t.subLocality,payType:"0,1,2",latitude:t.latitude,longitude:t.longitude,reOrPayFlag:"0"},e);console.log("调用支付参数",u),y().then(function(){m.pay(u,function(e){if("0000"!==e.code)return n(e);var t=i(e.data);if("0001"===t.code)return n({code:"ds_system",msg:"网络异常"});if("0002"===t.code)return n({code:"ds_system",msg:"交易取消"});var o=i(t.result),u=i(o.mate),d=i(o.result);if("0000"!==u.code)return n(u);var _="";"0"==t.type&&(_=a(d.codeImgUrl)),r({type:t.type,msg:u.msg,link:_})})})})}).catch(function(e){return h.default.alert({message:e+"",okTitle:"知道了"})})},query:function(){return new Promise(function(e,t){s.default.getToken().then(function(r){y().then(function(){m.queryBalance({mobileNo:r.encryptMobileNo,merchantCode:r.payCustomerId,orgCode:l.default.ORG_CODE,orgId:l.default.ORG_CODE},function(r){if("0000"!==r.code)return t(r);var n=i(r.data);if("0001"===n.code)return t({code:"ds_system",msg:"网络异常"});var a=i(n.result),o=i(a.mate),u=i(a.result),d=i(u.message);if("0000"!==o.code)return t(o);e(d)})}).catch(function(e){t("环境设置失败！")})}).catch(function(e){t()})}).handle()},encryptPassword:function(e,t){return new Promise(function(r,n){p.encryptPwd(e,t,function(e){"0000"===e.code?r(e.data):n(e)})}).handle()},drawMoney:function(e){return new Promise(function(t,r){s.default.getToken().then(function(n){y().then(function(){m.drawMoney({mobileNo:n.encryptMobileNo,merchantCode:n.payCustomerId,amount:e,secondToFlag:"T0",orgCode:l.default.ORG_CODE,orgId:l.default.ORG_CODE},function(e){if(console.log(e),"0000"!=e.code)return r(e);if("0001"===e.data.code)return r({code:"ds_system",msg:"网络异常"});var n=e.data.result.mate;if("0000"!==n.code)return r(n.msg);t(n)})}).catch(function(e){r("环境设置失败！")})}).catch(function(e){r()})}).handle()}};var w=!1,y=function(){return new Promise(function(e,t){if(w)return e();m.setOpenPayUrl(l.default.OPEN_PAY,l.default.OPEN_PAY_UPLOAD,function(r){if("0000"!=r.code)return t();w=!0,e()})})}},18:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1);var n=r(10),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default},19:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),a=n(i),o=r(9),u=n(o),d=weex.requireModule("transitionModule"),_=new u.default(1e3);t.default={show:function(e){return new Promise(function(t,r){if(!_.do(e))return null;a.default.page(e).then(function(e){d.present({url:e,animated:"true"},function(e){t()})})}).handle()},close:function(){return new Promise(function(e,t){d.dismiss({},function(t){e()})}).handle()}}},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={GW_API_URL:"http://gw.finumi.com/open-misc/",API_URL:"https://appdl.91dbq.com/jfpay_prepo_new/",API_NEXTPAY:"http://210.22.146.219:3489/nextpay_shop/v1/",API_STORE:"http://newfd.91dbq.com/nextpay_shop/v1/",OPEN_PAY:"https://openpays.91dbq.com/",OPEN_PAY_UPLOAD:"http://openpay-file.91dbq.com:9527/",ORG_CODE:"170330165348",MACHINES_TOOL_ORG_CODE:"170904134355",MACHINES_TOOL_MERCHANT_CODE:"8508120858515018",SOURCE:"http://appimg.91dbq.com/img/jfb/image/0.0.2/"}},20:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=weex.requireModule("storage"),o=function(e,t,r){return new Promise(function(n,i){if("string"!=g(e))return i("key must be string");a.setItem(e,f(t,r),function(e){"success"===e.result?n():i("set store error")})})},u=function(e){return new Promise(function(t,r){if("string"!=g(e))return r("key must be string");a.getItem(e,function(n){"success"===n.result?t(h(n.data)):r(e+" is undefined")})})},d=function(e){return new Promise(function(t,r){if("string"!=g(e))return r("key must be string");a.getAllKeys(function(n){-1!=n.data.indexOf(e)?t():r(e+" is undefined")})})},_=function(e){return new Promise(function(t,r){if("string"!=g(e))return r("key must be string");a.removeItem(e,function(n){if("success"===n.result)return t();d(e).then(function(){return r("remove store error")}).catch(function(){return t()})})})},s=function(){return new Promise(function(e,t){a.getAllKeys(function(r){"success"===r.result?e(r.data):t(r)})})},c=function(){return s().then(function(e){var t=[];return e.forEach(function(e){return t.push(u(e).then(function(t){return n({},e,t)}))}),Promise.all(t).then(function(e){var t={};return e.forEach(function(e){t=i({},t,e)}),t})})},l=function(){return s().then(function(e){var t=[];return e.forEach(function(e){return t.push(_(e))}),Promise.all(t)})};t.default={set:o,get:u,has:d,remove:_,getAllKeys:s,getAll:c,clear:l};var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return JSON.stringify({_name_:"store",type:g(e),effect:t,lastaccess:(new Date).getTime(),storage:e})},h=function(e){try{var t=JSON.parse(e);return"store"===t._name_?t.storage:t}catch(t){return e}},g=function(e){return Object.prototype.toString.call(e).toLowerCase().match(/\s\w+/)[0].trim()}},208:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("wov-view",{attrs:{view_header_center_txt:"消息中心",view_use_scroll:!1}},[0!==e.messagelist.length?r("list",{staticClass:["scroller"]},e._l(e.messagelist,function(t,n){return r("cell",{key:n,staticClass:["row"],appendAsTree:!0,attrs:{append:"tree"}},[r("div",{staticClass:["panel"],on:{click:function(r){e.handleRead(t,n)}}},[r("div",{staticClass:["left"]},[r("text",{staticClass:["message-txt"]},[e._v(e._s(t.noticeTitle))]),r("div",{staticClass:["title"]},[r("text",{staticClass:["time-txt"]},[e._v(e._s(t.noticeDate))]),-1===e.readIdList.indexOf(t.noticeId)?r("div",{staticClass:["readdiv"]},[r("text",{staticClass:["time-txt2"]},[e._v("new")])]):e._e()])]),r("image",{staticClass:["arrow-right"],attrs:{src:e.arrow_src}})])])})):e._e(),e.messagelist&&0===e.messagelist.length?r("div",{staticClass:["message-null"]},[r("image",{staticClass:["message-null-img"],attrs:{src:e.null_src}}),r("text",{staticClass:["message-null-txt"]},[e._v("没有任何消息")])]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},21:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(25),i=function(e){return e&&e.__esModule?e:{default:e}}(n),a=weex.requireModule("navigator");t.default={data:function(){return{padding_top:0}},props:{view_use_compatible:{default:!0},view_use_scroll:{default:i.default.view_use_scroll},view_header_left_src_style:{default:""},view_not_use_left_default_click:{default:i.default.view_not_use_left_default_click},view_background_color:{default:i.default.view_background_color},view_use_header:{default:i.default.view_use_header},view_header_height:{default:i.default.view_header_height},view_header_border_width:{default:i.default.view_header_border_width},view_header_border_color:{default:i.default.view_header_border_color},view_header_background_color:{default:i.default.view_header_background_color},view_header_background_image:{default:i.default.view_header_background_image},view_header_left_src:{default:i.default.view_header_left_src},view_header_left_src_size:{default:i.default.view_header_left_src_size},view_header_left_src_mar_left:{default:i.default.view_header_left_src_mar_left},view_header_left_src_mar_right:{default:i.default.view_header_left_src_mar_right},view_header_left_src_pad_left:{default:i.default.view_header_left_src_pad_left},view_header_left_src_pad_right:{default:i.default.view_header_left_src_pad_right},view_header_left_txt:{default:i.default.view_header_left_txt},view_header_left_color:{default:i.default.view_header_left_color},view_header_left_size:{default:i.default.view_header_left_size},view_header_left_txt_mar_left:{default:i.default.view_header_left_txt_mar_left},view_header_left_txt_mar_right:{default:i.default.view_header_left_txt_mar_right},view_header_center_src:{default:i.default.view_header_center_src},view_header_center_src_size:{default:i.default.view_header_center_src_size},view_header_center_src_mar_left:{default:i.default.view_header_center_src_mar_left},view_header_center_src_mar_right:{default:i.default.view_header_center_src_mar_right},view_header_center_src_pad_left:{default:i.default.view_header_center_src_pad_left},view_header_center_src_pad_right:{default:i.default.view_header_center_src_pad_right},view_header_center_txt:{default:i.default.view_header_center_txt},view_header_center_size:{default:i.default.view_header_center_size},view_header_center_color:{default:i.default.view_header_center_color},view_header_right_src:{default:i.default.view_header_right_src},view_header_right_src_size:{default:i.default.view_header_right_src_size},view_header_right_src_mar_left:{default:i.default.view_header_right_src_mar_left},view_header_right_src_mar_right:{default:i.default.view_header_right_src_mar_right},view_header_right_src_pad_left:{default:i.default.view_header_right_src_pad_left},view_header_right_src_pad_right:{default:i.default.view_header_right_src_pad_right},view_header_right_txt:{default:i.default.view_header_right_txt},view_header_right_size:{default:i.default.view_header_right_size},view_header_right_color:{default:i.default.view_header_right_color},view_header_right_txt_mar_left:{default:i.default.view_header_right_txt_mar_left},view_header_right_txt_mar_right:{default:i.default.view_header_right_txt_mar_right}},created:function(){var e=this.$getConfig().env;if("iOS"===e.platform){var t=e.deviceWidth/e.scale;this.height=48e3/t,this.height<149?this.padding_top=72:this.padding_top=Math.floor(this.height-88)}},methods:{rightItemClickHandle:function(e){this.$emit("rightItemClick",e)},leftItemClickHandle:function(e){this.view_not_use_left_default_click?this.$emit("leftItemClick",e):a.pop()},handleViewAppear:function(){this.$emit("viewappear")}}}},22:function(e,t){e.exports={"view-wrap":{flex:1,width:750},"view-header":{flexDirection:"row",width:750},"view-header-right":{position:"absolute",flexDirection:"row",alignItems:"center",bottom:0,right:0},"view-header-left":{position:"absolute",flexDirection:"row",alignItems:"center",bottom:0,left:0},"view-extend":{borderRadius:100},"view-header-center":{position:"absolute",flexDirection:"row",left:120,right:120,textAlign:"center",justifyContent:"center",alignItems:"center"},"view-inner":{flex:1}}},23:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["view-wrap"],style:{backgroundColor:e.view_background_color},on:{viewappear:e.handleViewAppear}},[e.padding_top&&e.view_use_compatible?r("div",{staticClass:["view-compatible"],style:{height:e.padding_top,backgroundColor:e.view_header_background_color}}):e._e(),e.view_use_header?r("div",{staticClass:["view-header"],style:{height:e.view_header_height,backgroundColor:e.view_header_background_color,borderBottomColor:e.view_header_border_color,borderBottomWidth:e.view_header_border_width}},[r("div",{staticClass:["view-header-left"],style:{height:e.view_header_height},on:{click:e.leftItemClickHandle}},[e.view_header_left_src?r("image",{staticClass:["header-left-image"],class:[e.view_header_left_src_style],style:{width:e.view_header_left_src_size[0]+e.view_header_left_src_pad_left+e.view_header_left_src_pad_right,marginLeft:e.view_header_left_src_mar_left,marginRight:e.view_header_left_src_mar_right,paddingLeft:e.view_header_left_src_pad_left,paddingRight:e.view_header_left_src_pad_right,height:e.view_header_left_src_size[1]},attrs:{src:e.view_header_left_src}}):e._e(),e.view_header_left_txt?r("text",{staticClass:["header-left-text"],style:{color:e.view_header_left_color,fontSize:e.view_header_left_size,marginLeft:e.view_header_left_txt_mar_left,marginRight:e.view_header_left_txt_mar_right}},[e._v(e._s(e.view_header_left_txt))]):e._e()]),r("div",{staticClass:["view-header-center"],style:{height:e.view_header_height}},[r("text",{staticClass:["header-center-text"],style:{color:e.view_header_center_color,fontSize:e.view_header_center_size}},[e._v(e._s(e.view_header_center_txt))]),e.view_header_center_src?r("image",{staticClass:["header-center-image"],style:{width:e.view_header_center_src_size[0]+e.view_header_center_src_pad_left+e.view_header_center_src_pad_right,marginLeft:e.view_header_center_src_mar_left,marginRight:e.view_header_center_src_mar_right,paddingLeft:e.view_header_center_src_pad_left,paddingRight:e.view_header_center_src_pad_right,height:e.view_header_center_src_size[1]},attrs:{src:e.view_header_center_src}}):e._e()]),r("div",{staticClass:["view-header-right"],style:{height:e.view_header_height},on:{click:e.rightItemClickHandle}},[e.view_header_right_txt?r("text",{staticClass:["header-right-text"],style:{color:e.view_header_right_color,fontSize:e.view_header_right_size,marginLeft:e.view_header_right_txt_mar_left,marginRight:e.view_header_right_txt_mar_right}},[e._v(e._s(e.view_header_right_txt))]):e._e(),e.view_header_right_src?r("image",{staticClass:["header-right-image"],style:{width:e.view_header_right_src_size[0]+e.view_header_right_src_pad_left+e.view_header_right_src_pad_right,marginLeft:e.view_header_right_src_mar_left,marginRight:e.view_header_right_src_mar_right,paddingLeft:e.view_header_right_src_pad_left,paddingRight:e.view_header_right_src_pad_right,height:e.view_header_right_src_size[1]},attrs:{src:e.view_header_right_src}}):e._e()])]):e._e(),e.view_use_scroll?r("scroller",{staticClass:["view-inner"]},[e._t("default")],2):r("div",{staticClass:["view-inner"]},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},24:function(e,t,r){var n,i,a=[];a.push(r(22)),n=r(21);var o=r(23);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="F:\\workproject\\jfb_web\\src\\components\\wov\\wov-view\\index.vue",i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-d19d7cf2",i.style=i.style||{},a.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,a),e.exports=n},25:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={view_use_scroll:!0,view_not_use_left_default_click:!1,view_use_header:!0,view_header_height:88,view_header_border_width:1,view_header_border_color:"#f2f2f2",view_background_color:"#f8f8f8",view_header_background_color:"#fff",view_header_background_image:"",view_header_left_src:(0,i.default)("jfb_return_icon.png?v=1"),view_header_left_src_size:[48,48],view_header_left_src_mar_left:25,view_header_left_src_mar_right:0,view_header_left_src_pad_left:0,view_header_left_src_pad_right:0,view_header_left_txt:"",view_header_left_color:"#3c3c3c",view_header_left_size:24,view_header_left_txt_mar_left:0,view_header_left_txt_mar_right:0,view_header_center_src:"",view_header_center_src_size:[48,48],view_header_center_src_mar_left:0,view_header_center_src_mar_right:0,view_header_center_src_pad_left:0,view_header_center_src_pad_right:0,view_header_center_txt:"",view_header_center_size:34,view_header_center_color:"#3c3c3c",view_header_right_src:"",view_header_right_src_size:[48,48],view_header_right_src_mar_left:0,view_header_right_src_mar_right:32,view_header_right_src_pad_left:0,view_header_right_src_pad_right:0,view_header_right_txt:"",view_header_right_size:30,view_header_right_color:"#3c3c3c",view_header_right_txt_mar_left:0,view_header_right_txt_mar_right:25}},26:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(24);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(i).default}})},27:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1);var n=r(28),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default},28:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("jfLocationModule");t.default={get:function(){return new Promise(function(e,t){n.getLocation(function(r){"0000"===r.code?e(r.data):t(r)})}).handle()}}},284:function(e,t,r){var n,i,a=[];a.push(r(169)),n=r(127);var o=r(208);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="F:\\workproject\\jfb_web\\src\\modules\\jfb\\messagecenter.vue",i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-6b9bfcea",i.style=i.style||{},a.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,a),e.exports=n,e.exports.el="true",new Vue(e.exports)},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(12),o=n(a),u=r(0),d=n(u),_={realName:"",mobileNo:"",encryptMobileNo:"",userType:"",certPid:"",certType:"",token:"",authenFlag:"",email:"",customerId:"",payCustomerId:"",status:"",collection_or_payment:!1,authScanRecognizeTimeoutCount:""};t.default={login:function(e){return o.default.set("DD_AUTH_STORE_DATA",d.default.defaults(e,_)).catch(function(e){throw"登录失败"})},update:function(e){return d.default.isObject(e)?o.default.get("DD_AUTH_STORE_DATA").then(function(t){return t=d.default.isObject(t)?t:{},t=Object.assign(t,e),o.default.set("DD_AUTH_STORE_DATA",t)}):Promise.reject("update input must be object")},getToken:function(){return o.default.get("DD_AUTH_STORE_DATA").catch(function(e){throw"用户未登录"})},cache:{set:function(e,t){return d.default.isString(e)?d.default.isEmpty(e)?Promise.reject("cache must has value"):o.default.get("DD_AUTH_CACHE_STORE_DATA").then(function(r){return r=d.default.isObject(r)?r:{},r[e]=t,o.default.set("DD_AUTH_CACHE_STORE_DATA",r)}).catch(function(r){return o.default.set("DD_AUTH_CACHE_STORE_DATA",i({},e,t))}):Promise.reject("cache must has key")},get:function(e){return d.default.isString(e)?o.default.get("DD_AUTH_CACHE_STORE_DATA").then(function(t){return d.default.isObject(t)&&t[e]?Promise.resolve(t[e]):Promise.reject("cache don't has"+e)}):Promise.reject("cache must has key")}},logout:function(){return Promise.all([o.default.remove("DD_AUTH_STORE_DATA"),o.default.remove("DD_AUTH_CACHE_STORE_DATA"),o.default.remove("pay_history")]).catch(function(e){throw"缓存清除失败"})}}},4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1);var n=r(8),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default},5:function(e,t,r){"use strict";function n(e){this.timer="",this.deferred="",this.duration=e||2e3}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,n.prototype.do=function(e){var t=this;if(this.deferred!=e)return this.deferred=e,clearTimeout(this.timer),this.timer=setTimeout(function(){t.deferred=""},this.duration),!0}},6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){return i.default.SOURCE+e}},7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n),a=weex.requireModule("loadResurceModule");t.default={page:function(e){if(i.default.isString(e))return o(e).handle();if(i.default.isArray(e)){var t=[];return e.forEach(function(e){return t.push(o(e))}),Promise.all(t).handle()}},source:function(e){return new Promise(function(t,r){a.getUrlPath(e,function(e){"0000"===e.code?t(e.data):r(e)})}).handle()}};var o=function(e){return new Promise(function(t,r){var n=e.substr(e.lastIndexOf("/")+1).split(".")[0];a.getRoutePath(n,function(e){"0000"===e.code?t(e.data):r(e)})})}},8:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),a=n(i),o=r(0),u=n(o),d=weex.requireModule("modal"),_=new a.default(2e3);t.default={toast:function(e){return _.do(e.message)?u.default.isEmpty(e.message)?null:(e.duration=e.duration||2,void d.toast(e)):null},alert:function(e,t){d.alert(e,t)},confirm:function(e,t){d.confirm(e,t)},prompt:function(e,t){d.prompt(e,t)}}},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(5),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default}});