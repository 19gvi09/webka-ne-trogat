<template>
    <div>
        <h4 class="header">Отчет об аллокации капитала банка (в % от основного капитала)</h4>
        <div class="container">
            <ColumnChart :chart="chart1" />
            <ColumnChart :chart="chart2" />
            <ColumnChart :chart="chart3" />
        </div>
        <h5 class="desc">* - требования к капиталу для Риска концентрации устанавливаются как часть стресс буфера (экспертное увеличение потерь от стресса вследствие существенных концентраций). Утилизация стресс-буфера Риском концентрации - 0%</h5>
    </div>
</template>

<script>
import ColumnChart from './ColumnChart.vue'

export default {
    components: {
        ColumnChart
    },
    data() {
        return {
            chart1: {
                name: "Типы рисков, %",
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
                        name: "ПРБК",
                        value: 0.54
                    },
                    {
                        name: "Рыночный риск (ПРТК)",
                        value: 2.97,
                    },
                    {
                        name: "Рыночный риск (ВР)",
                        value: 1.09
                    },
                    {
                        name: "Риск ликвидн.",
                        value: 0.54
                    },
                    {
                        name: "Риск конц.*",
                        value: 0.54
                    },
                ],
                place: false,
                column: false,
            },
            chart2: {
                name: "Структурные подразделения, %",
                data: [
                    {
                        name: "ДПК",
                        value: 2.97,
                    },
                    {
                        name: "Сеть",
                        value: 1.09
                    },
                    {
                        name: "ДКБКО (Казн-во.)",
                        value: 0.54
                    },
                    {
                        name: "ДКБКО (Корп. Бизн.)",
                        value: 1.09
                    },
                    {
                        name: "ДУАП",
                        value: 0.54
                    },
                ],
                place: false,
                column: false,
            },
            chart3: {
                name: "Направления бизнеса, %",
                data: [
                    {
                        name: "POS-Loans",
                        value: 2.97,
                    },
                    {
                        name: "Car Loans",
                        value: 1.09
                    },
                    {
                        name: "POS X-sell",
                        value: 0.54
                    },
                    {
                        name: "Корп. кредиты",
                        value: 2.97,
                    },
                    {
                        name: "Нецелев. кредиты",
                        value: 1.09
                    },
                    {
                        name: "Сеть (Карты Бранч)",
                        value: 0.54
                    },
                    {
                        name: "Ипотека",
                        value: 0.54
                    },
                    {
                        name: "Корп. бизнес",
                        value: 2.97,
                    },
                    {
                        name: "Опер. на фин. рынках",
                        value: 1.09
                    },
                    {
                        name: "Упр. структ. баланса",
                        value: 0.54
                    },
                ],
                place: false,
                column: false,
            },
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
    margin: 20px 0 0;
}

.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    background-color: #fafafa;
}

.desc {
    text-align: left;
    padding: 20px 30px;
    margin: 0 0 20px;
    background-color: #fafafa;
}
</style>