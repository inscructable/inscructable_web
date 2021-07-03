<template lang="pug">
table.level-table
    thead.level-table-head
        tr
            th(v-for="(item, key) in headItems" :key="key")
                rntxt(:init_message="item" :init_fontSize="16" :init_fontWeight="700")
    tbody.level-table-body
        tr(v-for="(row, rkey) in tableItems" :key="rkey")
            td
                a.level-table-link(:href="`/level/${row[0]}`")
                    img.tier-img(:src="`https://static.solved.ac/tier_small/${row[0]}.svg`")
                    |  
                    rntxt.tier-label(v-if="row[0] > 0" :init_message="tier[Math.floor((row[0] - 1) / 5)] + ' ' + tierNum[(row[0] - 1) % 5]" :init_fontSize="16" :init_color="tierColor[Math.floor((row[0] - 1) / 5)]")
                    rntxt.tier-label(v-else :init_message="unrated" :init_fontSize="16" :init_color="'#9c9c9c'")
            td(v-for="(item, key) in row.slice(1)" :key="key")
                rntxt(:init_message="item", :init_fontSize="14")
</template>

<script>
import axios from 'axios';

import rntxt from '../../../components/rntxt.vue';

export default {
    name: 'level-table',
    components: {
        rntxt,
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
            ]
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
    border-spacing: 0px;
}
.tier-img {
    width: 1.2em;
    height: 1.2em;
    vertical-align: middle;
}
.level-table-head {
    height: 41px;
}
.level-table-body {
    tr {
        height: 44px;
    }
    td {
        padding: 8px 12px;
        box-sizing: border-box;
    }
    tr:nth-child(odd) {
        background-color: #ececec;
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
</style>