<template lang="pug">
table.level-detail-table
    thead.level-detail-table-head
        tr
            th(v-for="(item, key) in headItems" :key="key")
                rntxt(:init_message="item" :init_fontSize="16" :init_fontWeight="900")
    tbody.level-detail-table-body
        tr(v-for="(row, rkey) in tableItems.slice(50 * page, 50 * (page + 1))" :key="rkey")
            td
                a.level-detail-table-link(:href="row[0] == '0000' ? '#' : `https://www.acmicpc.net/problem/${row[0]}`")
                    img.tier-img(:src="`https://static.solved.ac/tier_small/${level}.svg`")
                    |  
                    rntxt.tier-label(:init_message="row[0]" :init_fontSize="14")
            td
                a.level-detail-table-link(:href="row[0] == '0000' ? '#' : `https://www.acmicpc.net/problem/${row[0]}`")
                    rntxt.tier-label(:init_message="row[1]", :init_fontSize="14")
            td(v-for="(item, key) in row.slice(2)" :key="key")
                rntxt(:init_message="item", :init_fontSize="14")
</template>

<script>
import rntxt from '../../../components/rntxt.vue';

export default {
    name: 'level-table',
    props: {
        init_level: {
            default: 0,
        },
        init_page: {
            default: 0,
        },
        init_items: {
            default: [],
        },
    },
    watch: {
        init_page: function() {
            this.page = this.init_page;
        },
        init_level: function() {
            this.level = this.init_level;
        },
        init_items: function() {
            this.tableItems = this.init_items
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
            page: this.init_page,
            level: this.init_level,
            tableItems: this.init_items
        };
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
        z-index: 2;
        position: sticky;
        background: linear-gradient(90deg, rgb(30, 33, 34) 75%, rgba(30, 33, 34, 0))
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
.level-detail-table-link {
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
        text-decoration-color: #fdf3f3;
    }
}
</style>