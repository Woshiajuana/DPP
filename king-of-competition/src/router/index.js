import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/register',
            component: () => import('src/views/register'),
            meta: { status: 0, title: '注册' },
        },
        {
            path: '/',
            component: () => import('src/views/main'),
            meta: { status: 1 },
            children: [
                {
                    path: '',
                    component: () => import('src/views/home'),
                    meta: { status: 1, title: '共竞王者' },
                },
                {
                    path: 'ranking',
                    component: () => import('src/views/ranking'),
                    meta: { status: 1, title: '王者排位' },
                },
                {
                    path: '/mine',
                    component: () => import('src/views/mine'),
                    meta: { status: 1, title: '个人中心' },
                },
            ]
        },
        {
            path: '/photograph',
            component: () => import('src/views/photograph'),
            meta: { status: 2, title: '拍照' },
        },
        {
            path: '/poster',
            component: () => import('src/views/poster'),
            meta: { status: 3, title: '海报' },
        },
        {
            path: '/luck-draw',
            component: () => import('src/views/luck-draw'),
            meta: { status: 4, title: '抽奖' },
        },
        {
            path: '/receiving',
            component: () => import('src/views/receiving'),
            meta: { status: 5, title: '留资' },
        },
        {
            path: '/standings',
            component: () => import('src/views/standings'),
            meta: { status: 7, title: '我的战绩' },
        },
        {
            path: '/picture',
            component: () => import('src/views/picture'),
            meta: { status: 8, title: '我的照片' },
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
    // let { token } = Vue.prototype.$user.get();
    // if (!token && !['/'].includes(path)) {
    //     next('/');
    // } else {
        next();
    // }
});

export default router
