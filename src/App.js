import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import React from "react";
import { notificationActions } from "./store/NotificationsSlice";
import { fetchCart, sendCart } from "./store/CartExtClient";
let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.cartSlice.show);
  const items = useSelector((state) => state.cartSlice.items);
  const changed = useSelector((state) => state.cartSlice.changed);
  const cartSize = useSelector((state) => state.cartSlice.cartSize);
  const notification = useSelector((state) => state.notificationsSlice.notifications);
  const dispatch = useDispatch();

  setTimeout(() => {
      if(notification && notification.status === 'success'){
        dispatch(notificationActions.reset())
      }
  }, 3000)

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (changed) {
      const cartData = { items:items, cartSize:cartSize };
      dispatch(sendCart(cartData));
    }
  }, [items, cartSize, changed, dispatch]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
