<template>
    <div>
        <div class="view-inner">
            <div class="null"></div>
            <div class="activity-tips">
                <b>使用嘉实多产品保养爱车，即可获得免费抽奖机会</b>
            </div>
            <p class="activity-time" v-if="computedActiveInfo">活动时间：<strong>{{computedActiveInfo.BeginDate}} ~ {{computedActiveInfo.EndDate}}</strong></p>
            <div class="null620"></div>
            <div class="c-button c-button-2" @click="doUserAuthOrLogin('handleStart')">
                <span>马上抽取BUFF</span>
            </div>
            <div class="link-button" @click="$router.push({ path: '/records' })">查看抽奖记录</div>
        </div>
        <div class="popup-wrap" v-if="isVideoPopup">
            <div class="popup-video-inner popup-inner c-border">
                <video ref="video" @playing="isShowClose = true" :src="objData.ActiveInfo.VideoUrl" autoplay controls></video>
            </div>
            <i class="popup-close" v-if="isShowClose" @click="handleVideoClose"></i>
            <i class="popup-play" v-else @click="handlePlay"></i>
        </div>
        <div class="popup-wrap" v-if="isPopup">
            <div class="popup-inner popup-status-inner c-border">
                <template v-if="objData.ActiveUser.ActiveStep === 2">
                    <i class="popup-icon status-1"></i>
                    <p>您的工单正在审核</p>
                    <div class="c-button c-button-4" @click="isPopup = false">
                        <span>我知道了</span>
                    </div>
                </template>
                <template v-if="objData.ActiveUser.ActiveStep === 4">
                    <i class="popup-icon status-2"></i>
                    <p>您的工单审核未通过</p>
                    <div class="c-button c-button-4"
                         @click="$router.push('/work-order')">
                        <span>重新提交</span>
                    </div>
                </template>
            </div>
            <i class="popup-close" @click="isPopup = false"></i>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                isVideoPopup: false,
                isPopup: false,
                objData: false,
                isShowClose: false,
            };
        },
        computed: {
            computedActiveInfo () {
                return this.objData.ActiveInfo || '';
            },
        },
        created () {
            this.doUserAuthOrLogin('reqUserInfo');
        },
        methods: {
            handlePlay () {
                this.$refs.video.play();
            },
            doUserAuthOrLogin (fn) {
                let { token } = this.$user.get();
                if (token) {
                    // 已经登录的情况
                    if (fn) {
                        typeof fn === 'function' ? fn() : this[fn]();
                    }
                    return null;
                }
                let { code, openid, ActiveId } = this.$route.query;
                // if (ActiveId) {
                //     // 链接上有活动ID，直接更新本地
                //     this.$storage.local.set('$$ACTIVE_ID', ActiveId);
                // } else {
                //     // 链接上没有活动id,直接取本地
                //     ActiveId = this.$storage.local.get('$$ACTIVE_ID', '');
                // }
                if (!ActiveId) {
                    // 没有活动 id
                    return this.$vux.confirm.show({
                        title: '温馨提示',
                        content: '请扫描活动二维码进入哦~',
                        showCancelButton: false,
                        showConfirmButton: true,
                        confirmText: '我知道了',
                        onConfirm: () => {
                            if (typeof WeixinJSBridge !== 'undefined') {
                                WeixinJSBridge.call('closeWindow');
                            }
                            if (typeof wx !== 'undefined') {
                                wx.closeWindow();
                            }
                            window.close();
                        },
                    });
                }
                if (!code || !openid) {
                    return this.$api.doUserAuth();
                }
                // 登录
                this.$api.doUserLogin({
                    code,
                    openid,
                }).then((res) => {
                    let { AccessToken: token, OpenId: openid } = res;
                    this.$user.update(Object.assign(res, { token, openid, ActiveId }));
                    this.reqUserInfo(null, true);
                }).toast();
            },
            reqUserInfo (cb, loading = false) {
                this.$api.reqUserInfo({}, {loading}).then(res => {
                    this.objData = res;
                    const { ActiveUser } = res;
                    const { ActiveStep } = ActiveUser;
                    if (cb) {
                        cb(res);
                    } else {
                        if (ActiveStep === 0) {
                            // 观看视频
                            return this.isVideoPopup = true;
                        }
                    }
                }).toast();
            },
            handleStart (flag) {
                // 判断活动时间
                if (flag !== true) {
                    this.reqUserInfo(() => this.handleStart(true), true);
                    return null;
                }
                // 判断活动时间
                const { ActiveUser, ActiveInfo } = this.objData;
                const { IsOpenLBS } = ActiveInfo;
                if (!IsOpenLBS) {
                    // 定位关闭了
                    return this.judgeUserStatus(ActiveUser);
                }
                this.$wx.getLocation({
                    type: 'gcj02',
                }).then(res => {
                    const { latitude: Latitude, longitude: Longitude } = res;
                    return this.$api.doLocationSubmit({
                        Latitude,
                        Longitude,
                    });
                }).then(() => {
                    this.judgeUserStatus(ActiveUser);
                }).toast();
            },
            judgeUserStatus (ActiveUser) {
                const { ActiveStep } = ActiveUser;
                // 首页
                // 活动完成阶段：0扫码，1观看视屏，3调研，6抽奖，7留资/寄送
                if (ActiveStep === 0) {
                    return this.isVideoPopup = true;
                } else if (ActiveStep === 1) {
                    // 看完了视频就去调研
                    return this.$router.push('/questionnaire');
                } else if (ActiveStep === 3) {
                    // 完成了调研就去抽奖
                    return this.$router.push('/luck-draw');
                } else if ([6, 7].includes(ActiveStep)) {
                    return this.$vux.toast.show('您已参与了本次活动！请查看抽奖记录');
                } else {
                    return this.$vux.toast.show(`您的活动状态异常，请联系客服(${ActiveStep})`);
                }
            },
            handleVideoClose () {
                this.$api.doWatchVideoStatusSubmit({
                    Status: 1,
                }).then(() => {}).null().finally(() => {
                    this.isVideoPopup = false;
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .view-inner{
        background: #020516 url("~src/assets/images/bg-2.jpg") center top no-repeat;
        background-size: f(1125) auto;
    }
    .null{
        height: f(945);
    }
    .null620{
        height: f(620);
    }
    .activity-time{
        @extend %tac;
        font-size: f(35);
        margin-top: f(30);
        color: $color-primary;
    }
    .activity-tips{
        @extend %df;
        @extend %aic;
        @extend %ma;
        width: f(860);
        color: $color-primary;
        height: f(165);
        font-size: f(35);
        b{
            @extend %df1;
        }
        span{
            margin-right: f(30);
        }
    }
    .link-button{
        @extend %cp;
        @extend %tac;
        text-decoration: underline;
        color: $color-primary;
        font-size: f(35);
    }

    .popup-wrap{
        @extend %pf;
        @extend %t0;
        @extend %l0;
        @extend %w100;
        @extend %h100;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %fdc;
        z-index: 999;
        background-color: rgba(0, 0, 0, .6);
    }
    .popup-inner{
        background: url("data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAIDAQQJ/8QAKBAAAgEABgsBAAAAAAAAAAAAAAIBAxExUZGxExQhIzRBU2FxctEy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEFBv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOZhVuGT3bJRKkvbAo0Lq6bZ/bcu0HcM1EektjxGRipL2wHpISuNs2Ry7BEgGqS9sAAUq3DJ7tkoaVeimLfSjUq6um5T9Nza6O4VrD0lseIyG0q9FMW+jUlKtcblLI5td5CIAV0q9FMW+gBIq3DJ7tkoAFSHpLY8RkABCAAAf//Z");
        video{
            @extend %db;
            @extend %w100;
            @extend %h100;
        }
        &.popup-video-inner{
            width: f(1090);
            height: f(615);
        }
        &.popup-status-inner{
            @extend %df;
            @extend %fdc;
            @extend %aic;
            width: f(800);
            padding: f(80) 0;
            .c-button-4{
                margin-top: f(40);
            }
        }
        i{
            @extend %db;
            &.status-1{
                width: f(380);
                height: f(350);
                background: url("~src/assets/images/p-1.png") no-repeat;
                background-size: contain;
            }
            &.status-2{
                width: f(330);
                height: f(330);
                background: url("~src/assets/images/p-2.png") no-repeat;
                background-size: contain
            }
        }
        p{
            @extend %tac;
            font-size: f(48);
            color: $color-primary;
        }
    }
    .popup-close{
        @extend %cp;
        margin-top: f(80);
        width: f(145);
        height: f(145);
        background: url("~src/assets/images/popup-close-icon.png") no-repeat;
        background-size: contain;
    }
    .popup-play{
        @extend %cp;
        margin-top: f(80);
        width: f(145);
        height: f(145);
        background: url("~src/assets/images/play-btn.png") center no-repeat;
        background-size: 70%;
    }
</style>
