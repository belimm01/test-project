<template>
  <div id="app">
    <Order />
  </div>
</template>

<script>
/* eslint-disable import/no-default-export */
import Order from './components/Order.vue';

export default {
  name: 'App',
  components: {
    Order,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ol li {
    list-style-type: none;
  }
  .order-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .item-name {
    grid-column: 1 / 4;
    font-weight: bold;
  }
}
</style>
