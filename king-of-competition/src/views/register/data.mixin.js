
export default {
    data () {
        return {
            isPopup: false,
            isPrivacy: false,
            objInput: {
                brand: {
                    value: '中策',
                    placeholder: '请选择连锁品牌',
                    disabled: true,
                    // is: false,
                    // keyword: '',
                    // options: [
                    //     { name: '中策', value: '中策' }
                    // ],
                    use: [
                        { nonempty: true, prompt: '请选择连锁品牌', },
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
                    is: false,
                    keyword: '',
                    options: [],
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
                    maxlength: 4,
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
