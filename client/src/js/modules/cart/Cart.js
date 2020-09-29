import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from'../../global/Store.js';

function Cart() {
  const [state] = useContext(Context);

  return (
    <div className="cart">
      <label className="medium"> {state.items.length} items in cart -- todo </label>
      <br/>
      {
        state.items.map((item, i ) => (
          <label className="small" key={i}> {JSON.stringify(item)} </label>
        ))
      }
    </div>
  )
}

export const CartButton = () => <Link to="/shop/cart" className="cart-button dark"> cart </Link>
  
export default Cart;