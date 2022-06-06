import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from '../constant/productContant';

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      //this products keyword use backend variable name
      //who store in productAction {payload }
      return { products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { err: action.payload };

    default:
      return state;
  }
};
