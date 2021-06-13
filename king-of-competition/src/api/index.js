
import curl, { baseURL } from 'src/api/curl'

// 1.查询个人信息
export const reqUserInfo = () => curl('index.php?r=v1/userinfo', {}, { loading: false });

// 2.注册接口
export const doUserRegister = data => curl('index.php?r=v1/register', data);

// 3.发送验证码接⼝
export const doSmsSend = data => curl('index.php?r=v1/verifycode', data);

// 4.上传照片接口
export const doPhotographSubmit = data => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
    });
    return curl(`index.php?r=v1/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data;charset=UTF-8'
        },
    });
};

// 5. 我的照⽚片列列表接⼝口
export const reqPictureList = data => curl('index.php?r=v1/piclist', data, { loading: false });

// 6. 抽奖接⼝口
export const doLuckDrawSubmit = () => curl('index.php?r=v1/lottery');

// 7. 添写中奖资料料接⼝口
export const doReceivingSubmit = data => curl('index.php?r=v1/addprofile', data);

// 8. 奖品列列表
export const reqLuckDrawList = () => curl('index.php?r=v1/awardlist', {}, { loading: false });

// 9. 排名接⼝口
export const reqRankingList = () => curl('index.php?r=v1/ranklist', {}, { loading: false });
