<template>
    <div class="contact">
        <!-- 调用组件 -->
        <!-- <c-collapse></c-collapse> -->
        <el-table :data="model.tableDate" border>
            <el-table-column>
                <template slot-scope="scope">
                    <img src="../../static/img/logo.png" alt="" width="20px">
                </template>
            </el-table-column>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="项目">
                            <span>{{ props.row.project }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="start" label="START">
            </el-table-column>
            <el-table-column prop="end" label="END">
            </el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址">
                <template slot-scope="scope">
                    <el-tag type="info">{{scope.row.address}}</el-tag>
                </template>
            </el-table-column>
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
                currentPage: 4,
                loading: true
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
            },
            load(){
                this.loading = true;
                
            }
        }
    }
</script>
<style scoped lang="scss">
    .contact {
        margin-top: 30px;
    }
</style>