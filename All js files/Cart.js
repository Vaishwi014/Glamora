import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import EmptyCart from './EmptyCart'; // Adjust the import path based on your directory structure

const Cart = () => {
  const { cart } = useContext(GlobalContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart-container">
      {cart.map((product, index) => (
        <div key={index} className="cart-product">
          <img src={product.image} alt={product.name} className="cart-product-image" />
          <div className="cart-product-details">
            <div className="cart-product-name">{product.name}</div>
            <div className="cart-product-price">Rs. {product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
