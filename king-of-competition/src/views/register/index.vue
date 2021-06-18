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

            <div class="agreement"
                 @click="isPrivacy = !isPrivacy"
                 :class="[isPrivacy && 'active']">
                <i></i>
                <span>阅读并勾选</span>
                <strong @click.stop="isPopup = true">《用户知情同意书》</strong>
            </div>
            <div class="c-button c-button-1" @click="handleSubmit">
                <span>注册</span>
            </div>
        </div>

        <div class="popup-wrap" v-if="isPopup">
            <div class="popup-inner popup-status-inner c-border">
                <h2>用户知情同意书</h2>
                <dl class="popup-content">
                    <dt>用户知情同意书</dt>
                    <dd>用户知情同意书用户知情同意书用户知情同意书用户知情同意书用户知情同意书</dd>
                    <dt>用户知情同意书</dt>
                    <dd>用户知情同意书用户知情同意书用户知情同意书用户知情同意书用户知情同意书</dd>
                    <dt>用户知情同意书</dt>
                    <dd>用户知情同意书用户知情同意书用户知情同意书用户知情同意书用户知情同意书</dd>
                    <dd>用户知情同意书用户知情同意书用户知情同意书用户知情同意书用户知情同意书</dd>
                    <dd>用户知情同意书用户知情同意书用户知情同意书用户知情同意书用户知情同意书</dd>
                    <dd>用户知情同意书用户知情同意书用户知情同意书用户知情同意书用户知情同意书</dd>
                    <dd>用户知情同意书用户知情同意书用户知情同意书用户知情同意书用户知情同意书</dd>
                </dl>
            </div>
            <i class="popup-close" @click="isPopup = false"></i>
        </div>
    </div>
</template>

<script>
    import FormView from 'src/components/form-view'
    import FormViewMixin from 'src/mixins/form-view.mixin'
    import DataMixin from './data.mixin'

    export default {
        mixins: [
            DataMixin,
            FormViewMixin,
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
            handleSubmit () {
                if (this.$validate.check(this.objInput)) {
                    return null;
                }
                if (!this.isPrivacy) {
                    return this.$vux.toast.show('请先阅读并勾选用户知情同意书');
                }
                const { province, city, store, ...options } = this.$validate.input(this.objInput);
                this.$api.doUserRegister({
                    ...options,
                    province: province.name,
                    city: city.name,
                    store: store.name,
                }).then(() => {
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
        margin-top: j(20);
    }

    .agreement{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        margin-top: f(20);
        color: $color-primary;
        font-size: f(35);
        margin-bottom: f(50);
        &.active{
            i{
                &:after{
                    @extend %db;
                }
            }
        }
        i{
            @extend %bsb;
            @extend %br50;
            @extend %df;
            @extend %aic;
            @extend %jcc;
            margin-right: f(20);
            width: 12px;
            height: 12px;
            border: 1px solid $color-primary;
            &:after{
                @extend %dn;
                @extend %br50;
                content: '';
                width: 8px;
                height: 8px;
                background-color: $color-primary;
            }
        }
    }
    .popup-wrap{
        @extend %pf;
        @extend %t0;
        @extend %l0;
        @extend %w100;
        @extend %h100;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %fdc;
        z-index: 999;
        background-color: rgba(0, 0, 0, .6);
    }
    .popup-inner{
        @extend %bsb;
        overflow: auto;
        max-height: 60%;
        background: url("data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAIDAQQJ/8QAKBAAAgEABgsBAAAAAAAAAAAAAAIBAxExUZGxExQhIzRBU2FxctEy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEFBv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOZhVuGT3bJRKkvbAo0Lq6bZ/bcu0HcM1EektjxGRipL2wHpISuNs2Ry7BEgGqS9sAAUq3DJ7tkoaVeimLfSjUq6um5T9Nza6O4VrD0lseIyG0q9FMW+jUlKtcblLI5td5CIAV0q9FMW+gBIq3DJ7tkoAFSHpLY8RkABCAAAf//Z");
        width: f(1000);
        padding: f(80);
        color: $color-primary;
        .c-button-4{
            margin-top: f(40);
        }
        p{
            @extend %tac;
        }
        h2{
            @extend %tac;
            font-size: f(56);
        }
    }
    .popup-content{
        margin-top: f(50);
        font-size: f(36);
        line-height: 1.6;
        dt{
            @extend %fwb;
            margin-top: f(32);
            margin-bottom: f(10);
        }
        dd{

        }
    }
    .popup-close{
        @extend %cp;
        margin-top: f(80);
        width: f(145);
        height: f(145);
        background: url("~src/assets/images/popup-close-icon.png") no-repeat;
        background-size: contain;
    }
</style>
