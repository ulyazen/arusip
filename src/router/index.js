import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sidomulyo from '../views/Sidomulyo.vue'
import Hargobinangun from '../views/Hargobinangun.vue'
import Imogiri from '../views/Imogiri.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sidomulyo',
        name: 'Sidomulyo',
        component: Sidomulyo
    },
    {
        path: '/hargobinangun',
        name: 'Hargobinangun',
        component: Hargobinangun
    },
    {
        path: '/imogiri',
        name: 'Imogiri',
        component: Imogiri
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
