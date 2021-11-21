<template>
    <div class="chart">
        <div class="chart__section" v-for="item in data.values" :key="item.value" :style="{background: item.color, height: 100 + '%', width: item.width + '%'}"><h5 class="value">{{item.value}}</h5></div>
        <div class="chart__mark" :style="{left: data.mark.width + '%'}"><h5 class="value mark-value">{{data.mark.value}}</h5></div>
    </div>
</template>

<script>
export default {
    name: "BarChart",
    props: {
        chart: Object,
    },
    computed: {
        data() {
            let differences = [75, 15, 10]
            let colors = ["#52ad30", "#f9da08", "#c31c14"]
            let data = this.chart
            data.values.push({})
            for (let i = 0; i < data.values.length; i++) {
                data.values[i].width = differences[i]
                data.values[i].color = colors[i]
                //console.log("Процент секции " + data.values[i].width + "%")
            }
            data.mark.width = (100*(data.mark.value)*0.6)/data.values[1].value
            //data.values[this.items.items.length-1].value = ""
            return data
        }
    }
}
</script>

<style lang="scss" scoped>
.chart {
    height: 10px;
    width: 100%;
    display: flex;
    position: relative;

    &__section {
        text-align: end;
        position: relative;

        &:first-child {
            border-radius: 10px 0 0 10px;
        }

        &:nth-last-child(2) {
            border-radius: 0 10px 10px 0;
        }
    }

    &__mark {
        position: absolute;
        top: -5px;
        background-color: #000;
        width: 2px;
        height: 20px;
    }

    .value {
        position: absolute;
        right: 0;
        top: -15px;
        margin: 0;
    }
}
</style>