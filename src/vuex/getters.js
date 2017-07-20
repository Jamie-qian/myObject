//商品列表
const allProducts = function(state) {
    return state.product.all;
}

//购物车的商品
const cartProducts = function(state){
    return state.cart.cartAll;
}

export default {
    allProducts,
    cartProducts
}