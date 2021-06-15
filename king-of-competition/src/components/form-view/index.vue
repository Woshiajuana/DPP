<template>
    <div class="form-view">
        <template v-for="(item, key) in objInput">
            <div class="form-update-cell"
                 v-if="item.useUpload">
                <div class="form-update">
                    <i></i>
                    <img v-if="item.value" :src="item.value"/>
                    <input type="file" accept='image/*' @change="handleChange(item, $event)"/>
                    <input style="display: none" type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                </div>
                <span>{{item.placeholder}}</span>
            </div>
            <div v-else-if="item.options"
                 class="form-cell c-border form-cell-select"
                 @click="handleSelect(item, key)"
                 :class="[item.classes]">
                <span class="form-value" :class="[!item.value && 'input-place']">{{item | filterValue}}</span>
                <template v-if="item.options">
                    <popup-picker
                        @input="handlePickerInput(item, key, $event)"
                        @on-hide="item.keyword = ''"
                        :show-cell="false"
                        :show.sync="item.is"
                        :data="item.options | filterOptions(item.keyword)"
                        :show-name="true"
                    ></popup-picker>
                    <div class="filter-input"
                         v-if="typeof item.keyword !== 'undefined'"
                         v-show="item.is && item.options.length">
                        <input type="text" v-model="item.keyword" maxlength="32" placeholder="快速搜索"/>
                    </div>
                </template>
            </div>
            <div v-else class="form-cell c-border"
                 :class="[item.classes]">
                <input
                    :maxlength="item.maxlength || 9999"
                    class="form-value"
                    :type="item.type || 'text'"
                    :placeholder="item.placeholder"
                    v-model="item.value"
                />
            </div>
            <div v-if="item.useCode"
                 @click="handleSendCode"
                 :class="[numCount !== numDefCount && 'disabled']"
                 class="form-cell c-border form-cell-half c-text-red form-code-button">
                <span>{{ numCount === numDefCount ? '发送验证码' : numCount + ' s'}}</span>
            </div>
        </template>
    </div>
</template>

<script>
    import { PopupPicker } from 'vux'

    export default {
        data () {
            const numDefCount = 60;
            return {
                numDefCount,
                numCount: numDefCount
            }
        },
        props: { objInput: { default: '' } },

        filters: {
            filterValue (item) {
                if (!item) return '';
                let { value, placeholder } = item;
                if (typeof value === 'object') {
                    value = value.name;
                }
                return value || placeholder;
            },
            filterOptions (options, keyword) {
                if (typeof keyword === 'undefined') {
                    return options.length ? [options] : [];
                }
                keyword = keyword.trim();
                let arr = [];
                if (options.length) {
                    arr = [keyword ? options.filter((item) => item.name.indexOf(keyword) > -1) : options];
                }
                if (!arr.length || !arr[0] || !arr[0].length) {
                    arr = [[{ name: '没有数据', value: null}]];
                }
                return arr;
            }
        },

        methods: {
            handleChange (item, event) {
                let imgFile = event.target.files[0];
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
                    item.value = base64;
                    event.srcElement && (event.srcElement.value = '');
                }).toast().finally(() => {
                    this.$vux.loading.hide();
                });
            },
            handleSelect (item, key) {
                if (!item.disabled && item.options) {
                    this.$emit('select', item, key)
                }
            },
            handlePickerInput (item, key, event) {
                let [ v ] = item.options.filter((item) =>
                    item.value + '' === event[0],
                );
                if (!v) return null;
                item.value = v;
                this.$emit('input', item, key);
            },
            handleSendCode () {
                if (this.numCount !== this.numDefCount) {
                    // 不相等
                    return null;
                }
                this.$emit('send', () => this.countDown());
            },
            countDown () {
                if (this.numCount <= 0) {
                    return this.numCount = this.numDefCount;
                }
                this.numCount--;
                setTimeout(this.countDown.bind(this), 1000);
            },
        },
        components: {
            PopupPicker,
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .form-view{
        @extend %df;
        @extend %fww;
        @extend %jcs;
        @extend %ma;
        margin-top: f(60);
        width: f(925);
    }
    .form-cell{
        @extend %bsb;
        @extend %pr;
        width: f(925);
        height: f(136);
        margin-bottom: f(50);
        background: url("data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAIDAQQJ/8QAKBAAAgEABgsBAAAAAAAAAAAAAAIBAxExUZGxExQhIzRBU2FxctEy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEFBv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOZhVuGT3bJRKkvbAo0Lq6bZ/bcu0HcM1EektjxGRipL2wHpISuNs2Ry7BEgGqS9sAAUq3DJ7tkoaVeimLfSjUq6um5T9Nza6O4VrD0lseIyG0q9FMW+jUlKtcblLI5td5CIAV0q9FMW+gBIq3DJ7tkoAFSHpLY8RkABCAAAf//Z");
        &.form-cell-half{
            width: f(445);
        }
        &.form-cell-select{
            @extend %df;
            @extend %aic;
            @extend %cp;
            .form-value{
                @extend %df;
                @extend %df1;
                @extend %aic;
                @extend %twno;
            }
            &:after{
                content: '';
                margin-top: j(22);
                margin-left: j(10);
                margin-right: j(20);
                border-width: j(18);
                border-style: solid;
                border-color: #80d4ff transparent transparent transparent;
            }
        }
        &.form-code-button{
            @extend %df;
            @extend %aic;
            @extend %jcc;
            @extend %cp;
            font-size: f(46);
            &.disabled{
                color: #999;
                cursor: default;
                text-shadow: none;
            }
        }
    }
    .form-value{
        @extend %w100;
        @extend %h100;
        @extend %bsb;
        color: $color-primary;
        background-color: transparent;
        border: none;
        font-size: f(46);
        padding: 0 f(35);
        &.input-place{
            color: #4a6385;
        }
    }
    .form-update-cell{
        @extend %w100;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %fdc;
        margin-top: f(30);
        span{
            @extend %fwb;
            margin-top: f(30);
            color: $color-primary;
            font-size: f(42);
        }
    }
    .form-update{
        @extend %pr;
        width: f(300);
        height: f(300);
        i{
            @extend %pa;
            @extend %t0;
            @extend %w100;
            @extend %l0;
            @extend %h100;
            /*background: url("~src/assets/images/update-icon.jpg") no-repeat;*/
            background-size: contain;
        }
        img,
        input{
            @extend %pa;
            @extend %w100;
            @extend %h100;
            @extend %t0;
            @extend %l0;
        }
        input{
            opacity: 0;
        }
    }

    .filter-input{
        @extend %pf;
        @extend %b0;
        @extend %l0;
        @extend %r0;
        font-size: j(24);
        background-color: rgba(255, 255, 255, .7);
        z-index: 11111;
        input{
            @extend %w100;
            @extend %bsb;
            padding: 0 j(32);
            height: j(60);
            background-color: transparent;
            border: none;
        }
    }
</style>
