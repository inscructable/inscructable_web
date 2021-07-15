import Vue from 'vue';
import App from './App.vue';
import i18n from '../../vi18n';
import store from '../../store';
import router from 'vue-router';
import VTooltip from 'v-tooltip';
import VueCookie from 'vue-cookie';
import VueSession from 'vue-session';

Vue.use(VTooltip);
Vue.use(VueCookie);
Vue.use(VueSession);

let vue = new Vue({
    i18n,
    store,
    router,
    render: function(h) {
        return h(App);
    },
}).$mount('#app');

export default vue;