import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tierU: 'Unrated',
        tier: [
            'Bronze',
            'Silver',
            'Gold',
            'Platinum',
            'Diamond',
            'Ruby'
        ],
        tierNumU: '',
        tierNum: [
            'V',
            'IV',
            'III',
            'II',
            'I',
        ],
        tierColorU: '#d3cbbd',
        tierColor: [
            '#ffd268',
            '#badbf6',
            '#ffe131',
            '#4affd7',
            '#23eeff',
            '#ff218f',
        ],
        tierBarColorU: '#535a5e',
        tierBarColor: [
            '#ad5600',
            '#435f7a',
            '#ec9a00',
            '#27e2a4',
            '#00b4fc',
            '#ff0062',
        ],
        darkTierColorU: '#000000',
        darkTierColor: [
            '#331900',
            '#141c21',
            '#462e00',
            '#094631',
            '#00364b',
            '#4c001d'
        ],
    },
    mutations: {
        
    },
    actions: {

    },
    modules: {

    },
});
