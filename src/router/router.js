import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import whoweare from '../pages/whoweare.vue'
import ournetworks from '../pages/ournetworks.vue'
import media from '../pages/media.vue'
import csr from '../pages/csr.vue'
import ourpeople from '../pages/ourpeople'
import contact from '../pages/contact.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',name: 'index',component: index
        },
        {
          path: '/whoweare',name: 'whoweare',component: whoweare
        },
        {
          path: '/ournetworks',name: 'ournetworks',component: ournetworks
        },
        {
          path: '/media',name: 'media',component:media
        },
        {
          path: '/csr',name: 'csr',component:csr
        },
        {
          path: '/ourpeople',name: 'ourpeople',component:ourpeople
        },
        {
          path: '/contact',name: 'contact',component:contact
        }
    ]
})
