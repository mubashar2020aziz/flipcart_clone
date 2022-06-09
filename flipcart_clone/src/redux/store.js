import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import redux_thunk from 'redux-thunk';
import {
  getProductsReducer,
  getProductDetailsReducer,
} from './reducer/productReducer';
import { cartReducer } from './reducer/CartReducer';
const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

const middleware = [redux_thunk];
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
