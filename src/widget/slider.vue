<template>
    <el-carousel :interval="4000" type="card" height="400px;">
        <el-carousel-item v-for="item in photos" :key="item">
            <h1 class="text">{{item.text}}</h1>
            <img src="../static/img/Spend.jpg">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    name:'slider',
    data () {
        return {
            photos : [
                {
                    text:"Global ad spend to hit",
                    src:"../static/img/Spend.jpg"
                },
                {
                    text:"$563.4 billion in 2017",
                    src:"../static/img/Spend.jpg"
                },
                {
                    text:"with digital driving growth",
                    src:"../static/img/Spend.jpg"
                },
                {
                    text:"Global ad spend to hit",
                    src:"../static/img/Spend.jpg"
                },
                {
                    text:"$563.4 billion in 2017",
                    src:"../static/img/Spend.jpg"
                },
                {
                    text:"with digital driving growth",
                    src:"../static/img/Spend.jpg"
                }
            ]
        }
    }
}
</script>
<style>
.text{
    position:absolute;
    top:50%;
    left:20%;
    color: #999;
}
</style>