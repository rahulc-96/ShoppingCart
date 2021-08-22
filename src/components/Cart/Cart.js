import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import React from 'react';
const Cart = () => {
  const items = useSelector(state => state.cartSlice.items);
  const itemList = items.map(entry => <CartItem key = {entry.id} item ={entry}/>)
  const itemContent = <React.Fragment>
      <h2>Your Shopping Cart</h2>
      <ul>
            {itemList}
      </ul>
  </React.Fragment>
  return (
    <Card className={classes.cart}>
     {items.length > 0 && itemContent}
     {items.length === 0 && <h2>Your cart is empty</h2>}
    </Card>
  );
};

export default Cart;
