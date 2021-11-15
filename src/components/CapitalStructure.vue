<template>
    <div>
        <div class="heading">
            <h3>Отчет об агрегированном объеме значимых рисков и структура потребления капитала</h3>
        </div>
        <div class="content light-grey">
            <div>
                <h4 class="chart__name">Основной капитал, %</h4>
                <ColumnChart :data= data.items />
            </div>
            <div class="right-block">
                <div class="wrapper">
                    <div class="item">
                        <h4>Совокупный капитал</h4>
                        <h4 class="item__value">{{data.values.first}} млрд. руб.</h4>
                    </div>
                    <div class="item">
                        <h4>Основной капитал, в т.ч.:</h4>
                        <h4 class="item__value">{{data.values.second}} млрд. руб.</h4>
                    </div>
                    <ul>
                        <div class="item">
                            <li>Совокупный уровень рисков</li>
                            <h4 class="item__value">{{data.values.third}} млрд. руб.</h4>
                        </div>
                        <div class="item">
                            <li>Стресс-буфер</li>
                            <h4 class="item__value">{{data.values.fourth}} млрд. руб.</h4>
                        </div>
                        <div class="item">
                            <li>Резерв капитала</li>
                            <h4 class="item__value">{{data.values.fifth}} млрд. руб.</h4>
                        </div>
                    </ul>
                </div>
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
    props: {
        data: Object,
    },
}
</script>

<style lang="scss" scoped>
.heading {
    font-weight: bolder;
    background-color: #52ad30;
    color: #fff;
    padding: 9px;
    margin: 40px 0 0;
    text-align: center;
}
</style>