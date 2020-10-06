import { get } from 'axios';

const orderBaseUrl = 'https://api.predic8.de:443/shop/orders/';

const getOrder = async ({ orderId }) => {
  const url = `${orderBaseUrl}${orderId}`;
  const { data: orderHead } = await get(url).then((response) => response); // error handling?
  return orderHead;
};

const getOrderItems = async ({ orderId }) => {
  const url = `${orderBaseUrl}${orderId}/items/`;
  const { data: orderItems } = await get(url).then((response) => response);
  return orderItems;
};

export {
  getOrder,
  getOrderItems,
};
