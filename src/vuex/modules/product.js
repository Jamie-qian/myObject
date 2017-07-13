const state = {
    all: []  //获取的产品
}

const mutations = {
    receive_product: function(state,payLoad){
        state.all = payLoad;
    }
}

export default {
    state,
    mutations
}