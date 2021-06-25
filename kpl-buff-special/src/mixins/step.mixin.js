
export default {
    methods: {
        stepActNext () {
            //  活动完成阶段：0扫码，1观看视屏，2上传工单，3调研，4审核通过，5抽奖，6留资/寄送
            this.$api.reqUserInfo().then(res => {
                const { ActiveStep } = res;
                const { path } = this.$route;
                if (['/'].includes(path)) {
                    // 首页
                    if (ActiveStep === 0) {
                        return this.isPopup = true;
                    } else if (ActiveStep === 1) {
                        return this.$router.push('/work-order');
                    } else if (ActiveStep === 2) {
                        return this.$router.push('/questionnaire');
                    } else if (ActiveStep === 3) {
                        return this.$router.push({ path: '/status', query: { type: 'examine' } });
                    } else if (ActiveStep === 4) {
                        return this.$router.push('/luck-draw');
                    } else if (ActiveStep === 5) {
                        return this.$router.push('/receiving');
                    } else if (ActiveStep === 6)  {
                        return this.$vux.toast.show('您已参与了本次活动！');
                    }
                    return null;
                } else if (['/work-order'].includes(path)) {
                    // 工单页面
                    if (ActiveStep === 2) {
                        return this.$router.replace('/questionnaire');
                    } else {
                        return this.$router.replace('/');
                    }
                } else if (['/questionnaire'].includes(path)) {
                    // 调研页面
                    if (ActiveStep === 3) {
                        return this.$router.replace({ path: '/status', query: { type: 'examine' } });
                    } else {
                        return this.$router.replace('/');
                    }
                } else if (['/luck-draw'].includes(path)) {
                    // 抽奖页面
                    if (ActiveStep === 2) {
                        return this.$router.replace('/questionnaire');
                    } else {
                        return this.$router.replace('/');
                    }
                }
            }).toast();
        }
    },
}
