<template>
    <div>
        <h4 class="header">Отчет об утилизации лимитов и достижении сигнальных значений</h4>
        <div class="container">
            <div class="table">
                <div class="block border">
                    <div class="row">
                        <div v-for="item in chartsGroup.header" :key="item">{{ item }}</div>
                    </div>
                </div>
                <div class="block border" v-for="block in chartsGroup.blocks" :key="block">
                    <div class="row" v-for="row in block" :key="row">
                        <div class="col border" :class="chart.pos" :style="{gridArea: chart.pos}" v-for="chart in row" :key="chart">
                            <h5>{{ chart.name }}</h5>
                            <BarChart :chart="chart.data"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from './BarChart.vue'
export default {
    components: {
        BarChart
        
    },
    data() {
        return {
            chartsGroup: {
                header: ["Группа, %", "Банк, %", "МФК, %"],
                blocks: [
                    // 1 block
                    [
                        // 1 row
                        [
                            {
                                pos: "left",
                                name: "Кредитный риск",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "center",
                                name: "ДПК",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "POS-Loans",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                        // 2 row
                        [
                            {
                                pos: "right",
                                name: "Car Loans",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                        // 3 row
                        [
                            {
                                pos: "right",
                                name: "Кредитные карты (X-Sell)",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                        // 4 row
                        [
                            {
                                pos: "center",
                                name: "Сеть",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Ипотека",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                        // 5 row
                        [
                            {
                                pos: "right",
                                name: "МСБ",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                        // 6 row
                        [
                            {
                                pos: "right",
                                name: "Нецелевое кредитование",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                        // 7 row
                        [
                            {
                                pos: "right",
                                name: "Кредитные карты (Бранч)",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                        // 8 row
                        [
                            {
                                pos: "center",
                                name: "ДКБКО (Корп. бизнес)",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Корпоративный бизнес",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                        // 9 row
                        [
                            {
                                pos: "center",
                                name: "ДКБКО (Казн-во)",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Операции на финансовых рынках",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                    ],
                    // 2 block
                    [
                        // 1 row
                        [
                            {
                                pos: "left",
                                name: "Рыночный риск (ПТРК)",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "center",
                                name: "ДУАП",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Управление структурой баланса",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                    ],
                    // 3 block
                    [
                        // 1 row
                        [
                            {
                                pos: "left",
                                name: "Рыночный риск (Валютный риск)",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "center",
                                name: "ДУАП",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Управление структурой баланса",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                    ],
                    // 4 block
                    [
                        // 1 row
                        [
                            {
                                pos: "left",
                                name: "Процентный риск банковской книги",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "center",
                                name: "ДУАП",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Управление структурой баланса",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                    ],
                    // 5 block
                    [
                        // 1 row
                        [
                            {
                                pos: "left",
                                name: "Операционный риск",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "center",
                                name: 'АО "ОТП Банк"',
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Все бизнес линии",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                    ],
                    // 6 block
                    [
                        // 1 row
                        [
                            {
                                pos: "left",
                                name: "Риск концентрации",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "center",
                                name: 'АО "ОТП Банк"',
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Все бизнес линии",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                    ],
                    // 7 block
                    [
                        // 1 row
                        [
                            {
                                pos: "left",
                                name: "Риск ликвидности",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "center",
                                name: "ДУАП",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                            {
                                pos: "right",
                                name: "Управление структурой баланса",
                                data: {
                                    values: [
                                        {value: 6},
                                        {value: 8},
                                    ],
                                    mark: {value: 2.97},
                                }
                            },
                        ],
                    ],
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
    padding: 0 30px;
}

.table {
    width: 100%;
    display: grid;

    .border {
        border: 1px solid #a3a3a3;
        border-radius: 10px;
    }

    .block {
        padding: 0 20px;
        margin: 10px 0;
        background-color: #fafafa;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "left center right";
        gap: 20px;
        margin: 20px 0;
    }

    .col {
        text-align: left;
        padding: 10px;

        h5 {
            margin: 0 0 30px;
        }
    }

    .left {
        color: #fff;
        background-color: #1980a1;
    }

    .center {
        background-color: #d6ecf3;
    }

    .right {
        background-color: #f0f0f0;
    }
}
</style>