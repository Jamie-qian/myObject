const state = {
    cartAll: [], //购物车全部产品
}

const mutations = {
    //添加产品的同步方法
    add_to_cart: function(state,payLoad){
        //查询商品是否在购物车中
        const record = state.cartAll.find( item => {
            return item.id === payLoad.id;
        })

        if(!record){
            state.cartAll.push({
                title: payLoad.title,
                price: payLoad.price,
                id: payLoad.id,
                num: 1
            })
        } else {
            record.num ++ ;
        }
    },
    //删除产品的同步方法
    delete_cart_product: function(state,payLoad){
        state.cartAll.find( item => {
            return item.id === payLoad.id;
        }).num ++;
    }
}

export default {
    state,
    mutations
}