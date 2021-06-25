<template lang="pug">
div.rnbtn(:style="style" @click="onClick" @mouseover="onMouseOver" @mouseleave="onMouseLeave")
    div.rnbtn-message
        rntxt.centre(:init_color="init_color" :init_message="init_message" :init_fontSize="init_fontSize" :init_fontFamily="init_fontFamily" :init_fontWeight="init_fontWeight")
</template>

<script>
import Util from './js/util.js';
import rntxt from './rntxt.vue';

export default {
    name: 'rnbtn',
    components: {
        rntxt,
    },
    props: {
        init_color: {
            default: '#000000',
        },
        init_width: {
            default: 100,
        },
        init_height: {
            default: 40,
        },
        init_message: {
            default: '',
        },
        init_fontSize: {
            default: 12,
        },
        init_fontFamily: {
            default: '',
        },
        init_fontWeight: {
            default: 400,
        },
        init_backgroundColor: {
            default: '#ffffff',
        },
    },
    watch: {
        init_width: function() {
            this.width = this.init_width;
        },
        init_height: function() {
            this.height = this.init_height;
        },
        init_backgroundColor: function() {
            this.backgroundColor = this.init_backgroundColor;
        },
    },
    data: function() {
        return {
            width: this.init_width,
            height: this.init_height,
            backgroundColor: this.init_backgroundColor,
        };
    },
    computed: {
        style: function() {
            return {
                width: Util.mU(this.width),
                height: Util.mU(this.height),
                backgroundColor: this.init_backgroundColor,
            };
        },
    },
    methods: {
        onClick: function() {
            this.$emit('click');
        },
        onMouseOver: function() {
            this.$emit('mouseover');
        },
        onMouseLeave: function() {
            this.$emit('mouseleave');
        },
    },
}
</script>

<style lang="scss" scoped>
.rnbtn {
    border: none;
    outline: none;
    transition: .3s;
    display: inline-block;

    &:hover {
        cursor: pointer;
    }
    .rnbtn-message {
        width: 100%;
        height: 100%;
        position: relative;
        .centre {
            top: 50%;
            left: 50%;
            position: absolute;
            -webkit-transform: translateX(-50%) translateY(-50%);
                    transform: translateX(-50%) translateY(-50%);
        }
    }
}
</style>