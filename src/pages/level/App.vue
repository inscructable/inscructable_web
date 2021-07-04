<template lang="pug">
div#app
    level-root
</template>

<script>
import LevelRoot from './Root.vue';
import mixin_default from '../mixins/mixin_default.js';

export default {
    name: 'app',
    mixins: [mixin_default],
    components: {
        LevelRoot,
    },
}
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
}
@font-face {
    font-family: "NotoSans";
    src: url(../../assets/NotoSans-Regular.ttf);
}
</style>