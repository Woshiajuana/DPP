<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <i class="title"></i>
            <div class="image-box">
                <img src="~src/assets/images/img-demo.jpg"/>
                <div class="image-border"></div>
                <input type="file"/>
            </div>
            <p class="tips">
                请按照示例拍摄照片
                <br/>
                审核通过会获得“嘉油”
            </p>
            <div class="c-button c-button-1"
                 @click="$router.push('/luck-draw')">
                <span>上传照片</span>
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
        height: j(275);
    }
    .title{
        @extend %w100;
        height: j(165);
        background: url("~src/assets/images/title-3.png") no-repeat;
        background-size: contain;
    }
    .image-box{
        @extend %pr;
        @extend %df;
        @extend %jcc;
        @extend %aic;
        height: j(530);
        img{
            @extend %pa;
            @extend %db;
            @extend %t50;
            @extend %l50;
            margin-top: j(-466 / 2 + 3);
            margin-left: j(-628 / 2 + 3);
            width: j(628);
            height: j(465);
        }
        input{
            @extend %pa;
            @extend %db;
            @extend %t50;
            @extend %l50;
            margin-top: j(-466 / 2 + 3);
            margin-left: j(-628 / 2 + 3);
            width: j(628);
            height: j(465);
            opacity: 0;
        }
    }
    .image-border{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        @extend %w100;
        @extend %h100;
        background: url("~src/assets/images/border-bg-1.png") no-repeat;
        background-size: contain;
    }
    .tips{
        @extend %tac;
        color: #b2e5ff;
        font-size: j(25);
        line-height: 1.6;
        margin:  j(30) 0;
    }
</style>
