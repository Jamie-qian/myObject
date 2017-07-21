const state = {
    all: []  // 获取的产品
}

const mutations = {
    receive_product: function ( state, payLoad ) {
        state.all = payLoad  // actions  commit-> mutations
    },

    add_to_cart: function ( state, payLoad) {
        state.all.find( item => {
            return item.id === payLoad.id
        }).inventory --
    },

    delete_cart_product: function ( state, payLoad) {
        state.all.find( item => {
            return item.id === payLoad.id
        }).inventory ++
    }
}

export default {
    state,
    mutations
}
