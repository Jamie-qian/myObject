<template>
    <div class="contact">
        <!-- 调用组件 -->
        <!-- <c-collapse></c-collapse> -->
        <el-table :data="model.tableDate" border>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <el-pagination 
            style="margin-top:20px;"
            @size-change="handleSizeChange"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            :page-sizes="[5, 10, 15]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.model.tableDate.length"></el-pagination>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        name: 'contact',
        created(){
        },
        data(){
            return {
                currentPage: 4
            }
        },
        computed:{
            ...mapState({
                model:'contact'
            }),
        },
        methods:{
            handleSizeChange(val) {
                alert(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                alert(`当前页: ${val}`);
            }
        }
    }
</script>
<style scoped lang="scss">
    .contact {
        margin-top: 30px;
    }
</style>