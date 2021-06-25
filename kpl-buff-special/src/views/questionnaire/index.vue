<template>
    <div>
        <div class="view-inner">
            <div class="null"></div>
            <div class="questionnaire-section c-border">
                <dl class="questionnaire-cell"
                    v-for="(item, key) in objInput"
                    :key="key">
                    <dt>{{item.label}}</dt>
                    <template v-if="item.options">
                        <dd v-for="(option, index) in item.options"
                            @click="item.value = option"
                            :class="[item.value === option && 'active']"
                            :key="index">
                            <i></i>
                            <span>{{option}}</span>
                        </dd>
                    </template>
                    <dd v-else><textarea v-model="item.value" maxlength="64"></textarea></dd>
                </dl>
            </div>
            <div class="c-button c-button-2" @click="handleSubmit">
                <span>提 交</span>
            </div>
        </div>
    </div>
</template>

<script>

    import DataMixin from './data.mixin'

    export default {
        mixins: [
            DataMixin,
        ],
        methods: {
            handleSubmit () {
                if (this.$validate.check(this.objInput)) {
                    return null;
                }
                const options = this.$validate.input(this.objInput);
                this.$api.doQuestionnaireSubmit(options).then(() => {
                    this.$router.replace('/luck-draw');
                }).toast();
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
        &:last-child{
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
