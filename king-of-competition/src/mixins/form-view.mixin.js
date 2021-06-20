

export default {
    methods: {
        handleSelect (item, key) {
            if (item.options.length) {
                return item.is = true;
            }
            if (key === 'province') {
                this.$api.reqProvinceList().then(res => {
                    item.options = res.map(item => {
                        let { ProvinceDesc: value } = item;
                        return { ...item, value, name: value };
                    });
                    item.is = true;
                }).toast();
                return null;
            }
            if (key === 'city') {
                if (this.$validate.check({ x: this.objInput.province })) {
                    return null;
                }
                const { province } = this.$validate.input(this.objInput);
                this.$api.reqCityList({
                    provinceId: province.ProvinceID_PK,
                }).then(res => {
                    item.options = res.map(item => {
                        let { CityDesc: value } = item;
                        return { ...item, value, name: value };
                    });
                    item.is = true;
                }).toast();
                return null;
            }
            if (key === 'store') {
                if (this.$validate.check({ x: this.objInput.city })) {
                    return null;
                }
                const { city } = this.$validate.input(this.objInput);
                this.$api.reqShopList({
                    city: city.name,
                }).then(res => {
                    item.options = res.map(item => {
                        let { store: value } = item;
                        return { ...item, value, name: value };
                    });
                    item.is = true;
                }).toast();
                return null;
            }
        },
    }

}
