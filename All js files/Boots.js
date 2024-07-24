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

const Boots = () => {
  const products = [
    { image: '/images/boots1.jpg', brand: 'Timberland', price: 3999 },
    { image: '/images/boots2.jpg', brand: 'Dr. Martens', price: 4999 },
    { image: '/images/boots3.jpg', brand: 'Clarks', price: 4599 },
    { image: '/images/boots4.jpg', brand: 'Red Wing', price: 5299 },
    { image: '/images/boots5.jpg', brand: 'Caterpillar', price: 3999 },
    { image: '/images/boots6.jpg', brand: 'Sorel', price: 3499 },
    { image: '/images/boots7.jpg', brand: 'UGG', price: 4199 },
    { image: '/images/boots8.jpg', brand: 'Hunter', price: 3799 },
    { image: '/images/boots9.jpg', brand: 'Timberland', price: 4499 },
    { image: '/images/boots10.jpg', brand: 'Columbia', price: 4099 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Boots;
