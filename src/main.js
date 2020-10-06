import Vue from 'vue';
import VueLogger from 'vuejs-logger';

import App from './App.vue';
import { store } from './store';

const isProduction = process.env.NODE_ENV === 'production';

const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true,
};

Vue.use(VueLogger, options);

Vue.config.productionTip = false;

Vue.filter('asEuro', (value) => (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)));

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
