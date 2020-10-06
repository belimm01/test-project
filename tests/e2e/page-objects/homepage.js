module.exports = {
  url: '/',
  commands: [],

  elements: {
    appContainer: '#app',
  },

  sections: {
    app: {
      selector: '#app',
      elements: {
        orderView: '.order-view',
        headline: 'h1',
        itemList: '.order-item-list',
        item: '.order-item',
        quantity: '.item-quantity',
        itemPrice: '.item-price',
        itemTitle: '.item-name',
      },
    },
  },
};
