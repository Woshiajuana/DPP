
export default {
    data () {
        return {
            isPopup: false,
            IsPrivacy: false,
            objInput: {
                UserName: {
                    value: '',
                    placeholder: '姓名',
                    use: [
                        { nonempty: true, prompt: '请填写姓名', },
                    ],
                },
                Mobile: {
                    value: '',
                    type: 'tel',
                    maxlength: 11,
                    placeholder: '手机号',
                    use: [
                        { nonempty: true, prompt: '请填写手机号', },
                    ],
                },
                Province: {
                    value: '',
                    classes: 'form-cell-half',
                    placeholder: '省份',
                    is: false,
                    keyword: '',
                    options: [],
                    use: [
                        { nonempty: true, prompt: '请选择省份', },
                    ],
                },
                City: {
                    value: '',
                    classes: 'form-cell-half',
                    placeholder: '城市',
                    is: false,
                    keyword: '',
                    options: [],
                    use: [
                        { nonempty: true, prompt: '请选择城市', },
                    ],
                },
                Address: {
                    value: '',
                    placeholder: '地址',
                    use: [
                        { nonempty: true, prompt: '请填写详细地址', },
                    ],
                },
                Code: {
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
