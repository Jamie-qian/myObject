import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'

import contact from './modules/contact/contact';

import product from './modules/product.js'
import cart from './modules/cart.js'


Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        product: product,
        cart: cart,
        contact: contact
    }
})
