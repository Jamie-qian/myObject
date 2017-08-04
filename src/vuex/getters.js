//商品列表
const allProducts = function (state) {
    return state.product.all
}

//购物车的商品
const cartProducts = function (state) {
    return state.cart.cartAll
}

//购物车商品总价
const allprice = function (state) {
    let products = state.cart.cartAll;
    let allprice = 0;
    //遍历获取每个产品数量和单价，获得单个产品总价
    for (let i = products.length - 1; i >= 0; i--) {
        allprice += products[i].price * products[i].num;
    }

    return allprice;
}

//提示信息
const messageInfo = function (state) {
    return state.cart.messageInfo;
}

export default {
    allProducts,
    cartProducts,
    allprice,
    messageInfo
}