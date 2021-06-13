<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <div class="c-card">
                <dt class="title">
                    <span>6月王者排位</span>
                </dt>
                <div class="c-card-content">
                    <ul>
                        <li v-for="(item, index) in 10" :key="index">
                            <i>{{index}}</i>
                            <span>李某某</span>
                            <span>途虎</span>
                            <span>上海门店1</span>
                            <span>1200滴</span>
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
                &:last-child{
                    @extend %tar;
                    @extend %fwb;
                    @extend %cfff;
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
