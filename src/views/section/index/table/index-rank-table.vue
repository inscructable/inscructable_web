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
            td(v-for="(item, key) in row.slice(1)" :key="key")
                rntxt(:init_message="item" :init_fontSize="16")
</template>

<script>
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
            userItems: [],
        };
    },
    methods: {
        setData: function() {
            this.userItems = [
                ['7', 'ingyu1008', '3801', '10++', '5882'],
                ['128825', 'thak00', '210', '-', '15']
            ];
            this.userItems.sort((a, b) => {
                return parseInt(a[0]) - parseInt(b[0]);
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
        background: linear-gradient(to right, rgb(255, 255, 255) 75%, rgba(255, 255, 255, 0));
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
        background-color: #ececec;
        td:nth-child(1) {
            left: 0;
            z-index: 2;
            position: sticky;
            background: linear-gradient(to right, rgb(236, 236, 236) 75%, rgba(236, 236, 236, 0));
        }
    }
    tr:nth-child(even) {
        background-color: #ffffff;
        td:nth-child(1) {
            left: 0;
            z-index: 2;
            position: sticky;
            background: linear-gradient(to right, rgb(255, 255, 255) 75%, rgba(255, 255, 255, 0));
        }
    }
}
</style>