<template>
    <div class="cart">
        <table>
            <caption>购物车</caption>
            <thead>
                <tr>
                    <th>产品名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='item in products'>
                    <td>{{item.title}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.num}}</td>
                    <td>
                        <button>删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <p>总价</p>
            <p>
                <button>去付款</button>
            </p>
            <p>提示：</p>
        </div>
    </div>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        methods:{
            ...mapActions({
                
            })
        },
        computed:{
            ...mapGetters({
                products: 'cartProducts'
            })
        }
    }
</script>

<style scoped lang="scss">
    .cart {
        table {
            width:600px;
            margin:50px auto;
            line-height: 30px;
            td{
                text-align: center;
            }
        }
        button {
            padding:5px 10px;
        }
    }
</style>