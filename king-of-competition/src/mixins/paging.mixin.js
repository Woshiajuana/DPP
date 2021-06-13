
export default {
    data () {
        return {
            pagingIndex: 1,
            pagingSize: 10,
            pagingTotal: -1,
            pagingData: [],
            pagingIsLoading: false,
        }
    },
    methods: {
        pagingRefresh (loading) {
            this.pagingIndex = 1;
            this.pagingReqDataList(1, loading);
        },

        pagingReqDataList (current = 1, loading = false) {
            this.pagingIsLoading = true;
            let {
                fn,
                params = {},
                options = {},
            } = this.pagingSetUrlParamsOptions();
            params = Object.assign({
                PageIndex: current,
                PageSize: this.pagingSize,
                ...params,
            }, params);
            this.$api[fn](params, {
                loading,
                ...options,
            }).then(res => {
                let { Count: total = 0, Data: records = [] } = this.pagingFormatResult(res, params);
                this.pagingTotal = total;
                this.pagingData = current === 1 ? records : [...this.pagingData, ...records];
                this.pagingIndex = current;
                console.log(this.pagingData);
                this.pagingReqCallSuccess(res, params);
            }).toast(this.pagingReqCallError.bind(this)).finally(() => {
                this.pagingIsLoading = false;
            });
        },

        pagingFormatResult (res) {
            if (Array.isArray(res)) {
                res = { Count: res.length, Data: res }
            }
            return res;
        },

        pagingReqCallSuccess () {
            if (this.superBoxSuccess) {
                this.pagingTotal ? this.superBoxSuccess() : this.superBoxEmpty();
            }
        },

        pagingReqCallError (err) {
            if (this.pagingIndex === 1) {
                return this.superBoxError && this.superBoxError(err);
            }
        },

        pagingLoad () {
            if (this.pagingIsLoading) {
                return console.log('正在加载中...');
            }
            if (this.pagingTotal !== -1 && this.pagingTotal <= this.pagingData.length) {
                return console.log('没有更多了...');
            }
            this.pagingReqDataList(this.pagingIndex + 1);
        },
    },
}
