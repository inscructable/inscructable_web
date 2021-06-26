<template lang="pug">
section.index-section
    button(@click="onClick") btn
</template>

<script>
import axios from 'axios';

export default {
    name: 'index-section',
    methods: {
        onClick: function() {
            
        },
    },
}
</script>

<style style="scss" scoped>
.index-section {
    width: 100%;
}
</style>