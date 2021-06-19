<template>
    <div>
        <div class="view-inner">
            <i class="rule-btn" @click="isRulePopup = true"></i>
            <i class="play-btn" @click="handleVideoPlay"></i>
            <div class="null-1"></div>
            <div class="button-group">
                <div class="c-button c-button-2" @click="doUserAuthOrLogin('handleLuckDraw')">
                    <span>马上抽奖</span>
                </div>
                <div class="c-button c-button-1" @click="doUserAuthOrLogin('handleStart')">
                    <span>立刻开战</span>
                </div>
            </div>
        </div>
        <div class="popup-rule-wrap" v-if="isRulePopup">
            <div class="popup-rule-inner">
                <h2>活动规则</h2>
                <dl>
                    <dt>活动时间：</dt>
                    <dd>2021年06月18日- 2021年8月17日</dd>
                    <dt>参与方式：</dt>
                    <dd>用户通过扫描活动二维码，进入活动平台，参与活动获取积分，积分兑换抽奖机会，通过抽奖的方式抽取实物奖品</dd>
                    <dt>活动内容：</dt>
                    <dt class="popup-rule-title">荣耀常规赛</dt>
                    <dd>用户每天可上传一次照片。用户在每个活动周期首次上传照片并审核通过可获得100“嘉油”，后续每天上传照片并审核通过可获得50“嘉油”。“嘉油”可用于抽奖，每次抽奖将消耗500“嘉油”。用户有机会获得小米电动牙刷、小米无线蓝牙耳机、小米登机箱等奖品。用户可在“个人中心”查看剩余可抽奖“嘉油”。</dd>
                    <dd>每个活动周期用户的“嘉油”将清零。</dd>
                    <dt class="popup-rule-title">荣耀排位赛</dt>
                    <dd>后台将对用户在每个周期首次上传的照片质量进行打分，既为王者“嘉油”。每个活动周期的王者排位的“嘉油”为用户在每个活动周期上传照片并审核通过获得的总“嘉油”+王者“嘉油”，抽奖消耗的“嘉油”并不计算在内。</dd>
                    <dd>每个活动周期结束后，“嘉油”排名前50名可以获得排位赛大奖，奖品为华为手环。</dd>
                </dl>
                <i class="popup-rile-close" @click="isRulePopup = false"></i>
            </div>
        </div>
        <div class="popup-wrap" v-if="isVideoPopup">
            <div class="popup-video-inner popup-inner c-border">
                <video ref="video" src="https://chainstore.g2campaign.com/uploads/castrol1.mp4" controls></video>
            </div>
            <i class="popup-close" @click="isVideoPopup = false"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isRulePopup: false,
                isVideoPopup: false,
            };
        },
        created () {
            this.doUserAuthOrLogin();
        },
        methods: {
            doUserAuthOrLogin (fn) {
                const { token } = this.$user.get();
                if (token) {
                    this.$api.reqUserInfo({}, {
                        loading: !!fn
                    }).then(res => {
                        const { mobile } = res || {};
                        if (!mobile) {
                            return this.$router.replace('/register');
                        }
                        fn && this[fn](res);
                    }).toast();
                    return null;
                }
                this.$api.doUserAuth();
            },
            handleVideoPlay () {
                this.isVideoPopup = true;
                this.$nextTick(() => {
                    this.$refs.video.play();
                });
            },
            handleLuckDraw () {
                this.$router.push('/luck-draw');
            },
            handleStart (user) {
                this.$api.reqPictureList().then(res => {
                    const item = res[0] || {};
                    const { state, date } = item;
                    if (this.$helper.formatDate('yyyy-MM-dd') === date
                        && state !== this.$config.PICTURE_STATUS.valueByKey.SHSB) {
                        this.$router.push({ path: '/poster', query: item });
                    } else {
                        this.$router.push({ path: '/photograph', query: user });
                    }
                }).toast();
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .view-inner{
        @extend %pr;
        background: #020617 url("~src/assets/images/bg-2.jpg") center top no-repeat;
        background-size: j(750) auto;
    }
    .rule-btn{
        @extend %cp;
        @extend %pa;
        @extend %r0;
        top: j(186);
        width: j(101);
        height: j(54);
        background: url("~src/assets/images/rule-icon.jpg") no-repeat;
        background-size: contain;
        border-radius: j(27) 0 0 j(27);
    }
    .play-btn{
        @extend %cp;
        @extend %pa;
        top: j(665);
        right: j(55);
        width: j(150);
        height: j(55);
    }
    .null-1{
        height: j(1115);
    }
    .button-group{
        @extend %df;
        @extend %aic;
        @extend %jcc;
    }
    .popup-rule-wrap{
        @extend %pf;
        @extend %t0;
        @extend %l0;
        @extend %r0;
        @extend %b0;
        z-index: 9;
        overflow-y: auto;
        background-color: rgba(0, 0, 0, .9);
    }
    .popup-rule-inner{
        @extend %df;
        @extend %fdc;
        @extend %aic;
        @extend %bsb;
        @extend %pr;
        @extend %w100;
        @extend %ma;
        color: #b2e5ff;
        font-size: j(23);
        max-width: j(750);
        height: j(1200);
        background: url("~src/assets/images/rule-bg-1.png") no-repeat;
        background-size: 100% auto;
        line-height: 1.6;
        padding-top: j(300);
        h2{
            font-size: j(36);
        }
        dl{
            width: j(525);
            font-size: j(28);
            height: j(500);
            overflow-y: auto;
        }
        dt{
            @extend %fwb;
            margin-top: j(10);
            font-size: j(30);
        }
        dd{
            margin-top: j(5);
        }
        strong{
            color: #ad956e;
        }
        .popup-rule-title{
            @extend %df;
            @extend %aic;
            @extend %jcc;
            font-size: j(34);
            margin: j(30) 0 j(20);
            color: #054fa7;
            height: j(58);
            background: url("~src/assets/images/rule-title-bg.png") center no-repeat;
            background-size: auto 100%;
        }
    }
    .popup-rule-br{
        height: j(120);
    }
    .popup-rile-close{
        @extend %cp;
        @extend %pa;
        @extend %l50;
        margin-left: j(-40);
        width: j(80);
        height: j(80);
        top: j(1020);
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
</style>
