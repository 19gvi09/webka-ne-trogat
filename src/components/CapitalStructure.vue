<template>
    <div>
        <h4 class="header">Отчет об агрегированном объеме значимых рисков и структура потребления капитала</h4>
        <div class="container">
            <ColumnChart :chart="chart1" />
            <ColumnChart :chart="chart2" />
            <div class="wrapper">
                <div class="item mt-10" v-for="item in data.headers" :key="item.name">
                    <h4>{{ item.name }}</h4>
                    <h4>{{ item.value }} млрд. руб.</h4>
                </div>
                <ul>
                    <div class="item" v-for="item in data.items" :key="item.name">
                        <li>{{ item.name }}</li>
                        <h4>{{ item.value }} млрд. руб.</h4>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ColumnChart from "./ColumnChart.vue"

export default {
    name: "CapitalStructure",
    components: {
        ColumnChart,
    },
    data() {
        return {
            chart1: {
                name: "Основной капитал, %",
                data: [
                    {
                        name: "Совокупный уровень рисков (текущая утилизация лимитов)",
                        value: 2.97,
                    },
                    {
                        name: "Стресс-буфер (с учетом риска концентрации)",
                        value: 1.09
                    },
                    {
                        name: "Резерв по капиталу",
                        value: 0.54
                    },
                ],
                place: true,
                column: true,
            },
            chart2: {
                name: "Совокупный капитал, %",
                data: [
                    {
                        name: "Совокупный уровень рисков (текущая утилизация лимитов)",
                        value: 2.97,
                    },
                    {
                        name: "Стресс-буфер (с учетом риска концентрации)",
                        value: 1.09
                    },
                    {
                        name: "Резерв по капиталу",
                        value: 0.54
                    },
                ],
                place: true,
                column: true,
                labelsHidden: true,
            },
            data: {
                headers: [
                    {
                        name: "Совокупный капитал",
                        value: 10,
                    },
                    {
                        name: "Основной капитал, в т.ч.:",
                        value: 10,
                    },
                ],
                items: [
                    {
                        name: "Совокупный уровень рисков",
                        value: 10,
                    },
                    {
                        name: "Стресс-буфер",
                        value: 10,
                    },
                    {
                        name: "Резерв капитала",
                        value: 10,
                    },
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    background-color: #52ad30;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 30px;
}

.wrapper {
    border: 1px solid #a3a3a3;
    border-radius: 10px;
    padding: 10px;
    margin: 15px 0;

    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h4 {
            margin: 0;
        }

        li {
            margin: 0 10px 0 0;
        }
    }

    ul {
        margin: 10px 0;
    }

    .mt-10 {
        margin: 10px 0 0;
    }
}
</style>