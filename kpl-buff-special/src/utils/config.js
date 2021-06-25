
const config = {
    // 中奖状态
    LOTTERY_STATUS: {
        options: [
            { key: 'SHZ', label: '工单待审核', value: 0, classes: 'c-span-red' },
            { key: 'YSHDCJ', label: '已审核待抽奖', value: 1, classes: 'c-span-blue' },
            { key: 'SHBTG', label: '工单审核不通过', value: 2, classes: 'c-span-red' },
            { key: 'WZJ', label: '未中奖', value: 3, classes: 'c-span-blue' },
            { key: 'YCJDLJ', label: '已抽奖待领奖', value: 4, classes: 'c-span-blue' },
            { key: 'JPYFF', label: '奖品待审核', value: 5, classes: 'c-span-blue' },
            { key: 'JPYFF', label: '奖品已发放', value: 6, classes: 'c-span-blue' },
            { key: 'JPJJFF', label: '奖品拒绝发放', value: 7, classes: 'c-span-red' },
            { key: 'JPYLQ', label: '奖品已领取', value: 8, classes: 'c-span-blue' },
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
