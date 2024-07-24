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

const Crocs = () => {
  const products = [
    { image: '/images/crocs1.jpg', brand: 'Crocs', price: 999 },
    { image: '/images/crocs2.jpg', brand: 'Crocs', price: 1099 },
    { image: '/images/crocs3.jpg', brand: 'Crocs', price: 1199 },
    { image: '/images/crocs4.jpg', brand: 'Crocs', price: 1299 },
    { image: '/images/crocs5.jpg', brand: 'Crocs', price: 1399 },
    { image: '/images/crocs6.jpg', brand: 'Crocs', price: 1499 },
    { image: '/images/crocs7.jpg', brand: 'Crocs', price: 1599 },
    { image: '/images/crocs8.jpg', brand: 'Crocs', price: 1699 },
    { image: '/images/crocs9.jpg', brand: 'Crocs', price: 1799 },
    { image: '/images/crocs10.jpg', brand: 'Crocs', price: 1899 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Crocs;
