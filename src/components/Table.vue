<template>
        <table class="table">
            <tr class="row" v-if="table.heading">
                <th class="col" v-for="item in table.heading" :key="item">{{ item }}</th>
            </tr>
            <tr class="row" v-for="item in table.data" :key="item">
                <th :width="table.width" class="col">{{ item.name }}</th>
                <td class="col" v-for="value in item.values" :key="value">{{ value }}</td>
            </tr>
        </table>
</template>

<script>
export default {
    name: "Table",
    props: {
        table: Object,
    }
}
</script>

<style lang="scss" scoped>
.table {
    border: 1px solid #a3a3a3;
    border-radius: 10px;
    text-align: left;
    border-spacing: 20px 10px;
}
</style>