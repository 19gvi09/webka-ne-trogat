<template>
    <div>
        <h4 class="header">Отчет о структуре капитала и нормативов</h4>
        <div class="container">
            <div>
                <div>
                    <h4>Капитал</h4>
                    <Table :table="table1" />
                </div>
                <div class="desc">
                    <h5>*-16,6% от фактической величины</h5>
                    <h5>*НМФК1-норматив достаточности собственных средств</h5>
                    <h5>*НМФК2-норматив ликвидности</h5>
                    <h5>*НМФК3-максимальный размер риска на одного заемщика или группу связанных заемщиков</h5>
                    <h5>*НМФК4-максимальный размер риска на связанное с микрофинансовой компанией лицо</h5>
                </div>
            </div>
            <div>
                <h4>Нормативы</h4>
                <Table :table="table2" />
            </div>
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
                        name: "НФМК1*",
                        values: [`${461.09}%`],
                    },
                    {
                        name: "НФМК2*",
                        values: [`${36.4}%`],
                    },
                    {
                        name: "НФМК1*",
                        values: [`${0.01}%`],
                    },
                    {
                        name: "НФМК2*",
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
    padding: 20px 0 0;
    h5 {
        margin: 5px 0 0;
    }
}
</style>