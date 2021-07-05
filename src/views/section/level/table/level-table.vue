<template lang="pug">
table.level-table
    thead.level-table-head
        tr
            th(v-for="(item, key) in headItems" :key="key")
                rntxt(:init_message="item" :init_fontSize="16" :init_fontWeight="900")
    tbody.level-table-body
        tr(v-for="(row, rkey) in tableItems" :key="rkey")
            td
                a.level-table-link(:href="`/level/${row[0]}/0`")
                    img.tier-img(:src="`https://static.solved.ac/tier_small/${row[0]}.svg`")
                    |  
                    rntxt.tier-label(v-if="row[0] > 0" :init_message="$store.state.tier[Math.floor((row[0] - 1) / 5)] + ' ' + $store.state.tierNum[(row[0] - 1) % 5]" :init_fontSize="16" :init_color="$store.state.tierColor[Math.floor((row[0] - 1) / 5)]" :style="{textDecorationColor:$store.state.tierColor[Math.floor((row[0] - 1) / 5)]}")
                    rntxt.tier-label(v-else :init_message="$store.state.tierU" :init_fontSize="16" :init_color="$store.state.tierColorU" :style="{textDecorationColor:$store.state.tierColorU}")
            td(v-for="(item, key) in row.slice(1, 4)" :key="key")
                rntxt(:init_message="item", :init_fontSize="14")
            td
                progress-bar(:init_value="row[4]" :init_color="$store.state.tierBarColor[Math.floor((row[0] - 1) / 5)]" :init_back="$store.state.darkTierColor[Math.floor((row[0] - 1) / 5)]")
</template>

<script>
import axios from 'axios';

import ProgressBar from './progress-bar.vue';
import rntxt from '../../../components/rntxt.vue';

export default {
    name: 'level-table',
    components: {
        rntxt,
        ProgressBar,
    },
    computed: {
        headItems: function() {
            return [
                this.$t('level.level'),
                this.$t('level.unsolve'),
                this.$t('level.solve'),
                this.$t('level.count'),
                this.$t('level.progress')
            ];
        },
    },
    data: function() {
        return {
            tableItems: [],
        };
    },
    methods: {
        setData: function() {
            this.tableItems = [];
            axios.get('/api/teamstatistics', {
                params: {
                    team: 3,
                },
            })
            .then(res => {
                return res.data.result;
            })
            .then(list => {
                for (let i = 0; i <= 30; ++i) {
                    this.tableItems.push([i, list[i].todo, list[i].solved, list[i].all, list[i].progress]);
                }
            })
            .catch(err => {
                console.log('err', err);
                for (let i = 0; i <= 30; ++i) {
                    this.tableItems.push([i, 0, 0, 0, 0]);
                }
            });
        },
    },
    created: function() {
        this.setData();
    },
}
</script>

<style lang="scss" scoped>
.level-table {
    width: 100%;
    min-width: 480px;
    border-spacing: 0px;
}
.tier-img {
    width: 1.2em;
    height: 1.2em;
    vertical-align: middle;
}
.level-table-head {
    height: 41px;
    tr {
        th:nth-child(1) {
            left: 0;
            z-index: 2;
            position: sticky;
            background: linear-gradient(90deg, rgb(30, 33, 34) 75%, rgba(30, 33, 34, 0))
        }
    }
    th {
        padding: 8px 12px;
        box-sizing: border-box;
        // background-color: #ffffff;
    }
}
.level-table-body {
    tr {
        height: 44px;
    }
    td {
        padding: 8px 12px;
        box-sizing: border-box;
    }
    td:nth-child(1) {
        min-width: 145px;
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
.level-table-link {
    text-decoration: none;
    span {
        top: 3px;
        display: inline-block;
        vertical-align: middle;
    }
}
.tier-label {
    &:hover {
        text-decoration: underline;
    }
}
</style>