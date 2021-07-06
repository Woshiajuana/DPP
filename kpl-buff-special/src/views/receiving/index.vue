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
                    <dt>尊敬的用户：</dt>
                    <dd>嘉实多共竞王者平台是嘉实多（深圳）有限公司官方推出的专为嘉实多用户打造的礼品抽奖平台。为更好地提升用户服务及使用体验，我们可能会收集、保存并使用您的个人信息（例如姓名，手机号码、车牌号等）。</dd>
                    <dt>信息的收集和保存</dt>
                    <dd>我们将收集并储存您通过平台填写的方式向提供给我们的信息。我们可能会将您的个人信息分享给BP集团的其他公司以及第三方服务供应商（统称为“接受方”）。这些接受方可能在中国大陆以外的地区。</dd>
                    <dt>信息的使用</dt>
                    <dd>我们使用您的个人信息来向您提供所需的产品和/或服务。同时，我们将通过您的个人信息联系您，并向您介绍您可能感兴趣的嘉实多产品和/或服务。</dd>
                    <dt>信息的控制</dt>
                    <dd>当用户通过填写的方式向我们提供个人信息时，我们不会把用户的个人识别信息出售或出租给他人。我们将不会在未经用户事先知晓和许可的情况下，以任何的方式随意使用或分享用户在线提供给我们的个人识别信息。</dd>
                    <dt>信息的保护</dt>
                    <dd>我们制定了政策和程序，来促使您的个人信息在受我们控制时（包括接受方控制时）得到保护（无论是静止数据还是传送中的数据）。但是同其他公司一样，我们无法保证您的信息百分之百安全或保密，特别是在黑客袭击或第三方的服务器被入侵等特殊情况之下。</dd>
                    <dd>通过勾选“同意” 并继续使用我们的服务，您同意我们向您发送营销通讯，并确认您同意本政策。如您不希望使用我们的服务，请勾选“我不同意授权使用个人信息”并提交。</dd>
                    <dd>再次感谢您的信任与支持。</dd>
                    <dt>嘉实多（深圳）有限公司</dt>
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
        width: auto;
        max-width: f(175 * 3);
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
