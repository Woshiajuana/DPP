<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <div class="c-card">
                <div class="c-card-content">
                    <ul>
                        <li v-for="(item, index) in 10" :key="index">
                            <div class="image">
                                <img src="" alt=""/>
                            </div>
                            <div class="info">
                                <p>上传日期：2020-05-01</p>
                                <p>状态：<span>待审核</span></p>
                                <p>获得"嘉油"：<span>0滴</span></p>
                            </div>
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
    .c-card-content{
        min-height: j(600);
        ul{
            margin-top: j(-80);
        }
        li{
            @extend %df;
            @extend %aic;
            @extend %pr;
            @extend %ma;
            @extend %bsb;
            padding: j(30);
            width: j(570);
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
            &:last-child{
                &:after{
                    @extend %dn;
                }
            }
        }
    }
    .image{
        @extend %bsb;
        @extend %pr;
        width: j(138);
        height: j(138);
        margin-right: j(30);
        border: 1px solid #43a3fe;
        img{
            @extend %db;
            @extend %w100;
            @extend %h100;
        }
    }
    .info{
        @extend %df1;
        line-height: 1.6;
    }
</style>
