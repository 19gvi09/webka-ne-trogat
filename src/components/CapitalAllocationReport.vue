<template>
    <div>
        <h4 class="header">Отчет об аллокации капитала МФК "ОТП Финанс" (в % от основного капитала Банковской Группы)</h4>
        <div class="container">
            <div class="section">
                <ColumnChart :chart="risks" />
                <h5>** - От основного капитала группы</h5>
            </div>
            <div class="section">
                <BarChartsGroup :charts="chartsGroup" />
                <h5>*** - Процентный риск, Операционный риск, Риск ликвидности как часть лимита Группы</h5>
            </div>
        </div>
    </div>
</template>

<script>
import BarChartsGroup from './BarChartsGroup.vue'
import ColumnChart from './ColumnChart.vue'

export default {
    name: "CapitalAllocationReport",
    components: {
        ColumnChart,
        BarChartsGroup,
    },
    data() {
        return {
            risks: {
                name: "Типы рисков**, %",
                data: [
                    {
                        name: "Кред. риск",
                        value: 0.0297,
                    },
                    {
                        name: "Опер. риск",
                        value: 0.0109
                    },
                    {
                        name: "Риск ликвидн.",
                        value: 0
                    },
                    {
                        name: "ПР",
                        value: 0.0054
                    },
                    {
                        name: "Риск конц.",
                        value: 0
                    },
                ],
                // Расположение цифр на графике (true - цифры на графике, false - цифры на подписях)
                place: false,
                column: false
            },
            chartsGroup: {
                data: [
                    {
                        name: "Кредитный риск",
                        charts: [
                            {
                                values: [
                                    {value: 10.45},
                                    {value: 11},
                                ],
                                mark: {value: 2.97},
                            }
                        ]
                    },
                    {
                        name: "ПР***",
                        charts: [
                            {
                                values: [
                                    {value: 6.27},
                                    {value: 6.6},
                                ],
                                mark: {value: 0.54},
                            }
                        ]
                    },
                    {
                        name: "Операционный риск",
                        charts: [
                            {
                                values: [
                                    {value: 19},
                                    {value: 20},
                                ],
                                mark: {value: 1.09},
                            }
                        ]
                    },
                    {
                        name: "Риск ликвидности",
                        charts: [
                            {
                                values: [
                                    {value: 1.9},
                                    {value: 2},
                                ],
                                mark: {value: 0},
                            }
                        ]
                    },
                    {
                        name: "Риск концентрации",
                        charts: [
                            {
                                values: [
                                    {value: null},
                                    {value: null},
                                ],
                                mark: {value: 0},
                            }
                        ]
                    },
                ],
                column: false
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
    margin: 20px 0 0;
}

.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    background-color: #fafafa;

    .section {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
}
</style>