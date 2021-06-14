<template>
    <div>
        <super-box
            @refresh="reqLuckDrawInfo"
            :data="superBox$"
            class="view-inner">
            <div class="null-1"></div>
            <i class="title"></i>
            <div class="turntable-wrap">
                <ul class="turntable-inner"
                    :style="{
                        transform: 'rotate(-' + rotate + 'deg)',
                        transition: 'transform ' + duration + 's ease',
                     }">
                    <li v-for="(item, index) in arrGift" :key="index">
                        <img :src="item.pic">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <p class="tips">
                您还剩<strong> {{objUser.scoreLeft || 0}} </strong>滴“嘉油”
                <br/>
                每次抽奖消耗<strong> {{score}} </strong>滴“嘉油”
            </p>
            <div class="c-button c-button-2" @click="handleLuckDraw">
                <span>马上抽奖</span>
            </div>
        </super-box>
        <div class="popup-wrap" v-if="objGift">
            <div class="c-card popup-inner">
                <div class="c-card-content">
                    <div class="popup-content">
                        <template v-if="objGift.id">
                            <img :src="objGift.pic">
                            <p>恭喜您!<br/>{{objGift.name}}</p>
                        </template>
                        <template v-else>
                            <img src="~src/assets/images/popup-gift-1.png">
                            <p>你我皆王者!<br/>重在参与</p>
                        </template>
                        <div class="popup-btn" @click="handleLuckDraw">
                            <span>再抽一次</span>
                        </div>
                    </div>
                </div>
            </div>
            <i class="popup-close" @click="objGift = ''"></i>
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
        created () {
            this.reqLuckDrawInfo();
            this.reqUserInfo();
        },
        methods: {
            reqUserInfo () {
                this.$api.reqUserInfo().then(res => {
                    this.objUser = res;
                }).toast();
            },
            reqLuckDrawInfo () {
                this.superBoxLoading();
                this.$api.reqLuckDrawInfo().then(res => {
                    let { list, score }  = res;
                    this.score = score;
                    list = list.filter(item => !!item);
                    if (list.length > 6) list.length = 6;
                    const diff = [];
                    for (let i = 0, len = 6 - list.length; i < len; i++) {
                        diff.push({ id: 'xxcy1', name: '谢谢参与', pic: require('src/assets/images/gift-smiling-face.png'), isNotGift: true });
                    }
                    let source = [], i = 0;
                    while (source.length < 6 && i < 6) {
                        if (list[i]) source.push(list[i]);
                        if (diff[i]) source.push(diff[i]);
                        i++;
                    }
                    source.forEach((item, index) => {
                        item.min = 60 * index - 60 / 2 + 5;
                        item.max = 60 * (index + 1) - 60 / 2 - 5;
                    });
                    this.arrGift = source;
                    this.superBoxSuccess();
                }).toast(this.superBoxError.bind(this));
            },
            handleLuckDraw () {
                this.objGift = '';
                if (this.rotate > 360) return null;
                this.$api.doLuckDrawSubmit().then(res => {
                    let { id } = res || {};
                    if (!id) {
                        // 没有中奖
                        const noGifts = this.arrGift.filter(res => res.isNotGift);
                        id = noGifts[Math.floor(Math.random() * noGifts.length)].id;
                    }
                    const { min, max, name } = this.arrGift.find(item => item.id === id) || {};
                    if (!name) {
                        throw '活动太火爆了，请稍后再试';
                    }
                    const r = Math.floor(Math.random() * (max - min)) + min;
                    this.duration = 5;
                    this.rotate = 360 * 10 + r;
                    this.reqUserInfo();
                    setTimeout(() => {
                        this.duration = 0;
                        this.rotate = r;
                        setTimeout(() => {
                            this.objGift = res || {};
                        }, 500);
                    }, this.duration * 1000 + 100);
                }).toast();
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .null-1{
        height: j(250);
    }
    .title{
        @extend %db;
        @extend %w100;
        @extend %ma;
        height: j(160);
        background: url("~src/assets/images/title-4.png") no-repeat;
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
            margin-top: j(10);
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
            font-size: j(32);
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
