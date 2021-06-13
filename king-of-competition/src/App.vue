<template>
    <div id="app">
        <!--主体内容视图-->
        <transition :name="$store.state.animateName">
<!--            <keep-alive>-->
            <router-view class="view-wrap" ref="children"></router-view>
<!--            </keep-alive>-->
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        watch: {
            '$route' () {
                this.reqJsSDKInfo();
            }
        },
        created () {
            this.reqJsSDKInfo();
        },
        methods: {
            reqJsSDKInfo () {
                this.$api.reqJsSDKInfo({
                    current_url: encodeURIComponent(window.location.href.split('#')[0]),
                    nonce_str: new Date().getTime() + '',
                }).then((res) => {
                    if (typeof wx !== 'undefined') {
                        wx.config({
                            debug: false,
                            ...res,
                            jsApiList: [
                                'getLocation',
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'onMenuShareQZone',
                                'onMenuShareWeibo',
                            ],
                            openTagList: [
                                'wx-open-launch-weapp',
                                'wx-open-subscribe',
                            ],
                        });
                        wx.ready(() => {
                            // REQ_ADDRESS_INFO
                            if (this.$refs['children'].handleReady) {
                                this.$refs['children'].handleReady();
                            }
                        });
                    }
                }).null();
            },
        },
    }
</script>


<style lang="scss">
    @import "~src/assets/scss/common";
    html,
    body{
        @extend %h100;
        @extend %w100;
        @extend %oh;
    }
    #app{
        @extend %w100;
        @extend %h100;
    }
    .view-wrap{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        @extend %r0;
        @extend %b0;
        overflow-y: auto;
        background-color: #020516;
    }
    .view-inner{
        @extend %ma;
        @extend %pr;
        @extend %df;
        @extend %fdc;
        @extend %bsb;
        padding-bottom: f(200);
        width: j(750);
        min-height: 100%;
        background: #020516 url("~src/assets/images/bg-1.jpg") center top no-repeat;
        background-size: f(1125) auto;
    }
    .c-slogan{
        @extend %w100;
        height: f(380);
    }
    .c-flex1{
        @extend %df1;
    }
    .c-null{
        height: f(340);
    }
    .c-button{
        @extend %pr;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %fwb;
        @extend %ma;
        @extend %cp;
        @extend %bsb;
        color: $color-primary;
        &.c-button-1{
            padding-top: f(42);
            width: f(550);
            height: f(250);
            font-size: f(42);
            background: url("~src/assets/images/button-1.png") center no-repeat;
            background-size: contain;
        }
        &.c-button-2{
            padding-top: f(20);
            width: f(880);
            height: f(355);
            font-size: f(68);
            background: url("~src/assets/images/button-2.png") center no-repeat;
            background-size: contain;
        }
        &.c-button-3{
            /*padding-top: f(20);*/
            width: f(256);
            height: f(100);
            font-size: f(26);
            background: url("~src/assets/images/button-3.png") center no-repeat;
            background-size: contain;
        }
        &.c-button-4{
            padding-top: f(30);
            width: f(256 * 2);
            height: f(100 * 2);
            font-size: f(26);
            background: url("~src/assets/images/button-1.png") center no-repeat;
            background-size: contain;
        }
    }

    .c-border{
        border: j(2) solid #80d4ff;
        box-shadow: 0 0 j(20) j(10) rgba(128, 212, 255, 0.3)
        , 0 0 j(3) j(3) rgba(128, 212, 255, 0.5)
        , 0 0 j(3) j(3) rgba(128, 212, 255, 0.9)
        , inset 0 0 j(10) j(10) rgba(128, 212, 255, 0.3);
    }

    .c-text-red{
        color: #ffe0e1;
        text-shadow: 0 0 j(10) #FF9B9B,
        0 0 j(20) #FF9B9B,
        0 0 j(30) #FF9B9B,
        0 0 j(40) #FF9B9B;
    }

    .c-text-blue{
        color: #80d4ff;
        text-shadow: 0 0 j(10) #80d4ff,
        0 0 j(20) #80d4ff;
    }

    .c-tips{
        @extend %df;
        @extend %fdc;
        @extend %aic;
        @extend %fwb;
        color: $color-primary;
        font-size: f(40);
    }
    .c-arrow{
        width: j(10);
        height: j(10);
        border-top: 1px solid #cbcbcb;
        border-right: 1px solid #cbcbcb;
        &.right{
            @include tfr(45deg);
            margin-left: j(10);
        }
        &.bottom{
            @include tfr(135deg);
            margin-left: j(15);
            margin-bottom: j(10);
        }
        &.left{
            @include tfr(-135deg);
            margin-left: j(15);
            margin-bottom: j(10);
        }
        &.top{
            @include tfr(-45deg);
            margin-left: j(15);
        }
    }
    .vux-pop-in-enter-active,.vux-pop-in-leave-active,.vux-pop-out-enter-active,.vux-pop-out-leave-active {
        will-change: transform;
        -webkit-transition: all .5s;
        transition: all .5s;
        position: absolute;
        top: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000px;
    }
    .vux-pop-out-enter {
        opacity: 0;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }
    .vux-pop-in-enter,.vux-pop-out-leave-active {
        opacity: 0;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }
    .vux-pop-in-leave-active {
        opacity: 0;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }
    .weui-toast__content{
        font-size: j(24) !important;
        padding: j(20) !important;
        word-break: break-all;
    }
    .weui-loading_toast{
        .weui-toast{
            min-height: auto !important;
            padding: 10px 0 !important;
        }
        .weui-loading{
            margin: 0 !important;
        }
    }
    .weui-toast{
        @include tft(translate3d(-50%, -50%, 0));
        top: 50%;
        width: auto !important;
        min-width: j(120) !important;
        max-width: j(320) !important;
    }
</style>
