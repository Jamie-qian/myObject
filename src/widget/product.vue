<template>
    <div class='product'>
         <table>
            <caption>产品列表</caption>
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
                    <td>{{item.inventory}}</td>
                    <td>
                        <el-button @click='addToCart(item)'>购买</el-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        methods:{
            ...mapActions({
                addToCart: 'addToCart'
            })
        },
        computed: {
            //mapGetters辅助函数是将store中的getters映射到局部计算属性
            ...mapGetters({  //使用对象展开符将getters混入computed中 
                products: 'allProducts'
            })
        },
        created() {
            //调用actions
            this.$store.dispatch('getAllProducts')
        }
    }
</script>
<style scoped lang="scss">
    .product {
        table {
            width:600px;
            margin:50px auto;
            line-height: 30px;
            td{
                text-align: center;
            }
        }
    }
</style>