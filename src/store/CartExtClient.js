import { cartActions } from "./CartSlice";
import { notificationActions } from "./NotificationsSlice";

export const fetchCart = () => {
  return async (dispatch) => {

    const getData = async () => {
      const response = await fetch(
        "https://food-cart-6307a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw Error("Something went wrong while fetching data");
      }

      return response.json();
    };

    try {
      const data = await getData();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          cartSize: data.cartSize,
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.sendNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCart = (cartData) => {
  return async (dispatch) => {

    const putData = async (cartData) => {
      const response = await fetch("https://food-cart-6307a-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cartData)
      })

      if (!response.ok) {
        throw new Error("Something went wrong while fetching data");
      }

    }

    try {
      await putData(cartData);
      dispatch(
        notificationActions.sendNotification({
          status: "success",
          title: "Success!",
          message: "Successfully updated cart!",
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.sendNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }

    } 
  }
