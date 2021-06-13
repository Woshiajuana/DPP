<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <i class="title"></i>
            <form-view
                @send="handleSmsSend"
                @select="handleSelect"
                :obj-input="objInput"
            ></form-view>
            <div class="c-button c-button-1">
                <span>注册</span>
            </div>
        </div>
    </div>
</template>

<script>
    import FormView from 'src/components/form-view'
    import DataMixin from './data.mixin'

    export default {
        mixins: [
            DataMixin,
        ],
        methods: {
            handleSmsSend () {},
            handleSelect () {},
        },
        components: {
            FormView,
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .null-1{
        height: j(250);
    }
    .title{
        @extend %db;
        @extend %ma;
        width: j(400);
        height: j(120);
        background: url("~src/assets/images/title-1.png") no-repeat;
        background-size: contain;
    }
    .c-button{
        margin-top: j(100);
    }
</style>
