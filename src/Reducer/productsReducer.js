export const initialProducts = [];

export const productsReducer = (state = initialProducts, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return payload;
    default:
      return state;
  }
};
