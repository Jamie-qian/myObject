<template>
    <div class="header">
        <a :href="item.src" v-for="(item,index) in items" :class="[item.active ? 'activeClass' : '']" @click="navClickEvent(items,index)">
            <span>{{item.text}}</span>
        </a>
    </div>
</template>
<script>
export default {
    name:'header',
    data() {
        return {
            items: [
                {
                    text: 'HOME',
                    active: true,
                    src:'#/'
                },
                {
                    text: 'WHO WE ARE',
                    active: false,
                    src:'#/whoweare'
                },
                {
                    text: 'OUR NETWORKS',
                    active: false,
                    src:'#/ournetworks'
                },
                {
                    text: 'MEDIA',
                    active: false,
                    src:'#/media'
                },
                {
                    text: 'CSR',
                    active: false,
                    src:'#/csr'
                },
                {
                    text: 'OUR PEOPLE',
                    active: false,
                    src:'#/ourpeople'
                },
                {
                    text: 'CONTACT',
                    active: false,
                    src:'#/contact'
                }
            ]
        }
    },
    methods:{
        navClickEvent (items,index){
            /*默认切换类的操作*/ 
            items.forEach(el =>{
                el.active = false;
            })
            items[index].active = true;
            this.$emit('navClickEvent',items,index);
        }
    }
}
</script>
<style scoped lang="scss">
.header {
    width:100%;background: #999;
    a {
        display: inline-block;
        color: #666;
        span {
            padding:8px 30px;display: inline-block;
        }
    }
    .activeClass {
        color: #fff;
        border-bottom:3px solid #ccc;
    }
}
</style>