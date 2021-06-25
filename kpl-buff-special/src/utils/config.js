
const config = {
    // 中奖状态
    LOTTERY_STATUS: {
        options: [
            { key: 'WZJ', label: '未中奖', value: -1, classes: 'c-span-red' },
            { key: 'SHZ', label: '审核中', value: 0, classes: 'c-span-red' },
            { key: 'YSHDCJ', label: '审核通过', value: 1, classes: 'c-span-blue' },
            { key: 'JPJJFF', label: '奖品拒绝发放', value: 2, classes: 'c-span-red' },
            { key: 'JPYLQ', label: '已领取', value: 3, classes: 'c-span-blue' },
            { key: 'YCJDLJ', label: '待领取', value: 4, classes: 'c-span-blue' },
        ],
    },

};

for (let k in config) {
    let item = config[k];
    if (item.options) {
        const valueByKey = {};
        const labelByValue = {};
        item.options.forEach(it => {
            let { key, name, value } = it;
            valueByKey[key] = value;
            labelByValue[value] = name;
        });
        Object.assign(item, {  valueByKey, labelByValue });
    }
}

export default config;
