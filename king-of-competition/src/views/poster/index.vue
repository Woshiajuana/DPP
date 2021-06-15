<template>
    <div>
        <img class="poster" :src="$route.query.picPosterUrl" alt="海报"/>
        <div class="c-button c-button-1">
            <span>长按保存图片</span>
            <img :src="$route.query.picPosterUrl" alt="海报"/>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .poster{
        @extend %w100;
        height: auto;
    }
    .c-button{
        @extend %pf;
        @extend %l50;
        bottom: j(100);
        margin-left: j(-130);
        img{
            @extend %pa;
            @extend %w100;
            @extend %h100;
            @extend %t0;
            @extend %l0;
            opacity: 0;
        }
    }
</style>
