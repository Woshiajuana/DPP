import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('src/views/home'),
            meta: {
                status: 1,
                title: '共竞王者',
            }
        },
    ]
});

/**
 * 判断用户是否第一次打开APP，是否启动引导页面
 * 设置路由之间的跳转动画
 * */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '共竞王者';
    let store = this.a.app.$store;
    if (store) {
        store.commit('SET_ANIMATE_NAME', from.meta.status > to.meta.status ? 'vux-pop-out' : from.meta.status === to.meta.status ? '' : 'vux-pop-in');
    }
    let { path } = to;
    let { token } = Vue.prototype.$user.get();
    if (!token && !['/'].includes(path)) {
        next('/');
    } else {
        next();
    }
});

export default router
