<template>
    <div>
        <super-box
            @refresh="reqDataList"
            :data="superBox$"
            class="view-inner">
            <div class="null-1"></div>
            <div class="c-card">
                <dt class="title">
                    <span>6月王者排位</span>
                </dt>
                <div class="c-card-content">
                    <ul>
                        <li v-for="(item, index) in arrData" :key="index">
                            <i>{{item.rank}}</i>
                            <span>{{item.name}}</span>
                            <span>{{item.brand}}</span>
                            <span>{{item.store}}</span>
                            <span>{{item.score || 0}}滴</span>
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
                this.$api.reqRankingList().then(res => {
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
        height: j(315);
    }
    .c-card{
        @extend %pr;
    }
    .c-card-content{
        @extend %ma;
        line-height: 1.6;
        font-size: j(28);
        color: #b2e5ff;
        ul{
            margin-top: j(-80);
            min-height: j(600);
        }
        li{
            @extend %df;
            @extend %aic;
            @extend %pr;
            @extend %ma;
            width: j(570);
            height: j(90);
            i{
                width: j(50);
                @extend %fwb;
            }
            span{
                @extend %df1;
                @extend %twno;
                margin-right: j(3);
                &:last-child{
                    @extend %tar;
                    @extend %fwb;
                    @extend %cfff;
                    margin-right: 0;
                }
            }
            &:after{
                @extend %pa;
                @extend %b0;
                @extend %r0;
                @extend %l0;
                content: '';
                height: 1px;
                background-image: linear-gradient(to right, #083266, #135fb3, #083266);
            }
            &:nth-child(1){
                i{
                    @extend %pr;
                    &:after{
                        @extend %pa;
                        left: j(-5);
                        top: j(-20);
                        content: '';
                        width: j(30);
                        height: j(30);
                        background: url("~src/assets/images/icon-1.png") no-repeat;
                        background-size: contain;
                    }
                }
            }
            &:nth-child(2){
                i{
                    @extend %pr;
                    &:after{
                        @extend %pa;
                        left: j(-5);
                        top: j(-20);
                        content: '';
                        width: j(30);
                        height: j(30);
                        background: url("~src/assets/images/icon-2.png") no-repeat;
                        background-size: contain;
                    }
                }
            }
            &:nth-child(3){
                i{
                    @extend %pr;
                    &:after{
                        @extend %pa;
                        left: j(-5);
                        top: j(-20);
                        content: '';
                        width: j(30);
                        height: j(30);
                        background: url("~src/assets/images/icon-3.png") no-repeat;
                        background-size: contain;
                    }
                }
            }
        }
    }
    .title{
        @extend %fwb;
        @extend %tac;
        @extend %pa;
        @extend %w100;
        font-size: j(62);
        color: #e2ecf0;
        top: j(-20);
    }
</style>
