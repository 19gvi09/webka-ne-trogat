<template>
    <div>
        <h4 class="header">Отчет об агрегированном объеме значимых рисков и структура потребления капитала Банковской Группы</h4>
        <div class="container">
            <ColumnChart :chart="risks1" />
            <ColumnChart :chart="risks2" />
            <div class="tables">
                <Table class="mb-10" :table="table1" />
                <Table :table="table2" />
            </div>
        </div>
    </div>
</template>

<script>
import ColumnChart from './ColumnChart.vue'
import Table from './Table.vue'

export default {
    name: "CapitalStructureGroup",
    components: {
        ColumnChart,
        Table
    },
    data() {
        return {
            risks1: {
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
            risks2: {
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
            table1: {
                heading: ["Компонент капитала", "Группа", "Банк", "МФК"],
                data: [
                    {
                        name: "Совокупный капитал",
                        values: [10, 10, 10],
                    },
                    {
                        name: "Основной капитал, в т.ч.:",
                        values: [10, 10, 10],
                    },
                    {
                        name: "Совокупный уровень рисков",
                        values: [10, 10, 10],
                    },
                    {
                        name: "Стресс-буфер",
                        values: [10, 10, 10],
                    },
                    {
                        name: "Резерв по капиталу",
                        values: [10, 10, 10],
                    },
                ],
            },
            table2: {
                heading: ["Норматив", "Группа", "Банк", "МФК"],
                data: [
                    {
                        name: "Н20.0 / Н1.0 / НМФК1",
                        values: [10, 10, 10],
                    },
                    {
                        name: "Н20.1 / Н1.1 / - ",
                        values: [10, 10],
                    },
                    {
                        name: "Н20.2 / Н1.2 / - ",
                        values: [10, 10],
                    },
                ],
                width: "75%"
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
    padding: 20px 30px 0;
}

.tables {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px 0 0;
}

.mb-10 {
    margin-bottom: 10px;
}
</style>