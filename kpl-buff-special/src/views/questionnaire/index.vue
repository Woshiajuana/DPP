<template>
    <div>
        <super-box
            @refresh="reqQuestionnaireInfo"
            :data="superBox$"
            class="view-inner">
            <div class="null"></div>
            <div class="questionnaire-section c-border">
                <dl class="questionnaire-cell"
                    :class="['type-' + item.QuestionType]"
                    v-for="(item, index) in arrData"
                    :key="index">
                    <dt>{{index + 1}}. {{item.Name}}</dt>
                    <template v-if="item.QuestionType === 1">
                        <dd v-for="(option, index) in item.Answers"
                            @click="item.value = option.Name"
                            :class="[item.value === option.Name && 'active']"
                            :key="index">
                            <i></i>
                            <span>{{option.Name}}</span>
                        </dd>
                    </template>
                    <dd v-else><textarea v-model.trim="item.value" maxlength="64"></textarea></dd>
                </dl>
            </div>
            <div class="c-button c-button-2" @click="handleSubmit">
                <span>提 交</span>
            </div>
        </super-box>
    </div>
</template>

<script>

    import SuperBoxMixin from 'src/mixins/super-box.mixin'

    export default {
        mixins: [
            SuperBoxMixin,
        ],
        data () {
            return {
                arrData: [],
            }
        },
        created() {
            this.reqQuestionnaireInfo();
        },
        methods: {
            reqQuestionnaireInfo () {
                this.superBoxLoading();
                this.$api.reqQuestionnaireInfo().then(res => {
                    this.arrData = res.map(item => Object.assign({ value: '' }, item));
                    this.superBoxSuccess();
                }).toast(this.superBoxError.bind(this));
            },
            handleSubmit () {
                try {
                    const options = {};
                    this.arrData.forEach((item, index) => {
                        const { Name, value } = item;
                        const i = index + 1;
                        if (!value) {
                            throw `亲~请回答第${i}个问题！`;
                        }
                        options[`Question${i}`] = Name;
                        options[`Answer${i}`] = value;
                    });
                    this.$api.doQuestionnaireSubmit(options).then(() => {
                        this.$router.replace('/luck-draw');
                    }).toast();
                } catch (err) {
                    this.$vux.toast.show(err);
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .null{
        height: f(430);
    }
    .questionnaire-section{
        @extend %ma;
        @extend %pr;
        @extend %fwb;
        padding: f(100) 0 f(80);
        font-size: f(35);
        color: $color-primary;
        width: f(955);
        background-color: rgba(0, 0, 0, .5);
        &:after{
            @extend %pa;
            @extend %l50;
            top: j(-50);
            margin-left: f(-320);
            content: '';
            width: f(640);
            height: f(160);
            background: url("~src/assets/images/questionnaire-icon.png") no-repeat;
            background-size: contain;
        }
    }
    .questionnaire-cell{
        @extend %df;
        @extend %fww;
        padding: f(40);
        margin: 0 f(20);
        border-bottom: 1px solid #4f84ac;
        &.type-2{
            border-bottom: none;
            dd{
                @extend %w100;
            }
        }
        dt{
            @extend %w100;
            margin-bottom: f(20);
        }
        dd{
            @extend %df;
            @extend %aic;
            @extend %cp;
            @extend %bsb;
            width: 50%;
            padding: f(5) 0;
            &.active{
                i{
                    &:after{
                        @extend %db;
                    }
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
                @extend %br50;
                @extend %dn;
                content: '';
                width: 8px;
                height: 8px;
                background-color: $color-primary;
            }
        }
        textarea{
            @extend %bsb;
            @extend %w100;
            padding: f(30);
            font-size: f(35);
            color: $color-primary;
            height: f(350);
            background-color: transparent;
            border: 1px solid $color-primary;
        }
    }
    .c-button{
        @extend %pr;
        @extend %oh;
    }
    .wx-wrapper {
        position: absolute;
        left:0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        overflow: hidden;
        z-index: 1;
    }
</style>
