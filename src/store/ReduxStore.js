import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../store/CartSlice';
import NotificationsReducer from "./NotificationsSlice";

const ReduxStore = configureStore({
    reducer : {notificationsSlice:NotificationsReducer, cartSlice: CartReducer}
});

export default ReduxStore;