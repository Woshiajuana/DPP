
import SuperBox from 'src/components/super-box'

export default {

    data () {
        return {
            superBox$: {
                state: 'loading',
            },
        }
    },

    methods: {
        superBoxLoading () {
            this.superBox$ = { state: 'loading', error: '' };
        },
        superBoxError (error) {
            this.superBox$ = { state: 'error', error };
            return error;
        },
        superBoxSuccess () {
            this.superBox$ = { state: 'success', error: '' };
        },
        superBoxEmpty () {
            this.superBox$ = { state: 'empty', error: '' };
        },
    },

    components: {
        SuperBox,
    }
}
