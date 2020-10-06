import Vue from 'vue';

import { getOrder, getOrderItems } from '@/services/OrderService/OrderService';

const orderId = '4520';

const initialState = {
  order: {
    orderItems: {
      items: [],
    },
  },
};

const mutations = {
  setOrder(state, order) {
    Vue.set(state, 'order', order);
  },
};

const getters = {
  order: ({ order }) => order,
};

const actions = {
  async updateOrder({ commit, dispatch }) {
    const orderHead = await getOrder({ orderId });
    const orderItems = await getOrderItems({ orderId });
    const mappedOrderItems = Object.assign(orderItems,
      { items: orderItems.items.map((item) => ({ ...item, productId: `${item.product_url.match(/\d+$/)}` })) });
    const fullOrder = { ...orderHead, orderItems: mappedOrderItems };
    await commit('setOrder', fullOrder);
    Vue.$log.debug('fullOrder: ', fullOrder);
    fullOrder.orderItems.items.forEach((item) => dispatch('ProductModule/updateProductDetails', { productId: `${item.product_url.match(/\d+$/)}` }, { root: true }));
  },
};

const OrderModule = {
  namespaced: true,
  state: initialState,
  mutations,
  getters,
  actions,
};
export { OrderModule };
