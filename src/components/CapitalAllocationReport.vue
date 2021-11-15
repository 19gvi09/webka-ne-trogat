<template>
    <div>
        <h4 class="header">Отчет об аллокации капитала</h4>
        <div class="container">
            <ColumnChart :chart="risks" :place="place" />
        </div>
    </div>
</template>

<script>
import ColumnChart from './ColumnChart.vue'

export default {
    name: "CapitalAllocationReport",
    components: {
        ColumnChart
    },
    data() {
        return {
            risks: {
                name: "Типы рисков",
                data: [
                    {
                        name: "Кред. риск",
                        value: 2.97,
                    },
                    {
                        name: "Опер. риск",
                        value: 1.09
                    },
                    {
                        name: "Риск ликвидн.",
                        value: 0
                    },
                    {
                        name: "ПР",
                        value: 0.54
                    },
                    {
                        name: "Риск конц.",
                        value: 0
                    },
                ]
            },
            // Расположение цифр на графике (true - цифры на графике, false - цифры на подписях)
            place: false
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    background-color: #52ad30;
    color: #fff;
    padding: 20px;
    text-align: center;
}

.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 30px;

    h5 {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
    }
}
</style>