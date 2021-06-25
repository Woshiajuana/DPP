
const filters = {

    filterAmount (s, divisor = 100) {
        let money = parseFloat(s);
        if (money) {
            s = (money / divisor).toFixed(2) + "";
            let l = s.split(".")[0].split("").reverse();
            let r = s.split(".")[1];
            let t = "";
            l.forEach((ll, key) => {
                t += l[key] + ((key + 1) % 3 == 0 && (key + 1) != l.length ? "," : "");
            });
            return t.split("").reverse().join("") + "." + r;
            // return s;
        } else if (s == 0) {
            return "0.00"
        } else {
            return '---';
        }
    },

    filterId (value) {
        return value ? value.substring(0,6) + '********' + value.substring(14) : '';
    },

    filterCard (value) {
        if (!value || value.length < 3) return value;
        let len = value.length;
        value = `${new Array(len - 3).join('*')}${value.substring(len - 4)}`;
        return value.replace(/(.{4})/g, '$1 ');
    },

    filterPhone (value, type) {
        if (type) {
            return value ? value.substring(0,3) + '****' + value.substring(7) : '';
        }
        return value ? value.substring(0,3) + ' **** ' + value.substring(7) : '';
    },

    filterName (value) {
        if (!value) return '';
        if (value.length === 1) {
            return value;
        }
        if (value.length === 2) {
            return value.substring(0, 1) + '*'
        }
        return value.substring(0, 1) + new Array(value.length - 1).join('*') + value.substr(-1);
    },

    filterDateTime (value) {
        return value ? `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(6, 8)} ${value.substring(8, 10)}:${value.substring(10, 12)}:${value.substring(12, 14)}` : '';
    },

    filterDate (value) {
        return value ? `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(6, 8)}` : '';
    },

};


export default {
    filters,
}
