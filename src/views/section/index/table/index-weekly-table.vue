<template lang="pug">
table.index-weekly-table
    thead.index-weekly-table-head
        tr
            th(v-for="(item, key) in headItems" :key="key")
                rntxt(:init_message="item" :init_fontSize="16" :init_fontWeight="900")
    tbody.index-weekly-table-body
        tr(v-for="(row, rkey) in userItems" :key="rkey")
            td
                rntxt(:init_message="rkey + 1" :init_fontSize="16")
            td
                img.tier-img(:src="`https://static.solved.ac/tier_small/${Util.getTier(parseInt(row[1]))}.svg`")
                |&nbsp;
                a.index-table-link(:href="`https://www.acmicpc.net/user/${row[0]}`")
                    rntxt(:init_message="row[0]" :init_fontSize="16")
            td
                rntxt(:init_message="row[2]" :init_fontSize="16")
            td
                span(v-for="(problem, key) in row.slice(3)" v-tooltip.bottom="`${problem.title}[${problem.problem_id}] - ${(new Date(problem.solve_date)).toLocaleString()}`")
                    a.index-table-link(:href="`https://www.acmicpc.net/problem/${problem.problem_id}`")
                        img.problem-tier-img(:src="`https://static.solved.ac/tier_small/${problem.level}.svg`")
</template>

<script>
import axios from 'axios';

import Util from '../../../components/js/util.js';
import rntxt from '../../../components/rntxt.vue';

export default {
    name: 'index-weekly-table',
    components: {
        rntxt,
    },
    props: {
        init_userInfo: {
            default: [],
        },
    },
    watch: {
        init_userInfo: function() {
            this.userInfo = this.init_userInfo;
            this.setData();
        },
    },
    computed: {
        headItems: function() {
            return [
                this.$t('index.rank'),
                this.$t('index.handle'),
                this.$t('index.score'),
                this.$t('index.solved')
            ];
        },
    },
    data: function() {
        return {
            Util,
            isTooltip: {},
            userItems: [],
            userInfo: this.init_userInfo,
        };
    },
    methods: {
        setData: function() {
            this.userItems = [];
            for (let i = 0; i < this.userInfo.length; ++i) {
                (idx => {
                    axios.get('/api/problem/weekly', {
                        params: {
                            weekId: Math.floor((new Date() - 1624665600000) / 604800000) + 1,
                            handle: this.userInfo[idx].handle,
                        },
                    })
                    .then(res => {
                        return res.data.result;
                    })
                    .then(list => {
                        list.sort((a, b) => {
                            let ad = new Date(a.solve_date);
                            let bd = new Date(b.solve_date);
                            return ad - bd;
                        });
                        if (list.length > 0) {
                            this.userItems.push([this.userInfo[idx].handle, this.userInfo[idx].rating, list.reduce((acc, el) => acc + parseInt(el.level), 0)].concat(list));
                            this.userItems.sort((a, b) => {
                                return b[2] - a[2];
                            });
                        }
                    })
                    .catch(err => {
                        console.log('err', err);
                    });
                })(i);
            }
        },
        onMouseOver: function($event, rkey, key) {
            this.isTooltip[rkey * 65536 + key] = true;
            this.$forceUpdate();
        },
        onMouseLeave: function($event, rkey, key) {
            this.isTooltip[rkey * 65536 + key] = false;
            this.$forceUpdate();
        },
    },
    created: function() {
        this.setData();
    },
}
</script>

<style lang="scss" scoped>
.index-weekly-table {
    width: 100%;
    min-width: 480px;
    text-align: left;
    border-spacing: 0px;
}
.index-weekly-table-head {
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
.index-weekly-table-body {
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
.problem-tier-img {
    width: 2em;
    height: 2em;
    vertical-align: middle;
}
</style>


<style lang="scss">
.tooltip {
    display: block !important;
    z-index: 10000;

    .tooltip-inner {
        font-size: 14px;
        color: #e8e6e3;
        border-radius: 16px;
        padding: 5px 10px 4px;
        font-family: NotoSans;
        background: rgba(0, 0, 0, 0.8);
    }

    .tooltip-arrow {
        width: 0;
        height: 0;
        z-index: 1;
        margin: 5px;
        position: absolute;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.8);
    }

    &[x-placement^="top"] {
        margin-bottom: 5px;

        .tooltip-arrow {
            bottom: -5px;
            margin-top: 0;
            margin-bottom: 0;
            left: calc(50% - 5px);
            border-width: 5px 5px 0 5px;
            border-left-color: transparent !important;
            border-right-color: transparent !important;
            border-bottom-color: transparent !important;
        }
    }

    &[x-placement^="bottom"] {
        margin-top: 5px;

        .tooltip-arrow {
            top: -5px;
            margin-top: 0;
            margin-bottom: 0;
            left: calc(50% - 5px);
            border-width: 0 5px 5px 5px;
            border-left-color: transparent !important;
            border-right-color: transparent !important;
            border-top-color: transparent !important;
        }
    }

    &[x-placement^="right"] {
        margin-left: 5px;

        .tooltip-arrow {
            left: -5px;
            margin-left: 0;
            margin-right: 0;
            top: calc(50% - 5px);
            border-width: 5px 5px 5px 0;
            border-left-color: transparent !important;
            border-top-color: transparent !important;
            border-bottom-color: transparent !important;
        }
    }

    &[x-placement^="left"] {
        margin-right: 5px;

        .tooltip-arrow {
            right: -5px;
            margin-left: 0;
            margin-right: 0;
            top: calc(50% - 5px);
            border-width: 5px 0 5px 5px;
            border-top-color: transparent !important;
            border-right-color: transparent !important;
            border-bottom-color: transparent !important;
        }
    }

    &.popover {
        $color: #f9f9f9;

        .popover-inner {
            color: black;
            padding: 24px;
            background: $color;
            border-radius: 5px;
            box-shadow: 0 5px 30px rgba(black, .1);
        }

        .popover-arrow {
            border-color: $color;
        }
    }

    &[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity .15s, visibility .15s;
    }

    &[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity .15s;
    }
}
</style>