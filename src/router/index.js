import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/demo',
    name: 'Demo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import( /* webpackChunkName: "about" */ '../views/Demo.vue'),
},
{
    path: '/travel',
    name: 'travel',
    component: () =>
        import( /* webpackChunkName: "about" */ '../views/travel.vue'),
}, {
    path: '/404', //全選 使用者亂打
    component: () =>
        import( /* webpackChunkName: "about" */ '../components/Error.vue'),
}, {
    path: '*', //全選 使用者亂打
    redirect: "/404",
}

]

const router = new VueRouter({
    routes,
})

export default router