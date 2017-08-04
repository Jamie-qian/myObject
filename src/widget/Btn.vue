<template>
    <el-button @click="btnClickEvent">
        <slot name="icon"></slot>
        <span>{{msg}}</span>
    </el-button>
</template>
<script>
export default {
    name: 'btn',
    /*data () {
        return {
            msg: '下载'
        }
    },*/
    /*props是暴露组件的属性接口*/
    props: {
        msg: {
            default: '下载'
        }
    },
    methods: {
        btnClickEvent() {
            alert('先弹出默认的文案')
            /*子组件触发自定义事件，父组件监听*/
            this.$emit('btnClickEvent')
        }
    }
}
</script>
<style scoped>
button {
    margin: 10px;
}
</style>
