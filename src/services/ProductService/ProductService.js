import get from 'axios';

const productBaseUrl = 'https://api.predic8.de:443/shop/products/';

const getProductDetails = async ({ productId }) => {
  const url = `${productBaseUrl}${productId}`;
  const { data: productDetails } = await get(url).then((result) => result);
  return productDetails;
};

const getProductPhotoUrl = ({ photoId }) => {
  return `${productBaseUrl}${photoId}/photo`;
};

export {
  getProductDetails,
  getProductPhotoUrl
};
