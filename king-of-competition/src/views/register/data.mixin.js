
export default {
    data () {
        return {
            objInput: {
                brand: {
                    value: '',
                    placeholder: '请填写连锁品牌',
                    use: [
                        { nonempty: true, prompt: '请填写连锁品牌', },
                    ],
                },
                province: {
                    value: '',
                    classes: 'form-cell-half',
                    placeholder: '请选择省份',
                    is: false,
                    keyword: '',
                    options: [],
                    use: [
                        { nonempty: true, prompt: '请选择省份', },
                    ],
                },
                city: {
                    value: '',
                    classes: 'form-cell-half',
                    placeholder: '请选择城市',
                    is: false,
                    keyword: '',
                    options: [],
                    use: [
                        { nonempty: true, prompt: '请选择城市', },
                    ],
                },
                store: {
                    value: '',
                    placeholder: '请填写门店',
                    use: [
                        { nonempty: true, prompt: '请填写门店', },
                    ],
                },
                name: {
                    value: '',
                    placeholder: '请填写姓名',
                    use: [
                        { nonempty: true, prompt: '请填写姓名', },
                    ],
                },
                mobile: {
                    value: '',
                    type: 'tel',
                    maxlength: 11,
                    placeholder: '请填写手机号',
                    use: [
                        { nonempty: true, prompt: '请填写手机号', },
                    ],
                },
                code: {
                    value: '',
                    classes: 'form-cell-half',
                    type: 'tel',
                    maxlength: 6,
                    placeholder: '验证码',
                    useCode: true,
                    use: [
                        { nonempty: true, prompt: '请填写验证码', },
                    ],
                },
            }
        }
    },
}
