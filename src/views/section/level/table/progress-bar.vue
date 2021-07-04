<template lang="pug">
div.rn-progress-bar(:style="style2")
    div.rn-progress-bar-gauge(:style="style")
    //- div.rn-progress-bar-endline(v-if="value < 1")
</template>

<script>
export default {
    name: 'rn-progress-bar',
    props: {
        init_value: {
            default: 30,
        },
        init_color: {
            default: '#585858',
        },
        init_back: {
            default: '#000000',
        }
    },
    watch: {
        init_value: function() {
            this.value = this.init_value;
        },
        init_color: function() {
            this.color = this.init_color;
        },
        init_back: function() {
            this.back = this.init_back;
        },
    },
    computed: {
        style: function() {
            return {
                backgroundColor: this.color,
                width: this.value * 100 + '%',
            };
        },
        style2: function() {
            return {
                backgroundColor: this.back,
            };
        },
    },
    data: function() {
        return {
            back: this.init_back,
            value: this.init_value,
            color: this.init_color,
        };
    },
}
</script>

<style lang="scss" scoped>
.rn-progress-bar {
    width: 100%;
    height: 28px;
    min-width: 300px;
}
.rn-progress-bar-gauge {
    height: 28px;
    display: inline-block;
    animation-duration: 1s;
    animation-name: slide-in;
}
// .rn-progress-bar-endline {
//     width: 2px;
//     height: 28px;
//     display: inline-block;
//     background-color: #ffffff;
// }
@keyframes slide-in {
    from {
        width: 0%;
    }
}
</style>