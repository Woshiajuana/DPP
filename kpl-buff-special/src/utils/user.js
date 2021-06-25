
import storage from 'src/utils/storage'

const $$USER_INFO = '$$USER_INFO';

export default {

    get () {
        return storage.cache.get($$USER_INFO, {});
    },

    update (data) {
        let user = Object.assign({}, this.get(), data);
        this.set(user);
        return user;
    },

    set (user) {
        storage.cache.set($$USER_INFO, user);
    },

    del () {
        storage.cache.del($$USER_INFO);
    },

    clear () {
        storage.cache.del($$USER_INFO);
    },

}
