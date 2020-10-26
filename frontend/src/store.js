import  {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer} from "./reducers/productReducers";
import thunk from "redux-thunk";
import { CartReducer } from "./reducers/CartReducers";
import Cookie from "js-cookie";
import { userRegisterReducer, userSigninReducer, userUpdateReducer } from "./reducers/userReducers";
import { myOrderListReducer, orderCreateReducer, orderDeleteReducer, orderDetailsReducer, orderListReducer, orderPayReducer } from "./reducers/orderReducers";


const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart : {cartItems, shipping:{}, payment:{}}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: CartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
