import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
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
