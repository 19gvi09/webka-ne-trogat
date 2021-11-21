<template>
    <div class="app-wrapper">
        <div class="app-sidebar">
            <Datepicker v-model="picked" :locale="ru" />
            <div class="app-links">
                <a href="#" class="app-links__link">Группа 100%</a>
                <a href="#" class="app-links__link">Группа</a>
                <a href="#" class="app-links__link">Банк</a>
                <a href="#" class="app-links__link">МФК</a>
            </div>
        </div>
        <CapitalStructureReport />
        <CapitalAllocationReport />
    </div>
</template>

<script>
import CapitalAllocationReport from '../../components/CapitalAllocationReport.vue'
import CapitalStructureReport from '../../components/CapitalStructureReport.vue'
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import { ru } from 'date-fns/locale'

export default {
	name: 'MFO',
	components: {
        CapitalStructureReport,
        CapitalAllocationReport,
        Datepicker
	},
    data() {
        return {
            picked: ref(new Date()),
            ru: ru
        }
    },
    watch: {
        picked: function() {
            console.log(this.picked.toISOString().split('T')[0])
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px 0;

    .app-wrapper {
        max-width: 1140px;
        margin: 0 auto;
        padding: 20px;
        box-shadow: #b3b3b3 0 0 10px 0;
        position: relative;
    }

    .app-sidebar {
        width: 280px;
        position: absolute;
        right: -290px;
        top: 0;
    }

    .app-links {
        display: flex;
        justify-content: space-between;
        margin: 20px 0 0;

        &__link {
            text-decoration: none;
            color: #fff;
            background-color: #52ad30;
            padding: 5px 10px;
            font-size: 15px;
        }
    }
}
</style>
