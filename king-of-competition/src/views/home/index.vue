<template>
    <div>
        <div class="view-inner">
            <i class="rule-btn"></i>
            <i class="play-btn"></i>
            <div class="null-1"></div>
            <div class="button-group">
                <div class="c-button c-button-2">
                    <span>马上抽奖</span>
                </div>
                <div class="c-button c-button-1">
                    <span>立刻开战</span>
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
    .view-inner{
        @extend %pr;
        background: #020617 url("~src/assets/images/bg-2.jpg") center top no-repeat;
        background-size: j(750) auto;
    }
    .rule-btn{
        @extend %cp;
        @extend %pa;
        @extend %r0;
        top: j(186);
        width: j(101);
        height: j(54);
        background: url("~src/assets/images/rule-icon.jpg") no-repeat;
        background-size: contain;
        border-radius: j(27) 0 0 j(27);
    }
    .play-btn{
        @extend %cp;
        @extend %pa;
        top: j(665);
        right: j(55);
        width: j(150);
        height: j(55);
    }
    .null-1{
        height: j(1115);
    }
    .button-group{
        @extend %df;
        @extend %aic;
        @extend %jcc;
    }
</style>
