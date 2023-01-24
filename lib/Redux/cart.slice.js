import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {

        addToCart: (state, action) => {
            const itemExists = state.find((item) => item.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity++
            } else {
                state.push({ ...action.payload, quantity: 1})
            }
            toast.success(`Item has been added to your cart!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            
        },

        incrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if(item){
                item.quantity++
            }
            
        },

        decrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                const index = state.findIndex((item) => item.id === action.payload);
                state.splice(index, 1)
            } else {
                item.quantity--
            }
            
        },

        removeFromCart: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            state.splice(index, 1)
            toast.error(`Item has been removed from your cart!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        },

        calculateTotal: (state) => {
            let total = 0;
            state.forEach((item) => {
                total += item.price * item.quantity;
            });
            return total;
        },
    }
});

export const cartReducer = cartSlice.reducer


export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    calculateTotal,
} = cartSlice.actions