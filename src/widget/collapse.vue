<template>
    <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="Consistency" name="1">
            <div>Consistent with real life: consistent with real-life processes, logic, and language and concepts that follow the user's habits.</div>
            <div>Consistent in the interface: all elements and structures need to be consistent.</div>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
            <div>Simplify the process: simple and intuitive design process.</div>
            <div>Clear and clear: clear language and expressive, so that users quickly understand and make decisions</div>
        </el-collapse-item>
        <el-collapse-item title="Efficiency" name="3">
            <div>Results are controllable: Users are free to perform operations, including revocation, rollback and termination of current operations.</div>
            <div>User decision: According to the scene can give users operating recommendations or safety tips, but can not replace the user to make decisions.</div>
        </el-collapse-item>
        <el-collapse-item title="Recommendations" name="4">
            <div>Results are controllable: Users are free to perform operations, including revocation, rollback and termination of current operations.</div>
            <div>User decision: According to the scene can give users operating recommendations or safety tips, but can not replace the user to make decisions.</div>
        </el-collapse-item>
        <el-collapse-item title="Termination" name="5">
            <div>including revocation, rollback and termination of current operations.</div>
            <div>such as: design style, icons and text, the location of elements, etc.</div>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
export default {
    name:'collapse',
    data() {
        return {
            activeName: '1'
        }
    }
}
</script>
