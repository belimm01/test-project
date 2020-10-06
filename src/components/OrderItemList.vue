<template>
  <ol class="order-item-list">
    <li
        v-for="(item, index) in items"
        :key="index">
      <OrderItem :item="item" />
      <hr>
    </li>
  </ol>
</template>

<script>
/* eslint-disable import/no-default-export */
import OrderItem from './OrderItem';

const props = {
  items: {
    type: Array,
    required: true,
  },
};

const OrderItemsList = {
  components: { OrderItem },
  props,
};

export default OrderItemsList;
</script>

<style scoped>

</style>
