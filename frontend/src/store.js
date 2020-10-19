import  {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import thunk from "redux-thunk";
import { CartReducer } from "./reducers/CartReducers";

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: CartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;