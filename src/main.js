
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router/router.js'
import header from './widget/header.vue'
import slider from './widget/slider.vue'

Vue.component('c-header',header)
Vue.component('c-slider',slider)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
}) 
