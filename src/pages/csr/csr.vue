<template>
    <div class="csr">
        <!-- <c-collapse></c-collapse> -->
        <el-row>
            <el-col :span="8" v-for="(item,index) in 4" :key="item" :offset="index > 0 ? 4 : 0">
                <el-card style="margin-top:10px;">
                    <img src="../../static/img/logo.png" width="20px;" alt="网络原因请稍后刷新">
                </el-card>
                <div>
                    <span>network</span>
                </div>
            </el-col>
            <!-- <table border="1" style="border-collapse:collapse;">
                <thead>
                <tr style="text-align: left;"><th>BD组</th><th>9.10-9.16日均profit</th><th>9.17-9.23日均profit</th><th>均profit差</th><th>条件</th> </tr>
                </thead>
                <tbody>
                    <tr style="background:rgba(249, 164, 164, 1)"><td>徐奎亮OPT test</td><td>6370.52</td><td>1713.72</td><td>-4656.80</td><td>BDteam为xukuiliang，AM是张洁洁</td></tr>
                    <tr style="background:rgb(203, 255, 203);"><td>徐奎亮不含OPT test</td><td>25062.67</td><td>23749.58</td><td>-1313.09</td><td>BDteam为xukuiliang，AM不是张洁洁</td></tr>
                </tbody>
            </table> -->
            <table>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
            </table>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'csr'
}
</script>
<style scoped lang="scss">
.csr {
    margin-top: 30px;
}
</style>