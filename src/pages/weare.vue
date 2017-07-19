<template>
    <div class="weare">
        <c-btn v-on:btnClickEvent="doSthOne" msg="确定">
            <img slot="icon" src="../static/img/logo.png" class="icon"/>
        </c-btn>
        <c-btn v-on:btnClickEvent="doSthTwo" msg="取消">
            <img slot="icon" src="../static/img/logo.png" class="icon">
        </c-btn>
    </div>
</template>
<script>
    export default {
        name:'weare',
        methods: {
            /*父组件给不同的子组件调用不同的事件处理*/
            doSthOne () {
              alert('确定')
            },
            doSthTwo () {
              alert('取消')
            }
        }
    }
</script>
<style scoped lang="scss">
.weare{
    margin-top:30px;
    .icon{
        width:10px;
    }
}
</style>