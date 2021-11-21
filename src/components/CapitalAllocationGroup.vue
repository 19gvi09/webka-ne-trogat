<template>
    <div>
        <h4 class="header">Отчет об аллокации капитала Банковской Группы (в % от основного капитала) и утилизация лимитов</h4>
        <div class="container">
            <ColumnChart :chart="risks" />
            <BarChartsGroup class="charts" :charts="chartsGroup" />
        </div>
    </div>
</template>

<script>
import BarChartsGroup from './BarChartsGroup.vue'
import ColumnChart from './ColumnChart.vue'

export default {
    name: "CapitalAllocationGroup",
    components: {
        BarChartsGroup,
        ColumnChart
    },
    data() {
        return {
            risks: {
                name: "Типы рисков, %",
                data: [
                    {
                        name: "Кредитный риск",
                        value: 2.97,
                    },
                    {
                        name: "Опер. Риск",
                        value: 1.09
                    },
                    {
                        name: "ПРБК + ПР",
                        value: 0
                    },
                    {
                        name: "Валютный риск",
                        value: 0.54
                    },
                    {
                        name: "ПРТК",
                        value: 0
                    },
                    {
                        name: "Риск ликвидн.",
                        value: 0.54
                    },
                    {
                        name: "Риск конц.",
                        value: 0
                    },
                ],
                place: false,
                column: false,
            },
            chartsGroup: {
                header: ["", "Группа, %", "Банк, %", "МФК, %"],
                data: [
                    {
                        name: "Кредитный риск",
                        charts: [
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 2.97},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 2.97},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 2.97},
                            }
                        ]
                    },
                    {
                        name: "Рыночный риск (ПТРК)",
                        charts: [
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0.54},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0.54},
                            }
                        ]
                    },
                    {
                        name: "Рыночный риск (Валютный риск)",
                        charts: [
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 1.09},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 1.09},
                            }
                        ]
                    },
                    {
                        name: "Операционный риск",
                        charts: [
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                        ]
                    },
                    {
                        name: "ПРБК + ПР(МФК)",
                        charts: [
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                        ]
                    },
                    {
                        name: "Риск ликвидности",
                        charts: [
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                        ]
                    },
                    {
                        name: "Риск концентрации",
                        charts: [
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                            {
                                values: [
                                    {value: 6},
                                    {value: 8},
                                ],
                                mark: {value: 0},
                            },
                        ]
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
    margin: 20px 0 0;
}

.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 0;

    .charts {
        padding: 20px 0 0;
    }
}
</style>