import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = () => {
  const items = useSelector(state => state.cartSlice.items);
  const itemList = items.map(entry => <CartItem key = {entry.id} item ={entry}/>)
  console.log(itemList.length)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
            {itemList}
      </ul>
    </Card>
  );
};

export default Cart;
