//调用获取产品
import products_data from '../api/productsData.js'

//调用获取商品列表方法的action
const getAllProducts = function(context) {
    const commit = context.commit;
    
    products_data.getProductsData(function(products){
        commit("receive_product",products)
    })
}


export default {
    getAllProducts
}