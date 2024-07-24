import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import './Product.css';

const ProductCard = ({ product }) => {
  const { addToWishlist, addToCart } = useContext(GlobalContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">Rs. {product.price}</div>
        <div className="product-buttons">
          <button className="product-button" onClick={() => addToWishlist(product)}>+ Wishlist</button>
          <button className="product-button" onClick={() => addToCart(product)}>+ Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
