<template>
    <div id="app">
        <div class="container">
            <div class="nav">
                <img src="./static/img/logo.jpg">
            </div>
            <c-header></c-header>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style lang="scss" scope>
* {
    margin: 0;
    padding: 0;
    font-size: 14px;
}

#app {
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    margin: 0 auto;
    .container {
        width: 1000px;
        margin: 10px auto;
        .nav {
            margin: 45px 0 45px 0;
        }
    }
}
</style>
