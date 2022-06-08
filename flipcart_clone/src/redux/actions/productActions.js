import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  // GET_PRODUCT_DETAILS_RESET
} from '../constant/productContant';
import axios from 'axios';

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/api/user/products`);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
  }
};

// when use dispatch call the reducer automatically
// this id take from detail view folder
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    let { data } = await axios.get(`${URL}/api/user/product/${id}`);
    dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCT_DETAILS_FAIL, payload: err.message });
  }
};
