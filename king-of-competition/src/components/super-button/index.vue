<template>
    <button
        @click="$emit('click', $event)"
        :class="[disabled && 'is-disabled']"
        :disabled="disabled"
        class="super-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            disabled: {
                default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .super-button{
        @extend %df;
        @extend %cp;
        @extend %jcc;
        @extend %aic;
        @extend %cfff;
        @extend %bsb;
        @extend %ma;
        margin-top: j(40);
        font-size: j(16);
        width: j(335);
        height: j(44);
        border: none;
        border-radius: j(4);
        background-color: $color-primary;
        &.is-disabled{
            background-color: #C9C9C9;
            cursor: not-allowed;
        }
    }
</style>
