<template lang="pug">
header.rn-header
    a.rn-back-link(v-if="pathname != '/' && innerWidth <= 720" @click="onClick")
        div.rn-back
    a.rn-no-deco(href="/")
        rntxt.rn-centre(init_message="inscrutable plus", :init_fontSize="28")
</template>

<script>
import rntxt from '../components/rntxt.vue';

export default {
    name: 'rn-header',
    components: {
        rntxt,
    },
    data: function() {
        return {
            pathname: '/',
            innerWidth: 0,
        };
    },
    methods: {
        onClick: function() {
            window.history.back();
        },
        widthObserver: function() {
            this.innerWidth = window.innerWidth;
            this.pathname = window.location.pathname;
        },
    },
    created: function() {
        this.innerWidth = window.innerWidth;
        this.pathname = window.location.pathname;
        window.addEventListener('resize', this.widthObserver);
    },
    beforeDestroy: function(){
        windos.removeEventListener('resize', this.widthObserver);
    }
}
</script>

<style lang="scss" scoped>
.rn-header {
    top: 0;
    width: 100%;
    height: 50px;
    z-index: 9;
    position: sticky;
    text-align: center;
    background-color: #1e2122;
    border-bottom: 1px solid #42494b;
}
.rn-centre {
    line-height: 51px;
}
.rn-no-deco {
    text-decoration: none;
}
.rn-back {
    width: 15px;
    top: 15.25px;
    height: 15px;
    left: 15.25px;
    position: absolute;
    transform: rotate(-45deg);
    border-top: #ececec 3px solid;
    border-left: #ececec 3px solid;
}
.rn-back-link {
    top: 0;
    left: 0;
    width: 51px;
    height: 51px;
    cursor: pointer;
    position: absolute;
}
</style>