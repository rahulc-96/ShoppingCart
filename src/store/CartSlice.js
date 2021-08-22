import { createSlice } from "@reduxjs/toolkit";

const initialState = {items:[], show:false, cartSize:0, changed:false};
const CartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers:{
        replaceCart(state, action){
              state.items = action.payload.items;
              state.cartSize = action.payload.cartSize;
        },
        removeFromCart(state,action){
            let itemToBeUpdated = action.payload;
            const existingIndex = state.items.findIndex(item => item.id === itemToBeUpdated.id)
            if (state.items[existingIndex].quantity === 1){
                state.items = state.items.filter(item => item.id !== itemToBeUpdated.id)
            }else{
                let currentState = state.items[existingIndex];
                const newQty = --currentState.quantity;
                const newTotal = newQty * currentState.price;
                const updatedState = {...currentState, total: newTotal, quantity: newQty}; 
                state.items[existingIndex] = updatedState;
            }
            state.changed = true;
            state.cartSize -= 1;         
        },
        addToCart(state, action){
         let payload = action.payload;
         let itemToBeUpdated = {id: payload.id, title:payload.title, quantity:1, total: payload.price, price:payload.price};
         const existingIndex = state.items.findIndex(item => item.id === itemToBeUpdated.id)
         if (state.items[existingIndex] == null){
             state.items.push(itemToBeUpdated)
            }else{
             let currentState = state.items[existingIndex];
             const newQty = ++currentState.quantity;
             const newTotal = newQty* currentState.price;
             const updatedState = {...currentState, total: newTotal, quantity: newQty}; 
             state.items[existingIndex] = updatedState;
         }
         state.cartSize += 1;         
         state.changed = true;
        },
        toggleCart(state){
            state.show = !state.show;
        }
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;