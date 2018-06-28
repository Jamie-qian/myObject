import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'index', component: require('../pages/index/index.vue') },
        { path: '/weare', name: 'weare', component: require('../pages/weare.vue') },
        { path: '/networks', name: 'networks', component: require('../pages/networks.vue') },
        { path: '/media', name: 'media', component: require('../pages/media.vue') },
        { path: '/csr', name: 'csr', component: require('../pages/csr.vue') },
        { path: '/people', name: 'people', component: require('../pages/people.vue') },
        { path: '/contact', name: 'contact', component: require('../pages/contact/contact.vue') }
    ]
})
