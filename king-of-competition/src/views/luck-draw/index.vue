<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <i class="title"></i>
            <div class="turntable-wrap">
                <ul class="turntable-inner"
                    :style="{
                        transform: 'rotate(-' + rotate + 'deg)',
                        transition: 'transform ' + duration + 's ease',
                     }">
                    <li v-for="(item, index) in 6" :key="index">
                        <img src="~src/assets/images/gift-smiling-face.png">
                        <span>感谢参与</span>
                    </li>
                </ul>
            </div>
            <p class="tips">
                您还剩<strong>500</strong>滴“嘉油”
                <br/>
                每次抽奖消耗<strong>10</strong>滴“嘉油”
            </p>
            <div class="c-button c-button-2">
                <span>马上抽奖</span>
            </div>
        </div>
        <div class="popup-wrap" v-if="false">
            <div class="c-card popup-inner">
                <div class="c-card-content">
                    <div class="popup-content">
                        <img src="~src/assets/images/popup-gift-1.png">
                        <p>你我皆王者!<br/>重在参与</p>
                        <div class="popup-btn">
                            <span>再抽一次</span>
                        </div>
                    </div>
                </div>
            </div>
            <i class="popup-close"></i>
        </div>
    </div>
</template>

<script>
    import SuperBoxMixin from 'src/mixins/super-box.mixin'
    import DataMixin from './data.mixin'

    export default {
        mixins: [
            DataMixin,
            SuperBoxMixin,
        ],
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .null-1{
        height: j(250);
    }
    .title{
        @extend %db;
        @extend %ma;
        width: j(400);
        height: j(120);
        background: url("~src/assets/images/title-1.png") no-repeat;
        background-size: contain;
    }
    .turntable-wrap{
        @extend %pr;
        @extend %ma;
        @extend %oh;
        width: j(600);
        height: j(600);
        &:after{
            @extend %pa;
            @extend %l50;
            @extend %t50;
            margin-left: j(-136 / 2 + 1);
            width: j(136);
            height: j(166);
            margin-top: j(-166 / 2 - 14);
            content: '';
            background: url("~src/assets/images/pointer-icon.png") no-repeat;
            background-size: contain;
        }
    }
    .turntable-inner{
        @extend %w100;
        @extend %h100;
        @extend %pr;
        background: url("~src/assets/images/turntable-icon.png") no-repeat;
        background-size: contain;
        li{
            @extend %pa;
            @extend %df;
            @extend %fdc;
            @extend %aic;
            @extend %bsb;
            @extend %t0;
            @extend %l50;
            padding-top: f(120);
            margin-left: -16.7%;
            width: 34.4%;
            height: 50%;
            transform-origin: center bottom;
            font-size: f(29);
            color: #b9b9b9;
            &:nth-child(1){
                transform: rotate(0deg);
            }
            &:nth-child(2){
                transform: rotate(1 * 60deg);
            }
            &:nth-child(3){
                transform: rotate(2 * 60deg);
            }
            &:nth-child(4){
                transform: rotate(3 * 60deg);
            }
            &:nth-child(5){
                transform: rotate(4 * 60deg);
            }
            &:nth-child(6){
                transform: rotate(5 * 60deg);
            }
        }
        img{
            width: f(175);
            height: f(125);
        }
        span{
            @extend %tac;
            @extend %twno;
            width: f(150);
        }
    }
    .tips{
        @extend %tac;
        font-size: j(25);
        color: #b2e5ff;
        margin: j(20) 0;
        strong{
            @extend %cfff;
        }
    }
    .popup-wrap{
        @extend %pf;
        @extend %t0;
        @extend %l0;
        @extend %w100;
        @extend %h100;
        @extend %df;
        @extend %fdc;
        @extend %aic;
        @extend %jcc;
        background: rgba(0, 0, 0, .5);
    }
    .popup-close{
        @extend %cp;
        margin-top: j(30);
        width: f(145);
        height: f(145);
        background: url("~src/assets/images/popup-close-icon.png") no-repeat;
        background-size: contain;
    }
    .popup-content{
        @extend %df;
        @extend %fdc;
        @extend %aic;
        margin-top: j(-80);
        font-size: j(43);
        img{
            width: auto;
            height: j(166);
        }
        p{
            @extend %tac;
            line-height: 1.6;
            color: #b2e5ff;
        }
    }
    .popup-btn{
        @extend %cp;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %cfff;
        font-size: j(30);
        width: j(273);
        height: j(84);
        margin-top: j(40);
        background: url("~src/assets/images/btn-bg-4.jpg") no-repeat;
        background-size: contain;
    }
</style>
