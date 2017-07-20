//调用获取产品
import products_data from '../api/productsData.js'
 
//调用获取商品列表方法的action
const getAllProducts = function(store,payLoad) {
    products_data.getProductsData(function(payLoad){
        store.commit("receive_product",payLoad)  //actions  commit-> mutations
    })
}

//调用添加购物车商品列方法的action
const addToCart = function(store,payLoad){
    //库存大于0时调用
    if(payLoad.inventory > 0){
        store.commit('add_to_cart',payLoad)
    }   
}

const deleteCartProduct = function(store,payLoad){
    if(payLoad.num > 0 ){
        store.commit('delete_cart_product',payLoad)
    }
}

const submitCart = function(store,){
    store.commit('submit_cart_product')
}

export default {
    getAllProducts,
    addToCart,
    deleteCartProduct,
    submitCart
} 