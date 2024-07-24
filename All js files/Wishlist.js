import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import EmptyWishlist from './Emptywishlist'; // Adjust the import path based on your directory structure
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist } = useContext(GlobalContext);

  if (wishlist.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <div className="wishlist-container">
      {wishlist.map((product, index) => (
        <div key={index} className="wishlist-product">
          <img src={product.image} alt={product.name} className="wishlist-product-image" />
          <div className="wishlist-product-details">
            <div className="wishlist-product-name">{product.name}</div>
            <div className="wishlist-product-price">Rs. {product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
