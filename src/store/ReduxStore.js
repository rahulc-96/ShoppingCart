import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../store/CartSlice';

const ReduxStore = configureStore({
    reducer : {cartSlice: CartReducer}
});

export default ReduxStore;