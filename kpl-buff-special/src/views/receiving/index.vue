<template>
    <div>
        <div class="view-inner">
            <div class="c-null"></div>
            <img src="~src/assets/images/slogan-2.png" class="c-slogan">
            <img class="gift-icon" :src="$route.query.ImageUrl">
            <h1>恭喜您抽中{{$route.query.GiftName}}</h1>
            <form-view
                @send="handleSmsSend"
                @select="handleSelect"
                :obj-input="objInput"
            ></form-view>
            <p class="c-tips">*输入有效信息，我们将问您发放奖品</p>
            <div class="agreement"
                 @click="IsPrivacy = !IsPrivacy"
                 :class="[IsPrivacy && 'active']">
                <i></i>
                <span>阅读并勾选</span>
                <strong @click.stop="isPopup = true">《用户知情同意书》</strong>
            </div>
            <div class="c-button c-button-1"
                 @click="handleSubmit">
                <span>提交</span>
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
    import DataMixin from './data.mixin'
    export default {
        mixins: [
            DataMixin,
        ],
        watch: {
            'objInput.Province.value' () {
                this.objInput.City.value = '';
                this.objInput.City.options = [];
            }
        },
        created () {
            console.log(this.$route.query);
        },
        methods: {
            handleSelect (item, key) {
                if (item.options.length) {
                    return item.is = true;
                }
                if (key === 'Province') {
                    this.$api.reqProvinceList().then(res => {
                        item.options = res.map(item => {
                            let { ProvinceName: value } = item;
                            return { ...item, value, name: value };
                        });
                        item.is = true;
                    }).toast();
                    return null;
                }
                if (key === 'City') {
                    if (this.$validate.check({ x: this.objInput.Province })) {
                        return null;
                    }
                    let { Province } = this.$validate.input(this.objInput);
                    this.$api.reqCityList({
                        ProvinceId: Province.ProvinceId,
                    }).then(res => {
                        item.options = res.map(item => {
                            let { CityName: value } = item;
                            return { ...item, value, name: value };
                        });
                        item.is = true;
                    }).toast();
                    return null;
                }
            },
            handleSmsSend (cb) {
                if (this.$validate.check({x: this.objInput.Mobile})) {
                    return null;
                }
                const { Mobile } = this.$validate.input(this.objInput);
                this.$api.doSmsSend({ Mobile }).then(() => {
                    cb();
                    this.$vux.toast.show('发送验证码成功');
                }).toast()
            },
            handleSubmit () {
                if (this.$validate.check(this.objInput)) {
                    return null;
                }
                if (!this.IsPrivacy) {
                    return this.$vux.toast.show('请先阅读并勾选用户知情同意书');
                }
                const { Province, City, ...options } = this.$validate.input(this.objInput);
                this.$api.doReceivingSubmit({
                    ...options,
                    City: City.value,
                    Province: Province.value,
                }).then(() => {
                    const { GiftType } = this.$route.query;
                    this.$router.replace({ path: '/status', query: { type: GiftType+'' } });
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
