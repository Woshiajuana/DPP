<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <i class="title"></i>
            <div class="image-box">
                <img :src="$route.query.picUrl || require('src/assets/images/img-demo.jpg')"/>
                <div class="image-border"></div>
                <img style="opacity: 0" :src="$route.query.picPosterUrl">
            </div>
            <p class="tips">
                请长按图片保存您的海报
            </p>
            <div class="c-button c-button-2" @click="$router.replace('/luck-draw')">
                <span>马上抽奖</span>
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
        height: j(150);
        background: url("~src/assets/images/title-5.png") no-repeat;
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
            object-fit: contain;
            margin-top: j(-466 / 2 + 3);
            margin-left: j(-628 / 2 + 3);
            width: j(628);
            height: j(465);
            background: url("data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAIDAQQJ/8QAKBAAAgEABgsBAAAAAAAAAAAAAAIBAxExUZGxExQhIzRBU2FxctEy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEFBv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOZhVuGT3bJRKkvbAo0Lq6bZ/bcu0HcM1EektjxGRipL2wHpISuNs2Ry7BEgGqS9sAAUq3DJ7tkoaVeimLfSjUq6um5T9Nza6O4VrD0lseIyG0q9FMW+jUlKtcblLI5td5CIAV0q9FMW+gBIq3DJ7tkoAFSHpLY8RkABCAAAf//Z");
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
