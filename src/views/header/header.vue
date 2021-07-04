<template lang="pug">
header.rn-header
    a.rn-no-deco(href="/")
        rntxt.rn-centre(init_message="inscrutable plus", :init_fontSize="30")
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
    top: 0;
    width: 100%;
    height: 50px;
    z-index: 9999;
    position: sticky;
    text-align: center;
    background-color: #ffffff;
    border-bottom: 1px solid #ececec;
}
.rn-centre {
    line-height: 51px;
}
.rn-no-deco {
    text-decoration: none;
}
</style>