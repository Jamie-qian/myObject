<template>
    <div>
        <button @click="btnClickEvent">
            <span>{{msg}}</span>
        </button>
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
        btnClickEvent: function () {
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
