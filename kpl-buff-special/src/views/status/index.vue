<template>
    <div>
        <div class="view-inner">
            <div class="c-null"></div>
            <img src="~src/assets/images/slogan-2.png" class="c-slogan">
            <img v-if="$route.query.type === 'examine'" class="static-icon" src="~src/assets/images/static-icon-3.png">
            <template v-else-if="$route.query.type === 'thanks'">
                <img class="static-icon" src="~src/assets/images/static-icon-2.png">
                <p class="tips">
                    很抱歉<br/>
                    您未抽到任何礼品<br/>
                    请下次再参与<br/>
                </p>
            </template>
            <template v-else-if="$route.query.type+'' === '1'">
                <img class="static-icon" src="~src/assets/images/static-icon-1.png">
                <p class="tips">
                    感谢您参与活动<br/>
                    奖品将在1~3个工作日内审核完成后<br/>
                    安排寄送，请注意查收<br/>
                </p>
            </template>
            <template v-else-if="$route.query.type+'' === '2'">
                <img class="static-icon" src="~src/assets/images/static-icon-1.png">
                <p class="tips">
                    感谢您参与活动<br/>
                    奖品将在1~3个工作日内审核完成后<br/>
                    通过短信发放，请注意查收<br/>
                </p>
            </template>
            <div class="c-button c-button-2" @click="$router.go(-1)">
                <span>返回首页</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .static-icon{
        @extend %db;
        @extend %ma;
        width: f(580);
    }
    .tips{
        @extend %tac;
        font-size: f(57);
        color: $color-primary;
    }
    .c-button{
        margin-top: f(100);
    }
</style>
