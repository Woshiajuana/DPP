
<template>

    <div class="super-box">

        <div class="super-box-state state-loading"
             v-if="data.state === 'loading'">
            <img src="~src/assets/images/loading.gif"/>
<!--            <p>加载中...</p>-->
        </div>

        <div class="super-box-state state-empty"
             v-if="data.state === 'empty'">
            <img src="~src/assets/images/null-icon.png"/>
            <p>这里空空如也~~</p>
        </div>

        <div class="super-box-state state-error"
             v-if="data.state === 'error'">
            <p>{{data.error | filterError}}</p>
            <div class="super-box-button"
                 @click="$emit('refresh')">
                <span>刷新</span>
            </div>
        </div>

        <div v-if="data.state === 'success'">
            <slot></slot>
        </div>

        <slot name="suffix"></slot>

    </div>

</template>

<script>
    export default {
        props: {
            data: { default: () => ({ state: 'loading', error: '' }) },
        },
        filters: {
            filterError (err) {
                return typeof err === 'object'
                    ? err.errMsg || err.Message || err.message || JSON.stringify(err)
                    : err + '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .super-box{
        min-height: 100%;
    }
    .super-box-state{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        @extend %r0;
        @extend %b0;
        @extend %df;
        @extend %aic;
        @extend %fdc;
        @extend %jcc;
        //padding-bottom: j(100 * 2);
        &.state-loading{
            img{
                width: j(50 * 2);
                height: j(50 * 2);
                margin-bottom: j(3 * 2);
                background-color: rgba(0, 0, 0, .1);
                border-radius: j(20);
            }
        }
        &.state-empty{
            img{
                width: j(100 * 2);
                margin-bottom: j(10 * 2);
            }
        }
        &.state-error{
            p{
                color: #ee0000;
            }
        }
        p{
            @extend %ma;
            @extend %tac;
            color: #fff;
            width: j(300 * 2);
            font-size: j(14 * 2);
        }
    }
    .super-box-button{
        @extend %cfff;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %cp;
        margin-top: j(10 * 2);
        font-size: j(14 * 2);
        border-radius: j(4 * 2);
        width: j(72 * 2);
        height: j(30 * 2);
        background-color: #43a3fe;
        box-shadow: 0 j(3 * 2) 0 0 rgb(80, 148, 217);
    }
</style>
