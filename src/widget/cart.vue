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
                        <el-button @click="deleteCartProduct(item)">
                            删除
                            <img src="../static/img/logo.png" class='icon'/>
                        </el-button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class='message'>
            <p>总价: {{allprice}}</p>
            <p>
                <el-button @click="submitCart">
                    <img src="../static/img/logo.png" class='icon'/>
                    去付款
                    <img src="../static/img/logo.png" class='icon'/>
                </el-button>
            </p>
            <p>提示：{{messageInfo}}</p>
        </div>
    </div>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        methods:{
            ...mapActions({
                deleteCartProduct: 'deleteCartProduct',
                submitCart: 'submitCart'
            })
        },
        computed:{
            ...mapGetters({
                products: 'cartProducts',
                allprice: 'allprice',
                messageInfo: 'messageInfo'
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
        .message {
            text-align: right;
            p {
                margin-top:10px;
            }
        }
        .icon{
            width:10px;
        }
    }
</style>