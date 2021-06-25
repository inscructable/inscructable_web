<template lang="pug">
div.rn-footer
    div.vertical-frame
        rntxt(init_message="footer.temp")
</template>

<script>
import rntxt from '../components/rntxt.vue';

export default {
    name: 'rn-footer',
    components: {
        rntxt,
    },
}
</script>

<style lang="scss" scoped>
.rn-footer {
    width: 100%;
    height: 250px;
    background-color: #4f4f4f;
}
.vertical-frame {
    width: 100%;
    height: 100%;
    display: table;
    color: #ececec;
    text-align: center;
    span {
        display: table-cell;
        vertical-align: middle;
    }
}
</style>