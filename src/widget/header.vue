<template>
    <div class="container">
        <a v-for="(item,index) in items" :class="[item.active ? 'activeClass' : '']" :href="item.src" @click="navClickEvent(items,index)" :key="item.id">
            <span>{{item.text}}</span>
        </a>
    </div>
</template>
<script>
export default {
    name: 'public-header',
    data() {
        return {
            items: [
                {
                    text: 'HOME',
                    active: true,
                    src: '#/'
                },
                {
                    text: 'WHO WE ARE',
                    active: false,
                    src: '#/weare'
                },
                {
                    text: 'OUR NETWORKS',
                    active: false,
                    src: '#/networks'
                },
                {
                    text: 'MEDIA',
                    active: false,
                    src: '#/media'
                },
                {
                    text: 'CSR',
                    active: false,
                    src: '#/csr'
                },
                {
                    text: 'OUR PEOPLE',
                    active: false,
                    src: '#/people'
                },
                {
                    text: 'JING TAO',
                    active: false,
                    src: '#/contact'
                }
            ]
        }
    },
    methods: {
        navClickEvent(items, index) {
            /*默认切换类的操作*/
            items.forEach(el => {
                el.active = false;
            })
            items[index].active = true;
            /*开放用户自定义的接口*/
            this.$emit('navClickEvent', items, index);
        }
    }
}
</script>
<style scoped lang="scss">
.container {
    width: 100%;
    background: #999;
    a {
        display: inline-block;
        color: #666;
        span {
            padding: 8px 30px;
            display: inline-block;
        }
    }
    .activeClass {
        color: #fff;
        border-bottom: 3px solid #ccc;
    }
}
</style>