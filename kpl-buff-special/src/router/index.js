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
                title: '极“嘉”BUFF',
            }
        },
        {
            path: '/records',
            name: 'records',
            component: require('src/views/records'),
            meta: {
                status: 1.1,
                title: '抽奖记录',
            },
        },
        {
            path: '/questionnaire',
            name: 'questionnaire',
            component: require('src/views/questionnaire'),
            meta: {
                status: 3,
                title: '问卷调查',
            },
        },
        {
            path: '/luck-draw',
            name: 'luckDraw',
            component: require('src/views/luck-draw'),
            meta: {
                status: 4,
                title: '抽奖',
            },
        },
        {
            path: '/receiving',
            name: 'receiving',
            component: require('src/views/receiving'),
            meta: {
                status: 5,
                title: '收货地址',
            },
        },
        {
            path: '/status',
            name: 'status',
            component: require('src/views/status'),
            meta: {
                status: 6,
                title: '状态',
            },
        },
        {
            path: '*',
            redirect: '/',
        },
    ]
});

/**
 * 判断用户是否第一次打开APP，是否启动引导页面
 * 设置路由之间的跳转动画
 * */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '极“嘉”BUFF';
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
