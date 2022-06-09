import axios from 'axios';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART_ERROR,
} from '../constant/CartConstant';
const URL = 'http://localhost:8000';

// dispatch take from thunk middleware
export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/api/user/product/${id}`);
    dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } });
  } catch (err) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: err.message });
  }
};

export const removeToCart = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};
