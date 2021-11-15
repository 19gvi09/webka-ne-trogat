<template>
    <div>
        <h4>{{ chart.name }}</h4>
        <div class="wrapper">
            <div class="chart">
                <div class="chart__section" v-for="item in data" :key="item" :style="{'background-color': item.color, height: item.height + '%'}">
                    <span v-if="place" >{{ (item.value * 100).toFixed(2) }}%</span>
                </div>
            </div>
            <div class="labels">
                <div class="labels__label" v-for="item in data" :key="item.name">
                    <div :style="{background: item.color}"></div>
                    <h5>{{item.name}} <span v-if= !place>({{ (item.value * 100).toFixed(2) }}%)</span></h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ColumnChart",
    props: {
        chart: Object,
        place: Boolean
    },
    data() {
        return {
            colors: ["#FFC200", "#FEA002", "#174B7D", "#19A3EB", "#67DD0B", "#25A800"],
        }
    },
    computed: {
        data() {
            this.chart.data.map((e, i) => {
                e.height = 100*e.value/this.chart.data.reduce((prev, curr) => { return prev + curr.value }, 0)
                e.color = this.colors[i]
                console.log(e)
                return e
            })
            return this.chart.data
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: flex-end;
}

.chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 80px;
    font-size: 80%;

    &__section {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
}

.labels {
    padding: 0 0 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &__label {
        display: flex;
        margin:  20px 0 0;
        font-size: 80%;

        div {
            width: 10px;
            height: 10px;
            border-radius: 5px;
        }

        h5 {
            margin: 0 0 0 5px;
        }
    }
}
</style>