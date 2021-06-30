
export default {
    data () {
        return {
            objInput: {
                Answer1: {
                    label: '1. 您对本次的活动满意吗？',
                    value: '',
                    options: ['非常满意', '比较满意', '一般', '不满意'],
                    use: [
                        { nonempty: true, prompt: '请选择您对本次的活动满意吗？', },
                    ],
                },
                Answer2: {
                    label: '2. 您对嘉实多品牌以及嘉实多产品了解吗？',
                    value: '',
                    options: ['非常了解', '比较了解', '一般了解', '不了解'],
                    use: [
                        { nonempty: true, prompt: '请选择您对嘉实多品牌以及嘉实多产品了解吗？', },
                    ],
                },
                Answer3: {
                    label: '3. 本次活动体验中，您对活动工作人员的服务满意吗？',
                    value: '',
                    options: ['非常满意', '比较满意', '一般', '不满意'],
                    use: [
                        { nonempty: true, prompt: '请选择本次活动体验中，您对活动工作人员的服务满意吗？', },
                    ],
                },
                Answer4: {
                    label: '4. 其他建议',
                    value: '',
                    use: [
                        { nonempty: true, prompt: '请填写其他建议', },
                    ],
                },
            }
        }
    }
}
