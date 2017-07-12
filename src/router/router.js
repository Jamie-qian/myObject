import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/',name: 'index',component: require('../pages/index.vue')},
        { path: '/whoweare',name: 'whoweare',component: require('../pages/whoweare.vue')},
        { path: '/ournetworks',name: 'ournetworks',component: require('../pages/ournetworks')},
        { path: '/media',name: 'media',component:require('../pages/media.vue')},
        { path: '/csr',name: 'csr',component:require('../pages/csr.vue')},
        { path: '/ourpeople',name: 'ourpeople',component:require('../pages/ourpeople')},
        { path: '/contact',name: 'contact',component:require('../pages/contact.vue')}
    ]
})
