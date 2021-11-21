<template>
    <div>
        <h4 class="heading">{{ chart.name }}</h4>
        <div class="wrapper" :class="{column: column}" >
            <div class="chart">
                <div class="chart__section" v-for="item in data" :key="item" :style="{background: item.color, height: item.height + '%'}">
                    <span v-if="chart.place && item.value != 0" >{{ item.height.toFixed(2) }}%</span>
                </div>
            </div>
            <div class="labels" :class="{'pl-0': column}" v-if="!chart.labelsHidden">
                <div class="labels__label" :class="{'mt-5': column}" v-for="item in data" :key="item.name">
                    <div :style="{background: item.color}"></div>
                    <h5>{{item.name}} <span v-if="!chart.place">({{ item.height.toFixed(2) }}%)</span></h5>
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
    },
    data() {
        return {
            colors: ["#0066CC", "#0099FF", "#339999", "#33CCCC", "#FFCC66", "#66CC99", "#CCCCFF", "#999999", "#b7d4b7", "#6699CC"],
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
        },
        column() {
            return this.chart.column
        }
    }
}
</script>

<style lang="scss" scoped>
.heading {
    text-align: left;
}

.wrapper {
    display: flex;
}

.column {
    flex-direction: column;
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
        margin:  5px 0 0;
        font-size: 80%;

        div {
            width: 10px;
            height: 10px;
            border-radius: 5px;
            margin: 0 5px 0 0;
        }

        h5 {
            margin: 0;
            text-align: left;
        }
    }
}

.mt-5 {
    margin-top: 5px;
}

.pl-0 {
    padding-left: 0;
}
</style>