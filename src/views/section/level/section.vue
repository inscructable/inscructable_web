<template lang="pug">
section.level-section
    div.level-table-wrapper
        level-table
</template>

<script>
import LevelTable from './table/level-table.vue';

export default {
    name: 'level-section',
    components: {
        LevelTable,
    },
}
</script>

<style lang="scss" scoped>
.level-section {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
}
.level-table-wrapper {
    min-width: 480px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
</style>