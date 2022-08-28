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

        increment: (state, action) => {
            const product = action.payload;
            const isIncrementProduct = state.find(item => item?.id === product?.id);

            if (isIncrementProduct) {
                const incrementProductIndex = state.findIndex(item => item.id === product.id);
                state[incrementProductIndex].quantity += 1;

                return state;
            } else {
                return state;
            }
        },

        decrement: (state, action) => {
            const product = action.payload;
            const isDecrementProduct = state.find(item => item.id === product.id);

            if (isDecrementProduct) {
                const decrementProductIndex = state.findIndex(item => item.id === product.id);
                state[decrementProductIndex].quantity -= 1;
                return state;
            } else {
                return state;
            }
        },

        clear: () => {
            return [];
        }
    }
})

const {reducer, actions} = cartSlice;
export const {addToCart, removeCart, increment, decrement, clear} = actions;
export default reducer;