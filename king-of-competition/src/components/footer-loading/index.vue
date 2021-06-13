
<template>
    <div class="footer-loading" :class="[isLoading && 'hide']">
        <div class="footer-loading-content">
            <img v-if="isLoading" class="icon" src="~src/assets/images/loading.gif"/>
            <span>{{isLoading ? '加载中...' : '到底了哦'}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isLoading: { default: true }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .footer-loading{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        padding: j(16 * 2) j(50 * 2);
        &.hide{
            &:before,
            &:after{
                @extend %dn;
            }
        }
        &:after{
            @extend %df1;
            content: '';
            height: 1px;
            background-color: #ddd;
        }
        &:before{
            @extend %df1;
            content: '';
            height: 1px;
            background-color: #ddd;
        }
    }
    .footer-loading-content{
        @extend %df;
        @extend %aic;
        @extend %c9;
        @extend %jcc;
        font-size: j(12 * 2);
        margin: 0 j(20 * 2);
    }
    .icon{
        width: j(40 * 2);
        height: j(40 * 2);
    }
</style>
