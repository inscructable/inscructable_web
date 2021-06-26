<template lang="pug">
footer.rn-footer
    div.content
        div.row
            div.col.left
                div.cell
                    rntxt(init_message="powered by" :init_color="'#b3b3b3'" :init_fontSize="13")
                    |&nbsp;
                    a.rn-no-deco(href="https://github.com/ingyu1008" target="_blank")
                        rntxt(init_message="방인규," :init_color="'#b3b3b3'" :init_fontSize="12")
                    |&nbsp;
                    a.rn-no-deco(href="https://github.com/thak1411" target="_blank")
                        rntxt(init_message="구건모" :init_color="'#b3b3b3'" :init_fontSize="12")
                |&nbsp;
                div.cell
                    a.rn-no-deco(href="https://github.com/inscrutable-plus" target="_blank")
                        rntxt(init_message="project github" :init_color="'#b3b3b3'" :init_fontSize="13")
                div.cell.rn-mt5
                    rntxt(init_message="inscrutable의 운영은 solved.ac, acmicpc.net와 관련이 없으며, " :init_color="'#b3b3b3'" :init_fontSize="13")
                    |&nbsp;
                    a.rn-no-deco(href="https://github.com/ingyu1008" target="_blank")
                        rntxt(init_message="방인규," :init_color="'#b3b3b3'" :init_fontSize="12")
                    |&nbsp;
                    a.rn-no-deco(href="https://github.com/thak1411" target="_blank")
                        rntxt(init_message="구건모" :init_color="'#b3b3b3'" :init_fontSize="12")
                    rntxt(init_message="가 독립적으로 운영하고있습니다." :init_color="'#b3b3b3'" :init_fontSize="13")
            div.col.right
                div.cell.rn-mla
                    a.rn-no-deco(href="https://www.acmicpc.net/school/ranklist/425")
                        rntxt(init_message="백준 한양대학교" :init_color="'#b3b3b3'" :init_fontSize="13")
                div.cell.rn-mla.rn-mt5
                    a.rn-no-deco(href="https://solved.ac/ranking/o/425")
                        rntxt(init_message="solved.ac 한양대학교" :init_color="'#b3b3b3'" :init_fontSize="13")
                div.cell.rn-mla.rn-mt5
                    a.rn-no-deco(href="http://codeforces.com/ratings/organization/2843")
                        rntxt(init_message="codeforces 한양대학교" :init_color="'#b3b3b3'" :init_fontSize="13")
</template>

<script>
import rntxt from '../components/rntxt.vue';

export default {
    name: 'rn-footer',
    components: {
        rntxt,
    },
}
</script>

<style lang="scss" scoped>
.rn-footer {
    width: 100%;
    height: 250px;
    padding: 32px;
    box-sizing: border-box;
    background-color: #4f4f4f;
}
.vertical-frame {
    width: 100%;
    height: 100%;
    display: table;
    color: #ececec;
    text-align: center;
    span {
        display: table-cell;
        vertical-align: middle;
    }
}
.content {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
.col {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.left {
    text-align: left;
}
.right {
    text-align: right;
}
.rn-b {
    display: block;
}
.cell {
    display: flex;
    flex-direction: row;
}
.rn-no-deco {
    color: #b3b3b3;
    text-decoration: underline;
}
.rn-mt5 {
    margin-top: 5px;
}
.rn-mla {
    margin-left: auto;
}
</style>