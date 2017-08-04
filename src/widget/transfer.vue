<template>
    <el-transfer v-model="value" :data="data" :left-default-checked="[2,3]" :titles="['Source', 'Target']" @change="handleChange">
    </el-transfer>
</template>
<script>
export default {
    name: 'transfer',
    data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                    disabled: i % 4 === 0
                })
            }
            return data;
        };
        return {
            data: generateData(),
            value: [1]
        }
    },
    methods: {
        handleChange() { }
    }
}
</script>
<style scoped lang="scss">

</style>
