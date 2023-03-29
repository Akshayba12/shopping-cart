import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Review from '../components/Review';
import axiosInstance from '../util/axiosInstance';

function Product({ product }) {
  const { cart: cartItem, loading } = useSelector((state) => ({
    cart: state.cart.find((item) => item.productId === product.id),
    loading: state.loading,
  }));

  const dispatch = useDispatch();

  const addToCart = useCallback(async (data) => {
    const type = 'ADD_CART';
    try {
      dispatch({
        type: `${type}_${product.id}_REQUEST`,
        payload: {
          message: 'Carts are adding...',
        },
      });
      const res = await axiosInstance.post('cart', data);
      dispatch({
        type: `${type}_${product.id}_SUCCESS`,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: `${type}_${product.id}_FAIL`,
        payload: {
          message: err.message,
          title: 'Add Cart Failed',
        },
      });
    }
  }, []);

  const updateCartItem = useCallback(async () => {
    try {

    } catch (error) {

    }
  }, []);

  const deleteCartItem = useCallback(async () => {
    try {

    } catch (error) {

    }
  }, []);

  return (
    <div
      key={product.id}
      className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8 my-8"
    >
      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-3">
        <img src={product.image} alt={product.title} className="object-cover object-center" />
      </div>
      <div className="sm:col-span-8 lg:col-span-9">
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>

        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading">
            {product.description}
          </h3>

          <p className="text-2xl text-gray-900">{product.price}</p>

          {/* Reviews */}
          <Review {...product.rating} />
        </section>

        <section aria-labelledby="options-heading" className="mt-10">
          <h3 id="options-heading" className="sr-only">
            Product options
          </h3>
          {cartItem ? (
            <div className="flex items-center">
              <button
                type="button"
                disabled={cartItem.quantity > 1 ?
                  loading[`UPDATE_CART_${product.id}`] : loading[`DELETE_CART_${product.id}`]}
                onClick={() => {
                  if (cartItem.quantity > 1) {
                    updateCartItem({
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                    });
                  } else {
                    deleteCartItem(cartItem);
                  }
                }}
                className="flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
              >
                -
              </button>
              <p className="flex-1 text-center text-2xl font-bold">{ cartItem.quantity }</p>
              <button
                type="button"
                disabled={loading[`UPDATE_CART_${product.id}`]}
                onClick={() => updateCartItem({
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                })}
                className="flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={loading[`ADD_CART_${product.id}`]}
              onClick={() => addToCart({
                productId: product.id,
                quantity: 1,
              })}
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
            >
              Add to bag
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

export default Product;
