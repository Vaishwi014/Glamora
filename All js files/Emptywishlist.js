// EmptyWishlist.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyWishlist.css'; // Create this CSS file to style the component

const EmptyWishlist = () => {
  return (
    <div className="empty-wishlist-container">
      <img src= './Images/EmptyWishlist.jpg'alt="Empty Wishlist" className="empty-wishlist-image" />
      <h2>Your wishlist is empty!</h2>
      <p>Looks like you haven't added anything to your wishlist. Let's change that.</p>
      <Link to="/" className="back-to-shopping-button">Back to shopping</Link>
    </div>
  );
}

export default EmptyWishlist;
