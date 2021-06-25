
export default {
    data () {
        return {
            objInput: {
                Answer1: {
                    label: '1. 对本次活动评价',
                    value: '',
                    options: ['非常满意', '一般', '满意', '不满意'],
                    use: [
                        { nonempty: true, prompt: '请选择对本次活动评价', },
                    ],
                },
                Answer2: {
                    label: '2. 对门店人员和服务评价',
                    value: '',
                    options: ['非常满意', '一般', '满意', '不满意'],
                    use: [
                        { nonempty: true, prompt: '请选择对门店人员和服务评价', },
                    ],
                },
                Answer3: {
                    label: '3. 是否愿意再次参加此类活动',
                    value: '',
                    options: ['非常满意', '一般', '满意', '不满意'],
                    use: [
                        { nonempty: true, prompt: '请选择是否愿意再次参加此类活动', },
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
