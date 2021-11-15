<template>
	<CapitalStructureReport />
    <CapitalAllocationReport />
</template>

<script>
import CapitalAllocationReport from '../../components/CapitalAllocationReport.vue'
import CapitalStructureReport from '../../components/CapitalStructureReport.vue'

export default {
	name: 'MFO',
	components: {
        CapitalStructureReport,
        CapitalAllocationReport,
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
}
</style>
