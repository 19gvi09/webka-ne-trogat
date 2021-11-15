<template>
    <capital-structure :data= CapitalStructureData />
</template>

<script>
import CapitalStructure from '../../components/CapitalStructure.vue'


export default {
    name: 'Index',
    components: {
        CapitalStructure,

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
    text-align: center;
}
</style>
