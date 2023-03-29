import React, {
  createContext, useCallback, useMemo, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import UseDispatch from '../hooks/usedispatch';
import { cartReducer, initialCartState } from '../Reducer/cartReducer';
import axiosInstance from '../util/axiosInstance';

export const cartContext = createContext();

function CartProvider({ children }) {

 const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const { loadDispatch, successDispatch, errDispatch } = UseDispatch(dispatch);

  const loadCart = useCallback(async () => {
    const type = 'LOAD_CART';
    try {
      loadDispatch({
        type,
        payload: { message: 'Carts are loading...' },
      });
      const res = await axiosInstance.get('cart');
      successDispatch({
        type,
        payload: res.data,
      });
    } catch (err) {
      errDispatch({
        type,
        payload: { message: err.message, title: 'Load Cart Failed' },
      });
    }
  }, []);

  const addToCart = useCallback(async (data) => {
    const type = 'ADD_CART';
    try {
      loadDispatch({
        type,
        payload: {
          message: 'Carts are adding...',
        },
        loadingId: data.productId,

      });
      const res = await axiosInstance.post('cart', data);
      successDispatch({
        type,
        payload: res.data,
        loadingId: data.productId,
      });
    } catch (err) {
      errDispatch({
        type,
        payload: {
          message: err.message,
          title: 'Add Cart Failed',
        },
        loadingId: data.productId,
      });
    }
  }, []);

  const updateCartItem = useCallback(async (data) => {
    const type = 'UPDATE_CART';
    try {
      loadDispatch({
        type,
        payload: { message: 'Carts are updating...' },
        loadingId: data.productId,
      });
      const res = await axiosInstance.put(`cart/${data.id}`, data);
      successDispatch({
        type,
        payload: res.data,
        loadingId: data.productId,
      });
    } catch (err) {
      errDispatch({
        type,
        payload: {
          message: err.message,
          title: 'Update Cart Failed',
        },
        loadingId: data.productId,
      });
    }
  }, []);

  const deleteCartItem = useCallback(async (data) => {
    const type = 'DELETE_CART';
    try {
      loadDispatch({
        type,
        payload: { message: 'Carts are deleting...' },
        loadingId: data.productId,
      });
      await axiosInstance.delete(`cart/${data.id}`);
      successDispatch({
        type,
        payload: data,
        loadingId: data.productId,
      });
    } catch (err) {
      errDispatch({
        type,
        payload: {
          message: err.message,
          title: 'Delete Cart Failed',
        },
        loadingId: data.productId,
      });
    }
  }, []);

  const value = useMemo(() => ({
    cart,
    loadCart,
    addToCart,
    updateCartItem,
    deleteCartItem,
  }), [cart, loadCart, addToCart, updateCartItem, deleteCartItem]);

  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;

CartProvider.protoTypes = {
  children: PropTypes.node.isRequired,
};
