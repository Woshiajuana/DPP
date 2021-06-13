
export default {
    data () {
        return {
            userInfo: ''
        }
    },
    methods: {
        userGetInfo () {
            this.userInfo = this.$user.get();
        },
    }
}
