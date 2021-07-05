<template lang="pug">
section.level-detail-section
    div.level-detail-title
        img.tier-img(:src="`https://static.solved.ac/tier_small/${level}.svg`")
        |  
        rntxt.tier-label(v-if="level > 0" :init_message="tier[Math.floor((level - 1) / 5)] + ' ' + tierNum[(level - 1) % 5]" :init_fontSize="32" :init_color="tierColor[Math.floor((level - 1) / 5)]")
        rntxt.tier-label(v-else :init_message="unrated" :init_fontSize="32" :init_color="'#9c9c9c'")
    div.level-detail-table-wrapper
        level-detail-table(:init_level="level" :init_page="page" :init_items="items")
    div.level-detail-pagination
        |pagination
</template>

<script>
import axios from 'axios';

import rntxt from '../../components/rntxt.vue';
import LevelDetailTable from './table/level-detail-table.vue';

export default {
    name: 'level-detail-section',
    components: {
        rntxt,
        LevelDetailTable,
    },
    data: function() {
        return {
            unrated: 'Unrated',
            tier: [
                'Bronze',
                'Silver',
                'Gold',
                'Platinum',
                'Diamond',
                'Ruby'
            ],
            tierNum: [
                'V',
                'IV',
                'III',
                'II',
                'I',
            ],
            tierColor: [
                '#ad5600',
                '#435f7a',
                '#ec9a00',
                '#27e2a4',
                '#00b4fc',
                '#ff0062',
            ],
            page: 0,
            level: 0,
            items: [],
        };
    },
    methods: {
        setData: function() {
            let pathname = window.location.pathname.split('/');
            this.level = parseInt(pathname[pathname.length - 2]);
            this.page = parseInt(pathname[pathname.length - 1]);
            axios.get('/api/problem/unsolved', {
                params: {
                    team: 3,
                    tier: this.level,
                },
            })
            .then(res => {
                return res.data.result
            })
            .then(list => {
                this.items = [];
                for (let i = 0; i < list.length; ++i) {
                    this.items.push([list[i].problem_id, list[i].title, '?', '?']);
                }
                this.items.sort((a, b) => {
                    return a[0] - b[0];
                });
                if (list.length == 0) {
                    this.items.push(['0000', 'All Clear!', '1', '1'])
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

<style lang="scss" scoped>
.level-detail-section {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
}
.level-detail-table-wrapper {
    width: 100%;
    overflow-x: auto;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.level-detail-title {
    height: 30px;
    margin: 22px 0;
}
.tier-img {
    width: 30px;
    height: 30px;
}
.level-detail-pagination {
    width: 100%;
    padding: 16px;
    text-align: right;
    box-sizing: border-box;
}
</style>