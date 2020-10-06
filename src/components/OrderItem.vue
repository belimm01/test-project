<template>
  <div
      v-if="productData && productData.productId"
      class="order-item">
    <img
        class="item-photo"
        :src="`${productData.photo_url}`"
        :alt="`${productData.name}`">
    <div class="item-name">{{ productData.name }}</div>
    <div class="item-id">product ID: {{ productData.productId }}</div>
    <label
        class="item-quantity">
      Quantity: {{ item.quantity }}
      <input
          v-model="item.quantity"
          type="number">
    </label>
    <div class="item-price">{{ item.price | asEuro }}</div>
  </div>
</template>

<script>
/* eslint-disable import/no-default-export */
import { mapGetters } from 'vuex';

const computed = {
  ...mapGetters('ProductModule', ['products']),
  productData() {
    return this.products[this.item.productId] || '';
  },
};

const props = {
  item: {
    type: Object,
    required: true,
  },
};

const OrderItem = {
  props,
  computed,
};
export default OrderItem;
</script>

<style scoped>
</style>
