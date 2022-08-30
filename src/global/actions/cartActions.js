import {addToCart, removeCart} from "../slices/cartSlice";

export const addToCartAction = (payload) => (dispatch) => {
    dispatch(addToCart(payload));
}

export const removeCartAction = (payload) => (dispatch) => {
    dispatch(removeCart(payload));
}
