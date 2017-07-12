/**
 *  @file  
 *  @author     Jamie
 **/

import Vue from 'vue'
/*引入App这个组件*/
import App from './App'                          
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/*引入路由配置*/
import router from './router/router.js'          

import header from './widget/header.vue'
import slider from './widget/slider.vue'
import btn from './widget/btn.vue'
import transfer from './widget/transfer.vue'
import collapse from './widget/collapse'

Vue.component('c-transfer',transfer)
Vue.component('c-header',header)
Vue.component('c-slider',slider)
Vue.component('c-btn',btn)
Vue.component('c-collapse',collapse)

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    /*最后效果将会替换页面中id为app的div元素*/ 
    el: '#app',
    /*使用路由*/                              
    router,
    /*告知页面这个组件用这样的标签来包裹着，并且使用它*/                                   
    template: '<App/>',
    /*告知当前页面想使用App这个组件*/
    components: { App }
}) 
