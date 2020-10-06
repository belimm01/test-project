import Vue from 'vue';
import Vuex from 'vuex';

import { OrderModule, ProductModule } from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    OrderModule,
    ProductModule,
  },
});

export {
  store
};
