<template>
    <div>
        <super-box
            @refresh="reqUserInfo"
            :data="superBox$"
            class="view-inner">
            <div class="null-1"></div>
            <div class="c-card user-section">
                <div class="c-card-content"></div>
                <div class="user-content">
                    <img :src="objData.head" class="user-avatar"/>
                    <div class="user-info">
                        <p>{{objData.name}}</p>
                        <p>{{objData.mobile}}</p>
                    </div>
                </div>
            </div>
            <div class="c-card statistics-section">
                <div class="c-card-content">
                    <ul class="statistics-content">
                        <li class="statistics-item">
                            <span class="statistics-label">本月拍照获得"嘉油"</span>
                            <span class="statistics-value">{{objData.scorePic}}滴</span>
                        </li>
                        <li class="statistics-item">
                            <span class="statistics-label">王者"嘉油"</span>
                            <span class="statistics-value">{{objData.scoreKing}}滴</span>
                        </li>
                        <li class="statistics-item">
                            <span class="statistics-label">本月剩余"嘉油"</span>
                            <span class="statistics-value">{{objData.scoreLeft}}滴</span>
                        </li>
                        <li class="statistics-item">
                            <span class="statistics-label">当前排名</span>
                            <span class="statistics-value">{{objData.rank}}</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="button-group">
                <div class="c-button c-button-2"
                     @click="$router.push('/picture')">
                    <span>我的照片</span>
                </div>
                <div class="c-button c-button-1"
                     @click="$router.push('/standings')">
                    <span>我的战绩</span>
                </div>
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
                objData: '',
            }
        },
        created() {
            this.reqUserInfo();
        },
        methods: {
            reqUserInfo () {
                this.superBoxLoading();
                this.$api.reqUserInfo().then(res => {
                    this.objData = res;
                    this.superBoxSuccess();
                }).toast(this.superBoxError.bind(this));
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .null-1{
        height: j(270);
    }
    .user-section{
        @extend %pr;
    }
    .user-content{
        @extend %pa;
        @extend %l0;
        @extend %t0;
        @extend %w100;
        @extend %h100;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        font-size: j(28);
        color: #b2e5ff;
    }
    .user-avatar{
        @extend %bsb;
        @extend %br50;
        border: j(3) solid #43a3fe;
        width: j(106);
        height: j(106);
        background-color: #f2f2f2;
        margin-right: j(30);
    }
    .user-info{
        line-height: 1.6;
    }
    .statistics-content{
        margin-top: j(-80);
    }
    .statistics-item{
        @extend %df;
        @extend %aic;
        @extend %pr;
        @extend %ma;
        @extend %jcs;
        @extend %fwb;
        width: j(570);
        height: j(100);
        font-size: j(28);
        &:after{
            @extend %pa;
            @extend %b0;
            @extend %r0;
            @extend %l0;
            content: '';
            height: 1px;
            background-image: linear-gradient(to right, #083266, #135fb3, #083266);
        }
        &:last-child{
            &:after{
                @extend %dn;
            }
        }
    }
    .statistics-label{
        color: #b2e5ff;
    }
    .statistics-value{
        @extend %cfff;
        font-size: j(36);
    }
    .button-group{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        padding: 0 j(50);
    }
</style>
