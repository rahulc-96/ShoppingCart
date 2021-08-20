import classes from './CartButton.module.css';
import { cartActions } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
const CartButton = () => {
  const dispatcher = useDispatch();
  const toggleHandler = ()=>{
        console.log("Toggling")
        dispatcher(cartActions.toggleCart());
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
