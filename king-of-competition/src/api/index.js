
import curl, { baseURL } from 'src/api/curl'

const wxBaseUrl = `https://wechatfws.castrol.com.cn/`;

export default {

    // 2.1	微信授权接口
    doUserAuth () {
        const uri = window.location.href;
        window.location.replace(`${wxBaseUrl}wechatweb/Passport/Authorize?return_url=${encodeURIComponent(uri)}&scope=snsapi_userinfo`);
    },

    // 2.2	获取AccessToken
    doUserLogin: data => curl(`${wxBaseUrl}wechatweb/Passport/GetAccessToken`, data),

    // 2.3	获取JSSDK
    reqJsSDKInfo: data => curl(`${wxBaseUrl}wechatweb/WechatApi/GetSiteJSSDK`, data, { loading: false, useToken: false, method: 'get' }),

    // 2.4	获取用户活动信息
    reqUserInfo: (data, options) => curl(`H5Active/GetActiveInfo`, data, options),

    // 2.5	提交用户观看视频状态
    doWatchVideoStatusSubmit: data => curl(`H5Active/PostWatchStatus`, data),

    // 2.6	上传工单
    doWorkOrderSubmit: data => curl(`H5Active/PostWorkOrder`, data),

    // 2.7	用户调研
    doQuestionnaireSubmit: data => curl(`H5Active/PostResearchUser`, data),

    // 2.8	获取抽奖礼品信息(转盘)
    reqLuckDrawInfo: data => curl(`H5Active/GetActiveGiftStoreList`, data, { loading: false }),

    // 2.9	提交用户抽奖
    doLuckDrawSubmit: data => curl(`H5Active/PostLotteryUser`, data),

    // 2.10	提交中奖用户资料
    doReceivingSubmit: data => curl(`H5Active/PostLotteryUserInfo`, data),

    // 2.11	查看用户抽奖记录
    reqRecordsList: (data, options) => curl(`H5Active/GetLotteryUserList`, data, options),

    // 2.12	获取省份
    reqProvinceList: data => curl(`Comm/GetProvince`, data),

    // 2.13	获取城市
    reqCityList: data => curl(`Comm/GetCity`, data),

    // 2.14	发送验证码
    doSmsSend: data => curl(`Comm/SendSmsCode`, data),

    // 2.15	提交用户位置信息
    doLocationSubmit: data => curl(`H5Active/PostUserCoord`, data),

    // 2.14	获取模板消息ID
    reqTemplateID: data => curl(`Comm/GetTemplateID`, data),

}
