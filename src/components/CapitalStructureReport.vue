<template>
    <div>
        <h4 class="header">Отчет о структуре капитала</h4>
        <div class="container">
            <Table :table="table1" />
            <Table :table="table2" />
            <h5>*-16,6% от фактической величины</h5>
        </div>
    </div>
</template>

<script>
import Table from './Table.vue'

export default {
    name: "Container",
    components: {
        Table,
    },
    data() {
        return {
            table1: {
                data: [
                    {
                        name: "Совокупный капитал",
                        values: [`${2.430} млрд. рублей*`],
                    },
                    {
                        name: "Основной капитал",
                        values: [`${2.204} млрд. рублей*`],
                    },
                ],
            },
            table2: {
                data: [
                    {
                        name: "НФМК1",
                        values: [`${461.09}%`],
                    },
                    {
                        name: "НФМК2",
                        values: [`${36.4}%`],
                    },
                    {
                        name: "НФМК1",
                        values: [`${0.01}%`],
                    },
                    {
                        name: "НФМК2",
                        values: [`${0.01}%`],
                    },
                ],
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