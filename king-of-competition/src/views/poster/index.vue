<template>
    <div>
        <img class="poster" src="$route.query.picPosterUrl" alt="海报"/>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .poster{
        @extend %w100;
        @extend %h100;
    }
</style>
