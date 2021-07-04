<template lang="pug">
table.level-detail-table
    thead.level-detail-table-head
        tr
            th(v-for="(item, key) in headItems" :key="key")
                rntxt(:init_message="item" :init_fontSize="16" :init_fontWeight="900")
    tbody.level-detail-table-body
        tr(v-for="(row, rkey) in tableItems" :key="rkey")
            td
                a.level-detail-table-link(:href="`https://www.acmicpc.net/problem/${row[0]}`")
                    img.tier-img(:src="`https://static.solved.ac/tier_small/${level}.svg`")
                    |  
                    rntxt(:init_message="row[0]" :init_fontSize="14")
            td(v-for="(item, key) in row.slice(1)" :key="key")
                rntxt(:init_message="item", :init_fontSize="14")
</template>

<script>
import axios from 'axios';

import rntxt from '../../../components/rntxt.vue';

export default {
    name: 'level-table',
    props: {
        init_level: {
            default: 0,
        },
    },
    watch: {
        init_level: function() {
            this.level = this.init_level;
        },
    },
    components: {
        rntxt,
    },
    computed: {
        headItems: function() {
            return [
                this.$t('level-detail.id'),
                this.$t('level-detail.title'),
                this.$t('level-detail.solve'),
                this.$t('level-detail.avg'),
            ];
        },
    },
    data: function() {
        return {
            tableItems: [],
            level: this.init_level,
        };
    },
    methods: {
        setData: function() {
            this.tableItems = [
                [1000, 'A+B', 129898, 2.30],
                [1001, 'A-B', 107062, 1.39],
                [1271, '엄청난 무자2', 3361, 3.05],
            ];
        },
    },
    created: function() {
        this.setData();
    },
}
</script>

<style lang="scss" scoped>
.level-detail-table {
    width: 100%;
    min-width: 480px;
    text-align: left;
    border-spacing: 0px;
}
.tier-img {
    width: 1.2em;
    height: 1.2em;
    vertical-align: middle;
}
.level-detail-table-head {
    height: 41px;
    th {
        padding: 8px 12px;
        box-sizing: border-box;
    }
    th:nth-child(1) {
        left: 0;
        position: sticky;
        background: linear-gradient(to right, rgb(255, 255, 255) 75%, rgba(255, 255, 255, 0));
    }
}
.level-detail-table-body {
    tr {
        height: 44px;
    }
    td {
        padding: 8px 12px;
        box-sizing: border-box;
    }
    tr:nth-child(odd) {
        background-color: #ececec;
        td:nth-child(1) {
            left: 0;
            position: sticky;
            background: linear-gradient(to right, rgb(236, 236, 236) 75%, rgba(236, 236, 236, 0));
        }
    }
    tr:nth-child(even) {
        background-color: #ffffff;
        td:nth-child(1) {
            left: 0;
            position: sticky;
            background: linear-gradient(to right, rgb(255, 255, 255) 75%, rgba(255, 255, 255, 0));
        }
    }
}
.level-detail-table-link {
    text-decoration: none;
    span {
        top: 3px;
        display: inline-block;
        vertical-align: middle;
    }
}
</style>