<template>
    <div>
        <super-box
            @refresh="reqDataList"
            :data="superBox$"
            class="view-inner">
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
                        <li v-for="(item, index) in arrData" :key="index">
                            <span>{{item.name}}</span>
                            <span>{{item.date}}</span>
                            <span v-if="item.state === 1">已领取</span>
                            <span v-else-if="item.state === 0">
                                <i class="btn" @click="$router.push({ path: '/receiving', query: item })">点击领取</i>
                            </span>
                            <span v-else></span>
                        </li>
                    </ul>
                </div>
            </div>
        </super-box>
    </div>
</template>

<script>
    import SuperBoxMixin from 'src/mixins/super-box.mixin'
    export default {
        mixins: [
            SuperBoxMixin,
        ],
        data () {
            return {
                arrData: '',
            }
        },
        created() {
            this.reqDataList();
        },
        methods: {
            reqDataList () {
                this.superBoxLoading();
                this.$api.reqStandingsList().then(res => {
                    this.arrData = res;
                    this.arrData.length
                        ? this.superBoxSuccess()
                        : this.superBoxEmpty();
                }).toast(this.superBoxError.bind(this));
            }
        },
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
