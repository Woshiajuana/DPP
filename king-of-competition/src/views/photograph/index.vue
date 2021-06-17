<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <i class="title"></i>
            <div class="image-box">
                <img :src="objImage.base64 || require('src/assets/images/img-demo.jpg')"/>
                <div class="image-border"></div>
            </div>
            <p class="tips">
                请按照示例拍摄照片
                <br/>
                审核通过会获得“嘉油”
            </p>
            <div class="c-button c-button-1">
                <span>上传照片</span>
                <input type="file" accept='image/*' @change="handleChange"/>
            </div>
        </div>
        <div class="popup-cropper" v-if="isCropperPopup">
            <vue-cropper
                :img="objImage.base64"
                ref="cropper"
                autoCrop
                fixedBox
                :autoCropWidth="628 * 0.5"
                :autoCropHeight="465 * 0.5"
            ></vue-cropper>
            <div class="popup-cropper-button-group">
                <div class="popup-cropper-button" @click="handleCropperCancel">取消</div>
                <div class="popup-cropper-button" @click="handleCropperSure">确认</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { VueCropper }  from 'vue-cropper'
    export default {
        data () {
            return {
                objImage: '',
                isCropperPopup: false,
            };
        },
        methods: {
            handleSubmit () {
                if (!this.objImage) {
                    return this.$vux.toast.show('请选择照片');
                }
                const { head } = this.$route.query;
                const { base64 } = this.objImage;
                this.$vux.loading.show();
                this.$helper.loadAllImages([
                    require('src/assets/images/poster-bg.jpg'),
                    `${head}?v=${Date.now()}`,
                    base64,
                ]).then(res => {
                    const [ bg, avatar, photo ] = res;
                    const innerWidth = window.innerWidth;
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const devicePixelRatio = window.devicePixelRatio || 1;
                    const backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                        ctx.mozBackingStorePixelRatio ||
                        ctx.msBackingStorePixelRatio ||
                        ctx.oBackingStorePixelRatio ||
                        ctx.backingStorePixelRatio || 1;
                    const ratio = devicePixelRatio / backingStoreRatio;
                    const rpx = innerWidth < 750 ? innerWidth / 750 : 1;

                    canvas.width = 750 * rpx * ratio;
                    canvas.height = 1450 * rpx * ratio;
                    // console.log('ratio => ', ratio);
                    // console.log('rpx => ', rpx);
                    ctx.scale(ratio, ratio);

                    // 绘制口号 和 背景
                    ctx.save();
                    // console.log(bg.width, bg.height);
                    ctx.drawImage(bg, 0, 0, bg.width * rpx, bg.height * rpx);
                    ctx.restore();

                    // 绘制照片
                    ctx.save();
                    ctx.drawImage(photo, (750 - 620) * 0.5 * rpx, 408 * rpx, 620 * rpx, 465 * rpx);
                    ctx.restore();

                    // 绘制头像
                    ctx.save();
                    ctx.arc((750 * 0.5 + 3) * rpx, (320 + 50) * rpx, 50 * rpx, 0, 2 * Math.PI);
                    ctx.clip();
                    ctx.drawImage(avatar, (750 * 0.5 - 50 + 3) * rpx, 320 * rpx, 100 * rpx, 100 * rpx);
                    ctx.restore();

                    return canvas.toDataURL();
                }).then(res => {
                    return this.$image.compressQuality(res, { width: 1024 });
                }).then(res => {
                    return this.$api.doPhotographSubmit({
                        picBase: base64.split(',')[1],
                        picPosterBase: res.base64.split(',')[1],
                    });
                }).then(res => {
                    this.$router.replace({ path: '/poster', query: res });
                }).toast().finally(() => {
                    this.$vux.loading.hide();
                });
            },
            handleChange (event) {
                let imgFile = event.target.files[0];
                event.target.value = '';
                if (!imgFile) return null;
                //后缀选取
                if (!/\/(?:jpeg|jpg|png)/i.test(imgFile.type)) {
                    return this.$vux.toast.text('图片格式不支持');
                }
                if (imgFile.size >= 1024 * 1024 * 10) {
                    return this.$vux.toast.text('图片格式过大');
                }
                this.$vux.loading.show();
                this.$image.toBase64(imgFile).then((base64) => {
                    return this.$image.compressQuality(base64, { width: 1080 });
                }).then(res => {
                    this.objImage = res;
                    this.isCropperPopup = true;
                }).toast().finally(() => {
                    this.$vux.loading.hide();
                });
            },
            handleCropperSure () {
                // 获取截图的base64 数据
                this.$nextTick(() => {
                    this.$refs.cropper.getCropData(data => {
                        this.objImage.base64 = data;
                        this.isCropperPopup = false;
                        this.handleSubmit();
                    });
                });
            },
            handleCropperCancel () {
                this.objImage = '';
                this.isCropperPopup = false;
            },
        },
        components: {
            VueCropper,
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .null-1{
        height: j(275);
    }
    .title{
        @extend %w100;
        height: j(165);
        background: url("~src/assets/images/title-3.png") no-repeat;
        background-size: contain;
    }
    .image-box{
        @extend %pr;
        @extend %df;
        @extend %jcc;
        @extend %aic;
        height: j(530);
        img{
            @extend %pa;
            @extend %db;
            @extend %t50;
            @extend %l50;
            object-fit: contain;
            margin-top: j(-466 / 2 + 3);
            margin-left: j(-628 / 2 + 3);
            width: j(628);
            height: j(465);
            background: url("data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAIDAQQJ/8QAKBAAAgEABgsBAAAAAAAAAAAAAAIBAxExUZGxExQhIzRBU2FxctEy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEFBv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOZhVuGT3bJRKkvbAo0Lq6bZ/bcu0HcM1EektjxGRipL2wHpISuNs2Ry7BEgGqS9sAAUq3DJ7tkoaVeimLfSjUq6um5T9Nza6O4VrD0lseIyG0q9FMW+jUlKtcblLI5td5CIAV0q9FMW+gBIq3DJ7tkoAFSHpLY8RkABCAAAf//Z");
        }
    }
    .image-border{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        @extend %w100;
        @extend %h100;
        background: url("~src/assets/images/border-bg-1.png") no-repeat;
        background-size: contain;
    }
    .tips{
        @extend %tac;
        color: #b2e5ff;
        font-size: j(25);
        line-height: 1.6;
        margin:  j(30) 0;
    }
    .popup-cropper{
        @extend %pf;
        @extend %w100;
        @extend %t0;
        @extend %l0;
        @extend %h100;
    }
    .popup-cropper-button-group{
        @extend %pf;
        @extend %b0;
        @extend %w100;
        @extend %l0;
        @extend %df;
        @extend %aic;
        @extend %jcs;
        @extend %bsb;
        /*padding: j(20);*/
    }
    .popup-cropper-button{
        @extend %df;
        @extend %df1;
        @extend %aic;
        @extend %jcc;
        @extend %cfff;
        @extend %cp;
        /*width: j(120);*/
        height: j(88);
        font-size: j(30);
        &:first-child{
            background-color: #999;
        }
        &:last-child{
            background-color: $color-danger;
        }
    }
    .c-button{
        @extend %pr;
        input{
            @extend %pa;
            @extend %db;
            @extend %t0;
            @extend %l0;
            @extend %w100;
            @extend %h100;
            opacity: 0;
        }
    }
</style>
