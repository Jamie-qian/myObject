//调用获取产品
import products_data from '../api/productsData.js'
 
//调用获取商品列表方法的action
const getAllProducts = function(store,payLoad) {
    const commit = store.commit;
    products_data.getProductsData(function(payLoad){
        commit("receive_product",payLoad);  //actions  commit-> mutations
    })
}

//调用增加购物车商品列方法的action
const addToCart = function(store,payLoad){
    const commit = store.commit;
    console.log(payLoad.inventory)
    //库存大于0时调用
    if(payLoad.inventory > 0){
        commit('add_to_cart',payLoad);

    }
    
    

    
}
 
export default {
    getAllProducts,
    addToCart
} 