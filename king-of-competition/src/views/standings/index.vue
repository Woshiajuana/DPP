<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <div class="c-card">
                <i class="title"></i>
                <div class="c-card-content">
                    <ul>
                        <li>
                            <span>奖品名称</span>
                            <span>获得时间</span>
                            <span>状态</span>
                        </li>
                        <li>
                            <span>20元话费</span>
                            <span>2021-05-07</span>
                            <span>已领取</span>
                        </li>
                        <li>
                            <span>20元话费</span>
                            <span>2021-05-07</span>
                            <span>
                                <i class="btn">点击领取</i>
                            </span>
                        </li>
                        <li>
                            <span>20元话费</span>
                            <span>2021-05-07</span>
                            <span>
                                <i class="btn">点击领取</i>
                            </span>
                        </li>
                        <li>
                            <span>20元话费</span>
                            <span>2021-05-07</span>
                            <span>
                                <i class="btn">点击领取</i>
                            </span>
                        </li>
                        <li>
                            <span>20元话费</span>
                            <span>2021-05-07</span>
                            <span>
                                <i class="btn">点击领取</i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .null-1{
        height: j(300);
    }
    .title{
        @extend %pa;
        @extend %l50;
        top: j(-10);
        margin-left: j(-150);
        width: j(300);
        height: j(75);
        background: url("~src/assets/images/title-2.png") no-repeat;
        background-size: contain;
    }
    .c-card-content{
        min-height: j(600);
        ul{
            margin-top: j(-30);
        }
        li{
            @extend %df;
            @extend %aic;
            @extend %pr;
            @extend %ma;
            width: j(570);
            height: j(90);
            color: #b2e5ff;
            font-size: j(28);
            &:after{
                @extend %pa;
                @extend %b0;
                @extend %r0;
                @extend %l0;
                content: '';
                height: 1px;
                background-image: linear-gradient(to right, #083266, #135fb3, #083266);
            }
            &:first-child{
                @extend %cfff;
                @extend %fwb;
                font-size: j(32);
            }
        }
        span{
            @extend %df1;
            &:nth-child(1){

            }
            &:nth-child(2){
                @extend %tac;
            }
            &:nth-child(3){
                @extend %tar;
                @extend %df;
                @extend %aic;
                @extend %jce;
            }
        }
    }
    .btn{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %cp;
        @extend %cfff;
        font-size: j(24);
        width: j(128);
        height: j(46);
        background: url("~src/assets/images/btn-bg-3.jpg") no-repeat;
        background-size: contain;
    }
</style>
