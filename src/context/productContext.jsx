import React, {
  createContext, useCallback, useMemo, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { initialProducts, productsReducer } from '../Reducer/productsReducer';
import axiosInstance from '../util/axiosInstance';
import UseDispatch from '../hooks/usedispatch';

export const productContext = createContext();

export function ProductsProvider({ children }) {
  const [products, dispatch] = useReducer(productsReducer, initialProducts);

  const { loadDispatch, successDispatch, errDispatch } = UseDispatch(dispatch);

  const LoadProducts = useCallback(async () => {
    const type = 'LOAD_PRODUCTS';
    try {
      loadDispatch({
        type,
        payload: { message: 'Products are loading...' },
      });
      const res = await axiosInstance.get('products');
      successDispatch({
        type,
        payload: res.data,
      });
    } catch (err) {
      errDispatch({
        type,
        payload: {
          message: err.message,
          title: 'Load Products Failed',
        },
      });
    }
  }, []);

  const value = useMemo(() => ({
    products,
    LoadProducts,
  }), [products]);

  return (
    <productContext.Provider value={value}>
      {children}
    </productContext.Provider>
  );
}

ProductsProvider.protoTypes = {
  children: PropTypes.node.isRequired,
};

// export const useproduct = useContext(productContext);
