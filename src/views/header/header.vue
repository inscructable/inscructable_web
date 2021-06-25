<template lang="pug">
div.rn-header
    rntxt(init_message="inscrutable web", :init_fontSize="20")
</template>

<script>
import rntxt from '../components/rntxt.vue';

export default {
    name: 'rn-header',
    components: {
        rntxt,
    },
}
</script>

<style lang="scss" scoped>
.rn-header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ececec;
}
</style>