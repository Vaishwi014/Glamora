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

const Sandals = () => {
  const products = [
    { image: '/images/sandals1.jpg', brand: 'Bata', price: 599 },
    { image: '/images/sandals2.jpg', brand: 'Hush Puppies', price: 1099 },
    { image: '/images/sandals3.jpg', brand: 'Metro', price: 899 },
    { image: '/images/sandals4.jpg', brand: 'Catwalk', price: 999 },
    { image: '/images/sandals5.jpg', brand: 'Liberty', price: 799 },
    { image: '/images/sandals6.jpg', brand: 'Clarks', price: 1299 },
    { image: '/images/sandals7.jpg', brand: 'Crocs', price: 1399 },
    { image: '/images/sandals8.jpg', brand: 'Woodland', price: 1499 },
    { image: '/images/sandals9.jpg', brand: 'Red Tape', price: 1599 },
    { image: '/images/sandals10.jpg', brand: 'Nike', price: 1699 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Sandals;
