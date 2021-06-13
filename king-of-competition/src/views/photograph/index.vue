<template>
    <div>
        <div class="view-inner">
            <div class="null-1"></div>
            <i class="title"></i>
            <div class="image-box">
                <img :src="base64 || require('src/assets/images/img-demo.jpg')"/>
                <div class="image-border"></div>
                <input type="file" accept='image/*' @change="handleChange"/>
            </div>
            <p class="tips">
                请按照示例拍摄照片
                <br/>
                审核通过会获得“嘉油”
            </p>
            <div class="c-button c-button-1"
                 @click="handleSubmit">
                <span>上传照片</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                base64: '',
            };
        },
        methods: {
            handleSubmit () {
                if (!this.base64) {
                    return this.$vux.toast.show('请选择照片');
                }
                this.$api.doPhotographSubmit({
                    picBase: this.base64.split(',')[1],
                }).then(res => {
                }).toast();
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
                    return this.$image.compressQuality(base64, { width: 1024 });
                }).then(({ base64 }) => {
                    this.base64 = base64;
                }).toast().finally(() => {
                    this.$vux.loading.hide();
                });
            },
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
        input{
            @extend %pa;
            @extend %db;
            @extend %t50;
            @extend %l50;
            margin-top: j(-466 / 2 + 3);
            margin-left: j(-628 / 2 + 3);
            width: j(628);
            height: j(465);
            opacity: 0;
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
</style>
