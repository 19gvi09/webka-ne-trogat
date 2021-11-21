<template>
    <div class="wrapper">
        <table class="table">
            <tr class="table__header" v-if="charts.header">
                <th v-for="item in charts.header" :key="item"><h5 class="text pb-5">{{ item }}</h5></th>
            </tr>
            <tr class="row" v-for="item in charts.data" :key="item.name">
                <th><h5 class="text">{{ item.name }}</h5></th>
                <td class="col" v-for="chart in item.charts" :key="chart">
                    <BarChart class="chart" :chart="chart" />
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import BarChart from './BarChart.vue'

export default {
    name: "BarChartsGroup",
    components: {
        BarChart
    },
    props: {
        charts: Object,
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 65%;
    display: flex;
    align-items: center;
}

.table {
    border: 1px solid #a3a3a3;
    border-radius: 10px;
    text-align: left;
    border-spacing: 10px 20px;
    color: #fff;
    background-color: #1980a1;

    &__header {
        text-align: center;
    }

    .text {
        margin: 0;
    }

    .col {
        width: 250px;

        .chart {
            margin: 10px 0;
        }
    }
}

.pb-5 {
    padding-bottom: 5px;
}
</style>