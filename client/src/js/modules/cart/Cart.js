import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ items }) {
  return (
    <div>

    </div>
  )
}

export const CartButton = () => <Link to="/shop/cart" className="cart-button dark"> cart </Link>
  
export default Cart;