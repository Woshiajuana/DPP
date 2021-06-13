
const config = {
    // 中奖状态
    PICTURE_STATUS: {
        options: [
            { key: 'DSH', label: '待审核', value: '0' },
            { key: 'YSH', label: '已审核', value: '1' },
            { key: 'SHSB', label: '审核失败', value: '2' },
        ],
    },

};

for (let k in config) {
    let item = config[k];
    if (item.options) {
        const valueByKey = {};
        const labelByValue = {};
        item.options.forEach(it => {
            let { key, label, value } = it;
            valueByKey[key] = value;
            labelByValue[value] = label;
        });
        Object.assign(item, {  valueByKey, labelByValue });
    }
}

export default config;
