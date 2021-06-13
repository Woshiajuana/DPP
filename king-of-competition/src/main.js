
import 'src/utils/es6-promise'

import Vue from 'vue'
import { ToastPlugin, LoadingPlugin, ConfirmPlugin } from 'vux'
import App from 'src/App'
import router from 'src/router'
import store from 'src/store'
import * as api from 'src/api'
import storage from 'src/utils/storage'
import regular from 'src/utils/regular'
import validate from 'src/utils/validate'
import helper from 'src/utils/helper'
import config from 'src/utils/config'
import user from 'src/utils/user'
import image from 'src/utils/image'
import wxx from 'src/utils/wx'
import VueTouch from 'vue-touch'

Vue.use(VueTouch, { name:'v-touch'});
Vue.use(ToastPlugin, { type: 'text' });
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$config = config;
Vue.prototype.$storage = storage;
Vue.prototype.$validate = validate;
Vue.prototype.$helper = helper;
Vue.prototype.$regular = regular;
Vue.prototype.$user = user;
Vue.prototype.$image = image;
Vue.prototype.$wx = wxx;

Vue.config.ignoredElements = ['wx-open-subscribe', 'wx-open-launch-weapp'];

const vue = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});

Vue.prototype.$vux = vue.$vux;
