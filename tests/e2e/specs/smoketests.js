module.exports = {
  beforeEach: (browser) => browser.init(),

  'check app availability': (browser) => {
    const homepage = browser.page.homepage();
    homepage.waitForElementVisible('@appContainer');
    const headlineMatcher = /^Your Order$/;
    const { app } = homepage.section;
    const priceMatcher = /^[0-9.,]+ €$/;
    const titleMatcher = /^\w+$/;
    const quantityMatcher = /^Quantity: \d+$/;
    const currentItemCount = 4;

    app.expect.element('@orderView').to.be.visible;
    app.waitForElementVisible('@itemList');
    app.waitForElementVisible('@item');

    app.assert.elementCount('@item', currentItemCount);
    app.expect
      .element('@headline')
      .text.to.match(headlineMatcher);

    app.expect.element('@itemPrice').text.to.match(priceMatcher);
    app.expect.element('@itemTitle').text.to.match(titleMatcher);
    app.expect.element('@quantity').text.to.match(quantityMatcher);

    browser.end();
  },
};
