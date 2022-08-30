import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const productInCart = state.find(item => item.id === product.id);

            if (productInCart) {
                const cartProductIndex = state.findIndex(item => item.id === product.id);
                state[cartProductIndex].quantity = state[cartProductIndex].quantity + product.quantity;
            } else {
                return [product, ...state];
            }
        },

        removeCart: (state, action) => {
            const product = action.payload;
            return state.filter(item => item.id !== product.id);
        },
    }
})

const {reducer, actions} = cartSlice;
export const {addToCart, removeCart} = actions;
export default reducer;