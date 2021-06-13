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
    }
</script>


<style lang="scss">
    @import "~src/assets/scss/common";
    html,
    body{
        @extend %h100;
        @extend %w100;
        @extend %oh;
        @extend %cfff;
        background-color: #020617;
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
        background: #020617 url("~src/assets/images/bg-1.jpg") center top no-repeat;
        background-size: j(750) auto;
    }

    .c-button{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %cp;
        @extend %bsb;
        @extend %cfff;
        @extend %fwb;
        @extend %ma;
        padding-bottom: j(22);
        width: j(260);
        height: j(146);
        font-size: j(30);
        &.c-button-1{
            background: url("~src/assets/images/btn-bg-1.png") no-repeat;
            background-size: contain;
        }
        &.c-button-2{
            background: url("~src/assets/images/btn-bg-2.png") no-repeat;
            background-size: contain;
        }
    }
    .c-flex1{
        @extend %df1;
    }
    .c-null{
        height: f(340);
    }
    .c-border{
        @extend %bsb;
        border: j(3) solid #76b2f3;
        box-shadow: 0 0 j(20) j(10) rgba(128, 212, 255, 0.3)
        , 0 0 j(3) j(3) rgba(128, 212, 255, 0.5)
        , 0 0 j(3) j(3) rgba(128, 212, 255, 0.9)
        , 0 0 j(10) j(10) rgba(128, 212, 255, 0.3);
    }
    .c-card{
        @extend %ma;
        @extend %df;
        @extend %pr;
        @extend %fdc;
        width: j(670);
        &:before{
            @extend %db;
            @extend %w100;
            content: '';
            height: j(156);
            background: url("~src/assets/images/card-bg-1.png") no-repeat;
            background-size: 100% 100%;
        }
        &:after{
            @extend %w100;
            @extend %db;
            content: '';
            height: j(103);
            margin-top: j(-2);
            background: url("~src/assets/images/card-bg-3.png") no-repeat;
            background-size: 100% 100%;
        }
    }
    .c-card-content{
        @extend %w100;
        margin-top: -1px;
        background: url("~src/assets/images/card-bg-2.png") repeat-y;
        background-size: 100% 100%;
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
