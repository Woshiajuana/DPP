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
            <p class="c-tips">*输入有效信息，我们将问您发放奖品</p>
            <div class="c-button c-button-1"
                 @click="handleSubmit">
                <span>提交</span>
            </div>
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
                    cb();
                    this.$vux.toast.show('发送验证码成功');
                }).toast()
            },
            handleSubmit () {
                if (this.$validate.check(this.objInput)) {
                    return null;
                }
                const { province, city, ...options } = this.$validate.input(this.objInput);
                const { id } = this.$route.query;
                this.$api.doReceivingSubmit({
                    ...options,
                    id,
                    province: province.name,
                    city: city.name,
                }).then(() => {
                    this.$vux.toast.show('提交成功');
                    this.$router.go(-1);
                }).toast()
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
    .view-inner{
        h1{
            @extend %tac;
            margin-top: f(20);
            color: $color-primary;
            font-size: f(55);
        }
    }
    .gift-icon{
        @extend %db;
        @extend %ma;
        width: f(175 * 3);
        height: f(125 * 3);
    }

    .c-button{
        margin-top: j(20);
    }
</style>
