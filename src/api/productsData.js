/*
* 模拟数据
*/
const productsData = [
    { "id": 1, "title": "MacBook Pro", "price": 15000, "inventory": 2 },
    { "id": 2, "title": "MacBook Air", "price": 12000, "inventory": 3 },
    { "id": 3, "title": "iPad Mini", "price": 2000, "inventory": 4 }
]

export default {
    getProductsData: function (callback) {
        setTimeout(callback(productsData), 300)
    }
}