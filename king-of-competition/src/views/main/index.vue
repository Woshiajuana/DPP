<template>
    <div class="main-wrap">
        <router-view class="view-container" ref="children"></router-view>
        <div class="tab-section">
            <router-link to="/" exact class="tab-item">
                <span>首页</span>
            </router-link>
            <router-link to="/ranking" class="tab-item">
                <span>王者排位</span>
            </router-link>
            <router-link to="/mine" class="tab-item">
                <span>个人中心</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .main-wrap{
        @extend %df;
        @extend %fdc;
        @extend %ma;
        width: j(750);
    }
    .view-container{
        @extend %df1;
        @extend %w100;
        overflow-y: auto;
    }
    .tab-section{
        @extend %df;
        @extend %aic;
        height: j(130);
    }
    .tab-item{
        @extend %df1;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %h100;
        @extend %cp;
        font-size: j(24);
        color: #84ade5;
        background: url("~src/assets/images/tab-bg-1.jpg") repeat-x;
        background-size: 100% 100%;
        &.router-link-active{
            @extend %cfff;
            background: url("~src/assets/images/tab-bg-2.jpg") no-repeat;
            background-size: 100% 100%;
        }
    }
</style>
