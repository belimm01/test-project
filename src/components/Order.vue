
<template>
  <div class="order-view">
    <h1>Your Order</h1>
    <div v-if="order.orderItems.items.length">
      <OrderItemList :items="order.orderItems.items" />
      <div class="order-total">Total: {{ order.total | asEuro }}</div>
    </div>
    <div v-else>Loading your order …</div>
  </div>
</template>

<script>
/* eslint-disable import/no-default-export */
import { mapActions, mapGetters } from 'vuex';

import OrderItemList from './OrderItemList';

const methods = {
  ...mapActions('OrderModule', ['updateOrder']),
};

const computed = {
  ...mapGetters('OrderModule', ['order']),
};

const created = function () {
  this.updateOrder();
};

const Order = {
  components: { OrderItemList },
  created,
  methods,
  computed,
};

export default Order;
</script>

<style scoped></style>
