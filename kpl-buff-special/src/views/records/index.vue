<template>
    <div ref="scroller">
        <super-box
            @refresh="handleRefresh"
            :data="superBox$"
            class="view-inner">
            <div class="null"></div>
            <div class="record c-border">
                <div class="record-cell"
                     v-for="(item, index) in pagingData"
                     :key="index">
                    <div class="record-gift-content">
                        <img class="record-gift" :src="item.ImageUrl || require('src/assets/images/gift-smiling-face.png')"/>
                    </div>
                    <div class="record-info">
                        <span>{{item.Nickname}}</span>
                        <span>{{item.Mobile}}</span>
                        <span>{{item.GiftName}}</span>
                    </div>
                    <div class="record-status">
                        <span class="record-examine-status" :class="[formatLotteryStatus(item.Status).classes]">{{formatLotteryStatus(item.Status).label}}</span>
                        <template v-if="$config.LOTTERY_STATUS.valueByKey.YCJDLJ === item.Status">
                            <div class="c-button c-button-3"
                                 v-if="item.LotteryUrl "
                                 @click="handleExchange(item)">
                                <span>前往领取</span>
                            </div>
                            <div class="c-button c-button-3"
                                 @click="$router.replace({ path: '/receiving', query: item })"
                                 v-else>
                                <span>前往领奖</span>
                            </div>
                        </template>
                    </div>
                </div>
                <footer-loading
                    v-if="pagingTotal > 0"
                    :is-loading="pagingTotal > pagingData.length"
                ></footer-loading>
            </div>
            <div class="c-button c-button-2" @click="$router.go(-1)">
                <span>返回首页</span>
            </div>
        </super-box>
        <div class="popup-image"
             @click="preview = false"
             v-if="preview">
            <img :src="preview">
        </div>
    </div>
</template>

<script>
    import SuperBoxMixin from 'src/mixins/super-box.mixin'
    import PagingMixin from 'src/mixins/paging.mixin'
    import FooterLoading from 'src/components/footer-loading'

    export default {
        mixins: [
            PagingMixin,
            SuperBoxMixin,
        ],
        data () {
            return {
                preview: '',
            }
        },
        created() {
            this.handleRefresh();
        },
        mounted () {
            this.$nextTick(() => {
                this.handleOnScroller = this.handleOnScroller.bind(this);
                this.$refs['scroller'].addEventListener('scroll', this.handleOnScroller);
            });
        },
        methods: {
            formatLotteryStatus (status) {
                return this.$config.LOTTERY_STATUS.options.find(item => item.value === status) || {};
            },
            handleRefresh (loading) {
                if (!this.pagingData.length) {
                    this.superBoxLoading();
                }
                this.pagingRefresh(loading);
            },
            pagingSetUrlParamsOptions () {
                return { fn: 'reqRecordsList' };
            },
            handleOnScroller () {
                let $el = this.$refs['scroller'];
                let { scrollTop = 0, scrollHeight = 0 } = $el;
                let height = $el.getBoundingClientRect().height;
                if (scrollHeight - scrollTop - height < 300) {
                    this.pagingLoad();
                }
            },
            handleExchange (item) {
                const { Id: LotteryUserId } = item;
                this.$api.doExchangeUrl({
                    LotteryUserId,
                }).then(res => {
                    if (res) {
                        window.location.href = res;
                    }
                }).toast();
            },
        },
        components: {
            FooterLoading,
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";

    .null{
        height: f(430);
    }
    .record{
        @extend %ma;
        width: f(955);
        background-color: rgba(0, 0, 0, .5);
    }
    .record-cell{
        @extend %df;
        @extend %aic;
        @extend %ma;
        width: f(890);
        padding: f(30) 0;
        border-bottom: j(1) solid #4e83ab;
    }
    .record-gift-content{
        @extend %pr;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        width: f(260);
        height: f(260);
        margin-right: j(10);
        background: url("~src/assets/images/record-gift-bg.png") center no-repeat;
        background-size: contain;
    }
    .record-gift{
        @extend %pr;
        object-fit: contain;
        width: f(162);
        height: f(162);
    }
    .record-info{
        @extend %df1;
        @extend %oh;
        @extend %df;
        @extend %fdc;
        @extend %fwb;
        font-size: f(35);
        line-height: 1.6;
        color: $color-primary;
    }
    .record-status{
        @extend %df;
        @extend %fdc;
        @extend %aic;
        min-width: f(256);
        font-size: f(35);
        line-height: 1.6;
        color: $color-primary;
    }
    .record-tips{
        @extend %df;
        padding: f(60);
        font-weight: 300;
        font-size: f(35);
        line-height: 1.6;
        color: $color-primary;
    }
    .c-button-2{
        margin-top: f(80);
    }
    .popup-image{
        @extend %pf;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %t0;
        @extend %l0;
        @extend %w100;
        @extend %h100;
        background-color: rgba(0, 0, 0, .6);
        img{
            @extend %db;
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>
