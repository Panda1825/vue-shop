import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect:'/shop',
        component: () => import('@/pages/layout'),
        children: [{
            path: '/shop', //默认子路由
            meta:{title:"店铺首页"},
            component: () => import('@/pages/shop')
        },
        {
            path: '/mine',
            name: 'Mine',
            meta:{title:"我的"},
            component: () => import('@/pages/mine')
        },
       
        ]
    },
    {
        path: '/food',
        name: 'Food',
        meta:{title:"食物详情"},
        component: () => import('@/pages/food')
    },
]


const router = new VueRouter({
    routes,
})

export default router;