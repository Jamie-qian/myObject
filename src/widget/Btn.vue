<template>
    <div>
        <button @click="btnClickEvent">
            <!--<slot name="icon"></slot>-->
            <span>{{msg}}</span>
        </button>
    </div>
</template>
<script>
export default {
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
