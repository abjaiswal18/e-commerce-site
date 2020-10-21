import  {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import thunk from "redux-thunk";
import { CartReducer } from "./reducers/CartReducers";
import Cookie from "js-cookie";
import { userSigninReducer } from "./reducers/userReducers";


const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart : {cartItems}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: CartReducer,
    userSignin: userSigninReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;