<template lang="pug">
table.index-rank-table
    thead.index-rank-table-head
        tr
            th(v-for="(item, key) in headItems" :key="key")
                rntxt(:init_message="item" :init_fontSize="16" :init_fontWeight="900")
    tbody.index-rank-table-body
        tr(v-for="(row, rkey) in userItems" :key="rkey")
            td
                rntxt(:init_message="rkey + 1 + ` (${row[0]})`" :init_fontSize="16")
            td
                img.tier-img(:src="`https://static.solved.ac/tier_small/${Util.getTier(parseInt(row[2]))}.svg`")
                |&nbsp;
                a.index-table-link(:href="`https://www.acmicpc.net/user/${row[1]}`")
                    rntxt(:init_message="row[1]" :init_fontSize="16")
            td
                rntxt(:init_message="row[2]" :init_fontSize="16" :init_color="$store.state.tierColor[Math.floor((Util.getTier(parseInt(row[2])) - 1) / 5)]")
            td(v-for="(item, key) in row.slice(3)" :key="key")
                rntxt(:init_message="item" :init_fontSize="16")
</template>

<script>
import axios from 'axios';

import Util from '../../../components/js/util.js';
import rntxt from '../../../components/rntxt.vue';

export default {
    name: 'index-table',
    components: {
        rntxt,
    },
    computed: {
        headItems: function() {
            return [
                this.$t('index.rank'),
                this.$t('index.handle'),
                this.$t('index.rating'),
                this.$t('index.class'),
                this.$t('index.solved')
            ];
        },
    },
    data: function() {
        return {
            Util,
            userItems: [],
        };
    },
    methods: {
        setData: function() {
            axios.get('/api/all')
            .then(res => {
                return res.data.result;
            })
            .then(list => {
                this.userItems = [];
                list.sort((a, b) => {
                    return parseInt(b.rating) - parseInt(a.rating);
                });
                for (let i = 0; i < list.length; ++i) {
                    this.userItems.push([list[i].rank, list[i].handle, list[i].rating, list[i].solved_class, list[i].solve_count]);
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
.index-rank-table {
    width: 100%;
    min-width: 480px;
    text-align: left;
    border-spacing: 0px;
}
.index-rank-table-head {
    height: 41px;
    th {
        padding: 8px 12px;
        box-sizing: border-box;
    }
    th:nth-child(1) {
        left: 0;
        z-index: 2;
        position: sticky;
        background: linear-gradient(90deg, rgb(30, 33, 34) 75%, rgba(30, 33, 34, 0))
    }
}
.index-rank-table-body {
    tr {
        height: 44px;
    }
    td {
        padding: 8px 12px;
        box-sizing: border-box;
    }
    tr:nth-child(odd) {
        background-color: rgb(44, 48, 49);
        td:nth-child(1) {
            left: 0;
            z-index: 2;
            position: sticky;
            background: linear-gradient(90deg, rgb(44, 48, 49) 75%, rgba(44, 48, 49, 0))
        }
    }
    tr:nth-child(even) {
        background-color: rgb(30, 33, 34);
        td:nth-child(1) {
            left: 0;
            z-index: 2;
            position: sticky;
            background: linear-gradient(90deg, rgb(30, 33, 34) 75%, rgba(30, 33, 34, 0))
        }
    }
}
.index-table-link {
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        text-decoration-color: #fdf3f3;
    }
}
.tier-img {
    width: 1.2em;
    height: 1.2em;
    vertical-align: middle;
}
</style>