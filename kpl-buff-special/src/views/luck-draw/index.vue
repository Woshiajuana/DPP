<template>
    <div>
        <super-box
            @refresh="reqLuckDrawInfo"
            :data="superBox$"
            class="view-inner">
            <div class="c-null"></div>
            <img src="~src/assets/images/slogan-2.png" class="c-slogan">
            <div class="turntable-wrap">
                <ul class="turntable-inner"
                    :style="{
                        transform: 'rotate(-' + rotate + 'deg)',
                        transition: 'transform ' + duration + 's ease',
                     }">
                    <li v-for="(item, index) in arrGift" :key="index">
                        <img :src="item.ImageUrl">
                        <span>{{item.GiftName}}</span>
                    </li>
                </ul>
            </div>
            <div class="c-button c-button-2"
                 @click="handleLuckDraw">
                <span>立即抽奖</span>
            </div>
        </super-box>
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
        },
        methods: {
            reqLuckDrawInfo () {
                this.superBoxLoading();
                this.$api.reqLuckDrawInfo().then(res => {
                    res = res.filter(item => !!item);
                    if (res.length > 8) res.length = 8;
                    const diff = [];
                    for (let i = 0, len = 8 - res.length; i < len; i++) {
                        diff.push({ GiftId: 'xxcy1', GiftName: '谢谢参与', ImageUrl: require('src/assets/images/gift-smiling-face.png'), isNotGift: true });
                    }
                    let source = [], i = 0;
                    while (source.length < 8 && i < 8) {
                        if (res[i]) source.push(res[i]);
                        if (diff[i]) source.push(diff[i]);
                        i++;
                    }
                    source.forEach((item, index) => {
                        item.min = 45 * index - 45 / 2 + 5;
                        item.max = 45 * (index + 1) - 45 / 2 - 5;
                    });
                    this.arrGift = source;
                    // console.log(this.arrGift.map(({GiftId, GiftName, min, max}) => ({ GiftId, GiftName, min, max })));
                    this.superBoxSuccess();
                }).toast(this.superBoxError.bind(this));
            },
            handleLuckDraw () {
                if (this.rotate > 360) return null;
                this.$api.doLuckDrawSubmit().then(res => {
                    const { LotteryUser, GiftType, LotteryUrl } = res || {};
                    let { GiftId } = LotteryUser || {};
                    if (!GiftId) {
                        // 没有中奖
                        const noGifts = this.arrGift.filter(res => res.isNotGift);
                        GiftId = noGifts[Math.floor(Math.random() * noGifts.length)].GiftId;
                    }
                    const { min, max, GiftName } = this.arrGift.find(item => item.GiftId === GiftId) || {};
                    if (!GiftName) {
                        throw '活动太火爆了，请稍后再试';
                    }
                    const r = Math.floor(Math.random() * (max - min)) + min;
                    this.duration = 5;
                    this.rotate = 360 * 10 + r;
                    setTimeout(() => {
                        this.duration = 0;
                        this.rotate = r;
                        setTimeout(() => {
                            if (LotteryUser) {
                                if (GiftType === 2 && LotteryUrl) {
                                    window.location.replace(LotteryUrl);
                                } else {
                                    // 中奖
                                    this.$router.replace({ path: '/receiving', query: LotteryUser });
                                }
                            } else {
                                // 未中奖
                                this.$router.replace({ path: '/status', query: { type: 'thanks' }});
                            }
                        }, 500);
                    }, this.duration * 1000 + 100);
                }).toast();
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .turntable-wrap{
        @extend %pr;
        @extend %ma;
        @extend %oh;
        padding-top: f(60);
        width: f(950);
        height: f(950);
        &:after{
            @extend %pa;
            @extend %l50;
            @extend %t0;
            margin-left: f(-67.5);
            content: '';
            width: f(135);
            height: f(171);
            background: url("~src/assets/images/pointer-icon.png") no-repeat;
            background-size: contain;
        }
    }
    .turntable-inner{
        @extend %w100;
        @extend %h100;
        @extend %pr;
        height: f(950);
        background: url("~src/assets/images/turntable-icon.png") no-repeat;
        background-size: contain;
        &:before{
            @extend %pa;
            @extend %t50;
            @extend %l50;
            @extend %br50;
            margin-left: f(-50);
            margin-top: f(-50);
            content: '';
            width: f(100);
            height: f(100);
            background-color: #6D0E0E;
            box-shadow: 0 0 f(20) f(10) #6D0E0E;
        }
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
            width: 33.4%;
            height: 50%;
            transform-origin: center bottom;
            font-size: f(29);
            color: #b9b9b9;
            &:nth-child(1){
                transform: rotate(0deg);
            }
            &:nth-child(2){
                transform: rotate(1 * 45deg);
            }
            &:nth-child(3){
                transform: rotate(2 * 45deg);
            }
            &:nth-child(4){
                transform: rotate(3 * 45deg);
            }
            &:nth-child(5){
                transform: rotate(4 * 45deg);
            }
            &:nth-child(6){
                transform: rotate(5 * 45deg);
            }
            &:nth-child(7){
                transform: rotate(6 * 45deg);
            }
            &:nth-child(8){
                transform: rotate(7 * 45deg);
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
</style>
