
import curl, { baseURL } from 'src/api/curl'

// 1.查询个人信息
export const reqUserInfo = (data = {}, options = {  }) => curl('index.php?r=v1/userinfo', {}, { loading: false, ...options });

// 2.注册接口
export const doUserRegister = data => curl('index.php?r=v1/register', data);

// 3.发送验证码接⼝
export const doSmsSend = data => curl('index.php?r=v1/verifycode', data);

// 4.上传照片接口
export const doPhotographSubmit = data => curl(`index.php?r=v1/upload`, data);

// 5. 我的照⽚片列列表接⼝口
export const reqPictureList = data => curl('index.php?r=v1/piclist', data, { loading: false });

// 6. 抽奖接⼝口
export const doLuckDrawSubmit = () => curl('index.php?r=v1/lottery');

// 7. 添写中奖资料料接⼝口
export const doReceivingSubmit = data => curl('index.php?r=v1/addprofile', data);

// 8. 奖品列列表
export const reqLuckDrawInfo = () => curl('index.php?r=v1/awardlist', {}, { loading: false });

// 9. 排名接⼝口
export const reqRankingList = () => curl('index.php?r=v1/ranklist', {}, { loading: false });

// 10. 我的战绩
export const reqStandingsList = () => curl('index.php?r=v1/myaward', {}, { loading: false });

// 11. 拉取省份接口
export const reqProvinceList = () => curl('index.php?r=v1/provincelist');

// 12. 拉取城市接口
export const reqCityList = data => curl('index.php?r=v1/citylist', data);

// 13. 授权接⼝口
export const doUserAuth = () => {
    const uri = window.location.href;
    window.location.replace(`${baseURL}index.php?r=weixin/authorize&uri=${encodeURIComponent(uri)}`);
};

// 14. 门店接口
export const reqShopList = data => curl('index.php?r=v1/storelist', data);
