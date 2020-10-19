import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const { default: Axios } = require("axios")

const addToCart = (productId, qty) => async (dispatch) =>{
    try{
        const {data} = await Axios.get("/api/products/" + productId);
        
        dispatch({type: CART_ADD_ITEM, payload:{
            product: data._id,
            name: data.name,
            image: data.images,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    });
    }catch(error){
    

    }
}

const removeFromCart = (productId) => (dispatch) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
}

export {addToCart, removeFromCart};