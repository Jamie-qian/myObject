import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import Whoweare from '../pages/Whoweare.vue'
import Ournetworks from '../pages/Ournetworks.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',name: 'index',component: index
        },
        {
          path: '/whoweare',name: 'whoweare',component: Whoweare
        },
        {
          path: '/ournetworks',name: 'ournetworks',component: Ournetworks
          
        },
        {
          path: '/media',name: 'media'
        }
    ]
})
