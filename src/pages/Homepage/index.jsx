import React, {
  useCallback,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../util/axiosInstance';
import Product from '../../product';

function Home() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state);

  const LoadProducts = useCallback(
    async () => {
      const type = 'LOAD_PRODUCTS';
      try {
        dispatch({
          type: `${type}_REQUEST`,
          payload: { message: 'Products are loading...' },
        });
        const res = await axiosInstance.get('products');
        dispatch({
          type: `${type}_SUCCESS`,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: `${type}_FAIL`,
          payload: {
            message: err.message,
            title: 'Load Products Failed',
          },
        });
      }
    },
    [],
  );

  const loadCart = useCallback(
    async () => {
      const type = 'LOAD_CART';
      try {
        dispatch({
          type: `${type}_REQUEST`,
          payload: { message: 'Carts are loading...' },
        });
        const res = await axiosInstance.get('cart');
        dispatch({
          type: `${type}_SUCCESS`,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: `${type}_FAIL`,
          payload: { message: err.message, title: 'Load Cart Failed' },
        });
      }
    },
    [],
  );

  useEffect(() => {
    LoadProducts();
    loadCart();
  }, [loadCart, LoadProducts]);

  console.log(loading);

  if (loading.LOAD_PRODUCTS || loading.LOAD_CART) {
    return (
      <div>
        <p>{ loading.LOAD_PRODUCTS?.message }</p>
        <p>{ loading.LOAD_CART?.message }</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
