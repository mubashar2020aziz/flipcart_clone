import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import redux_thunk from 'redux-thunk';
import {
  getProductsReducer,
  getProductDetailsReducer,
} from './reducer/productReducer';

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
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
