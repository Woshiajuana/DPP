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
            <div class="c-button c-button-1" @click="handleSubmit">
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
            handleSmsSend (cb) {
                if (this.$validate.check({x: this.objInput.mobile})) {
                    return null;
                }
                const { mobile } = this.$validate.input(this.objInput);
                this.$api.doSmsSend({ mobile }).then(() => {
                    this.$vux.toast.show('获取验证码成功');
                    cb();
                }).toast()
            },
            handleSelect () {},
            handleSubmit () {
                if (this.$validate.check(this.objInput)) {
                    return null;
                }
                const options = this.$validate.input(this.objInput);
                this.$api.doUserRegister(options).then(() => {
                    this.$vux.toast.show('注册成功');
                    this.$router.replace('/');
                }).toast();
            },
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
