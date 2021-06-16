<template>
    <div>
        <super-box
            @refresh="reqDataList"
            :data="superBox$"
            class="view-inner">
            <div class="null-1"></div>
            <div class="c-card">
                <div class="c-card-content">
                    <ul>
                        <li v-for="(item, index) in arrData" :key="index">
                            <div class="image" @click="preview = item.picUrl">
                                <img :src="item.picUrl" />
                            </div>
                            <div class="info">
                                <p>上传日期：{{item.date}}</p>
                                <p>状态：<strong :class="['status-' + item.state]">{{$config.PICTURE_STATUS.labelByValue[item.state]}}</strong></p>
                                <p>获得"嘉油"：<strong>{{item.score}}滴</strong></p>
                            </div>
                        </li>
                    </ul>
                </div>
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
    export default {
        mixins: [
            SuperBoxMixin,
        ],
        data () {
            return {
                arrData: '',
                preview: '',
            }
        },
        created() {
            this.reqDataList();
        },
        methods: {
            reqDataList () {
                this.superBoxLoading();
                this.$api.reqPictureList().then(res => {
                    this.arrData = res;
                    this.arrData.length
                        ? this.superBoxSuccess()
                        : this.superBoxEmpty();
                }).toast(this.superBoxError.bind(this));
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .null-1{
        height: j(300);
    }
    .c-card-content{
        min-height: j(600);
        ul{
            margin-top: j(-80);
        }
        li{
            @extend %df;
            @extend %aic;
            @extend %pr;
            @extend %ma;
            @extend %bsb;
            padding: j(30);
            width: j(570);
            color: #b2e5ff;
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
    }
    .image{
        @extend %bsb;
        @extend %pr;
        width: j(138);
        height: j(138);
        margin-right: j(30);
        border: 1px solid #43a3fe;
        img{
            @extend %db;
            @extend %w100;
            @extend %h100;
            object-fit: contain;
        }
    }
    .info{
        @extend %df1;
        line-height: 1.6;
    }
    .status-0{
        color: #ffb642;
    }
    .status-1{
        color: #15ab1a;
    }
    .status-2{
        color: #ee0000;
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
