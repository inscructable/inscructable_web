<template lang="pug">
table.index-table
    thead.index-table-head
        tr
            th 순위
            th 핸들
            th 푼 문제 수
            th 푼 문제
    tbody.index-table-body
        tr
            td 1
            td ingyu1008
            td 1870
            td 1000, 1001, 1002
        tr
            td 2
            td thak00
            td 1
            td 1000
</template>

<script>
export default {
    name: 'index-table',
}
</script>

<style lang="scss" scoped>
.index-table {
    width: 100%;
    text-align: left;
    border-spacing: 0px;
}
.index-table-head {
    height: 41px;
    th {
        padding: 8px 12px;
        box-sizing: border-box;
    }
}
.index-table-body {
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
</style>