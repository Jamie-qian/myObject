<template>
    <div>
        <el-button @click="btnClickEvent">
            <span>{{msg}}</span>
        </el-button>
    </div>
</template>
<script>
export default {
    name:'btn',
    props: {
        msg: {
          default: '下载'
        }
    },
    methods: {
        btnClickEvent(){
            alert('先弹出默认的文案')
            this.$emit('btnClickEvent')
        }
    }
}
</script>
<style scoped>
button{
    margin:10px;
}
</style>
