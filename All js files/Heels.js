import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.brand} className="product-image" />
      <div className="product-details">
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">Rs. {product.price}</div>
        <div className="product-buttons">
          <button className="product-button">+ Wishlist</button>
          <button className="product-button">+ Cart</button>
        </div>
      </div>
    </div>
  );
};

const Heels = () => {
  const products = [
    { image: '/images/heels1.jpg', brand: 'Steve Madden', price: 1999 },
    { image: '/images/heels2.jpg', brand: 'Jimmy Choo', price: 2999 },
    { image: '/images/heels3.jpg', brand: 'Aldo', price: 2499 },
    { image: '/images/heels4.jpg', brand: 'Charles & Keith', price: 2199 },
    { image: '/images/heels5.jpg', brand: 'Nine West', price: 2399 },
    { image: '/images/heels6.jpg', brand: 'Clarks', price: 1899 },
    { image: '/images/heels7.jpg', brand: 'Zara', price: 2299 },
    { image: '/images/heels8.jpg', brand: 'H&M', price: 1999 },
    { image: '/images/heels9.jpg', brand: 'Forever 21', price: 1499 },
    { image: '/images/heels10.jpg', brand: 'Gucci', price: 3999 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Heels;
