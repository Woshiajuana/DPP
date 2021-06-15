<template>
    <div>
        <div class="view-inner">
            <i class="rule-btn" @click="isRulePopup = true"></i>
            <i class="play-btn" @click="handleVideoPlay"></i>
            <div class="null-1"></div>
            <div class="button-group">
                <div class="c-button c-button-2" @click="doUserAuthOrLogin">
                    <span>马上抽奖</span>
                </div>
                <div class="c-button c-button-1" @click="$router.push('/photograph')">
                    <span>立刻开战</span>
                </div>
            </div>
        </div>
        <div class="popup-rule-wrap" v-if="isRulePopup">
            <div class="popup-rule-inner">
                <dl>
                    <dt>6月1日-7月25日</dt>
                    <dd>首次参与陈列打卡可获得<strong>100积分</strong>，后续每日参与陈列打卡可获得<strong>50积分</strong>，积分可用于抽奖，每日仅可参与1次打卡</dd>
                </dl>
                <div class="popup-rule-br"></div>
                <dl>
                    <dt>7月25日-7月30日</dt>
                    <dd>将进行评分结算，积分前<strong>50名</strong>用户可获得荣耀好礼</dd>
                </dl>
                <i class="popup-rile-close" @click="isRulePopup = false"></i>
            </div>
        </div>
        <div class="popup-wrap" v-if="isVideoPopup">
            <div class="popup-video-inner popup-inner c-border">
                <video ref="video" src="http://120.55.81.220/video/JIKXMyZjKYoJ.mp4" controls></video>
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
            console.log('window.location.href => ', window.location.href);
        },
        methods: {
            doUserAuthOrLogin (fn) {
                let { token } = this.$user.get();
                if (token) {
                    // 已经登录的情况
                    if (fn) {
                        typeof fn === 'function' ? fn() : this[fn]();
                    }
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
        color: #b2e5ff;
        font-size: j(23);
        width: j(750);
        height: j(1200);
        background: url("~src/assets/images/rule-bg-1.png") no-repeat;
        background-size: contain;
        line-height: 1.6;
        padding-top: j(430);
        dl{
            width: j(525);
            font-size: j(25);
        }
        dt{
            @extend %fwb;
            @extend %tac;
            font-size: j(28);
        }
        strong{
            color: #ad956e;
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
