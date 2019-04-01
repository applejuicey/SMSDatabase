import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import zhHans from 'vuetify/es5/locale/zh-Hans';
import en from 'vuetify/es5/locale/en';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  lang: {
    locales: { zhHans, en },
    current: 'zhHans'
  },
  theme: {
    primary: '#00BCD4',
    secondary: '#4DD0E1',
    accent: '#84FFFF',
    error: '#f44336',
    warning: '#ffc56d',
    info: '#0097A7',
    success: '#4caf50'
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
