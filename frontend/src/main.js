import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import zhHans from 'vuetify/es5/locale/zh-Hans';
import en from 'vuetify/es5/locale/en';
import VueApollo from 'vue-apollo';
import { apolloProvider } from './vue-apollo';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  lang: {
    locales: { zhHans, en },
    current: 'zhHans'
  },
  theme: {
    primary: '#00BCD4',
    secondary: '#a4c9e1',
    accent: '#84FFFF',
    error: '#f44336',
    warning: '#ff9135',
    info: '#2196F3',
    success: '#4caf50'
  },
});

Vue.use(VueApollo);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
