import { combineReducers } from 'redux';
import { cartReducer as cart } from './cartReducer';
import { productsReducer as products } from './productsReducer';
import { errorReducer as error } from './errorreducer';
import { loadingReducer as loading } from './loadingreducer';

export default combineReducers({
  cart,
  products,
  error,
  loading,
});
