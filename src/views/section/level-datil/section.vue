<template lang="pug">
section.level-detail-section
    div.level-detail-title
        img.tier-img(:src="`https://static.solved.ac/tier_small/${level}.svg`")
        |  
        rntxt.tier-label(v-if="level > 0" :init_message="$store.state.tier[Math.floor((level - 1) / 5)] + ' ' + $store.state.tierNum[(level - 1) % 5]" :init_fontSize="32" :init_color="$store.state.tierColor[Math.floor((level - 1) / 5)]")
        rntxt.tier-label(v-else :init_message="$store.state.tierU" :init_fontSize="32" :init_color="$store.state.tierColorU")
    div.level-detail-table-wrapper
        level-detail-table(:init_level="level" :init_page="page" :init_items="items")
    div.level-detail-pagination
        button.level-detail-pagination-btn(v-for="(item, key) in otherPage" :key="key" @click="onClick(item)" :class="item == page ? 'disable' : ''")
            rntxt(:init_message="item" :init_fontSize="22")
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
            page: 0,
            level: 0,
            items: [],
        };
    },
    computed: {
        otherPage: function() {
            let fibo = [1, 2, 4, 7];
            let res = [];
            if (this.page != 0) res.push(0);
            for (let i = 4; i--; ) {
                if (this.page - fibo[i] > 0) res.push(this.page - fibo[i]);
            }
            res.push(this.page);
            for (let i = 0; i < 4; ++i) {
                if (this.page + fibo[i] < parseInt((this.items.length - 1) / 50)) res.push(this.page + fibo[i]);
            }
            if (this.items.length > 50 && this.page != parseInt((this.items.length - 1) / 50)) res.push(parseInt((this.items.length - 1) / 50));
            return res;
        }
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
                    this.items.push([list[i].problem_id, list[i].title, list[i].solve_count, list[i].average_try.toString().slice(0, 4)]);
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
        onClick: function(newPage) {
            if (this.page == newPage) return;
            let pathname = window.location.pathname.split('/');
            pathname[pathname.length - 1] = newPage;
            window.location.href = pathname.join('/')
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
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
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
.level-detail-pagination-btn {
    padding: 0;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    background: none;
    &:hover:not(.disable) {
        background: rgba(0, 0, 0, 0.3);
    }
}
.disable {
    cursor: unset;
    background-color: #35393b;
}
</style>