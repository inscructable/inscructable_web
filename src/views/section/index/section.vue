<template lang="pug">
section.index-section
    div.content
        div.row1
            rntxt.rn-b(:init_message="$t('index.title1')" :init_fontSize="20")
            br
            rntxt.rn-b(:init_message="$t('index.title2')" :init_fontSize="20")
            br
            rntxt.rn-b(:init_message="$t('index.title3')" :init_fontSize="20")
        div.row2
            button.index-go-problem(@click="onClickLevel")
                rntxt.rn-b(:init_message="$t('index.go-problem')" :init_fontSize="20")
        div.row3
            rntxt.index-rank-label(:init_message="$t('index.hyu_ranking')" :init_fontSize="20" :init_fontWeight="900")
            div.index-rank-table-wrapper
                index-rank-table
</template>

<script>
import axios from 'axios';

import rntxt from '../../components/rntxt.vue';
import IndexRankTable from './table/index-rank-table.vue';

export default {
    name: 'index-section',
    components: {
        rntxt,
        IndexRankTable,
    },
    methods: {
        onClickLevel: function() {
            window.location.href = 'level';
        },
    },
}
</script>

<style style="scss" scoped>
.index-section {
    width: 100%;
    padding: 0px 32px;
    box-sizing: border-box;
}
.content {
    min-width: 200px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.row1 {
    width: 100%;
    height: 350px;
    padding: 120px 0px;
    text-align: center;
    box-sizing: border-box;
}
.row2 {
    width: 100%;
    height: 200px;
    padding: 20px 0px;
    text-align: center;
    box-sizing: border-box;
}
.row3 {
    width: 100%;
    padding: 32px 0px;
    box-sizing: border-box;
}
.rn-b {
    display: block;
}
.index-rank-label {
    display: block;
    padding: 16px 0px;
    text-align: center;
}
.index-go-problem {
    min-height: 40px;
    border: none;
    cursor: pointer;
    padding: 10px 16px;
    border-radius: 10px;
    background-color: #cccccc;
    box-shadow: 5px 2px 2px #ececec;
}
.index-rank-table-wrapper {
    width: 100%;
    overflow-x: auto;
}
</style>