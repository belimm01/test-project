import Vue from 'vue';

import { getProductDetails, getProductPhotoUrl } from '@/services/ProductService/ProductService';

const initialState = {
  products: [],
};

const getters = {
  products: ({ products }) => products,
};

const actions = {
  async updateProductDetails({ commit }, { productId }) {
    let productDetails = await getProductDetails({ productId });
    productDetails.photo_url = getProductPhotoUrl({ photoId: productDetails.photo_url.split('/')[3] });
    commit('setProductData', { ...productDetails, productId });
  },
};

const mutations = {
  setProductData(state, productData) {
    Vue.set(state.products, productData.productId, productData);
  },
};

const ProductModule = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
};
export { ProductModule };
