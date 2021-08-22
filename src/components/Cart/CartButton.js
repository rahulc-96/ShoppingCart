import classes from './CartButton.module.css';
import { cartActions } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const CartButton = () => {
  const cartSize = useSelector(state => state.cartSlice.cartSize)
  const dispatcher = useDispatch();
  const toggleHandler = ()=>{
        console.log("Toggling")
        dispatcher(cartActions.toggleCart());
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartSize}</span>
    </button>
  );
};

export default CartButton;
