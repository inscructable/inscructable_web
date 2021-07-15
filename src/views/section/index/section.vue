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
            rntxt.index-weekly-label(:init_message="$t('index.hyu_weekly')" :init_fontSize="20" :init_fontWeight="900")
            div.index-weekly-table-wrapper
                index-weekly-table(:init_userInfo="userInfo")
        div.row4
            rntxt.index-rank-label(:init_message="$t('index.hyu_ranking')" :init_fontSize="20" :init_fontWeight="900")
            div.index-rank-table-wrapper
                index-rank-table(:init_userItems="userItems")
</template>

<script>
import axios from 'axios';

import rntxt from '../../components/rntxt.vue';
import IndexRankTable from './table/index-rank-table.vue';
import IndexWeeklyTable from './table/index-weekly-table.vue';

export default {
    name: 'index-section',
    components: {
        rntxt,
        IndexRankTable,
        IndexWeeklyTable,
    },
    data: function() {
        return {
            userInfo: [],
            userItems: [],
        };
    },
    methods: {
        onClickLevel: function() {
            window.location.href = 'level';
        },
        setData: function() {
            axios.get('/api/all')
            .then(res => {
                return res.data.result;
            })
            .then(list => {
                this.userInfo = [];
                this.userItems = [];
                list.sort((a, b) => {
                    return parseInt(b.rating) - parseInt(a.rating);
                });
                for (let i = 0; i < list.length; ++i) {
                    this.userItems.push([list[i].rank, list[i].handle, list[i].rating, list[i].solved_class, list[i].solve_count]);
                    this.userInfo.push({handle: list[i].handle, rating: list[i].rating});
                }
            })
            .catch(err => {
                console.log('err', err);
            });
        },
    },
    created: function() {
        this.setData();
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
    /* height: 350px; */
    padding: 40px 0px 0px 0px;
    text-align: center;
    box-sizing: border-box;
}
.row2 {
    width: 100%;
    /* height: 200px; */
    padding: 20px 0px;
    text-align: center;
    box-sizing: border-box;
}
.row3 {
    width: 100%;
    padding: 32px 0;
    box-sizing: border-box;
}
.row4 {
    width: 100%;
    padding: 32px 0px;
    box-sizing: border-box;
}
.rn-b {
    display: block;
}
.index-rank-label, .index-weekly-label {
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
    background-color: #35393b;
    box-shadow: 5px 2px 2px #232627;
}
.index-rank-table-wrapper {
    width: 100%;
    overflow-x: auto;
}
.index-weekly-table-wrapper {
    width: 100%;
    overflow-x: auto;
}
</style>