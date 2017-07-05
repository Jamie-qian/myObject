<template>
    <div class="carousel">
        <c-slider></c-slider>
        <c-btn v-on:btnClickEvent="doSthOne" msg="确定">
        </c-btn>
        <c-btn v-on:btnClickEvent="doSthTwo" msg="取消">
        </c-btn>
    </div>
</template>
<script>
    export default {
        name:'ournetworks',
        methods: {
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
.carousel{
    margin-top:40px;
}
</style>