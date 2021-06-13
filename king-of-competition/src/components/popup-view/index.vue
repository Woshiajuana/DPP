
<template>
    <div class="popup-wrap">
        <div class="popup-inner">
            <img src="~src/assets/images/popup-bg.jpg"/>
            <i class="popup-close" @click="$emit('hide')"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: { default: '' },
            useHeader: { default: true },
            isShow: { default: false }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .popup-wrap{
        @extend %pf;
        @extend %w100;
        @extend %h100;
        @extend %t0;
        @extend %l0;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        z-index: 98;
        background-color: rgba(0, 0, 0, .5);
    }
    .popup-inner{
        @extend %pr;
        background: url("~src/assets/images/popup-bg.jpg") no-repeat;
        background-size: contain;
        img{
            @extend %db;
            @extend %oh;
            border-radius: j(20);
            width: j(617);
            height: j(505);
        }
    }
    .popup-close{
        @extend %pa;
        @extend %cp;
        width: j(55);
        height: j(55);
        right: j(-10);
        top: j(-10);
        background: url("~src/assets/images/popup-close-icon.png") no-repeat;
        background-size: contain;
    }
</style>
