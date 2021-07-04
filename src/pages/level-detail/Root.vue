<template lang="pug">
div.level-detail-root
    rn-header
    rn-section
    rn-footer
    rn-modal
</template>

<script>
import RnModal from '../../views/modal/modal.vue'
import RnHeader from '../../views/header/header.vue';
import RnFooter from '../../views/footer/footer.vue';
import RnSection from '../../views/section/level-datil/section.vue';

export default {
    name: 'level-deatil-root',
    components: {
        RnModal,
        RnHeader,
        RnFooter,
        RnSection,
    },
}
</script>

<style lang="scss" scoped>
.level-detail-root {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>