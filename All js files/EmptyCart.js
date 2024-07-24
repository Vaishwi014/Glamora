import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.css'; // Ensure you have some basic styling if needed
const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <img src={'./Images/Emptycart.jpg'} alt="Empty Cart" className="empty-cart-image" />
      <h2>Your shopping bag is empty!</h2>
      <p>Looks like you haven’t added anything to your bag. Let’s change that.</p>
      <Link to="/" className="back-to-shopping">Back to shopping</Link>
    </div>
  );
}

export default EmptyCart;