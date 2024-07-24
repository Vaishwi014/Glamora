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

const Lakhnavi = () => {
  const products = [
    { image: '/images/jaipuri1.jpg', brand: 'Anokhi', price: 1200 },
    { image: '/images/jaipuri2.jpg', brand: 'lakhnavi Kurti', price: 1500 },
    { image: '/images/jaipuri3.jpg', brand: 'Rangriti', price: 899 },
    { image: '/images/jaipuri4.jpg', brand: 'Global Desi', price: 1700 },
    { image: '/images/jaipuri5.jpg', brand: 'Fabindia', price: 1100 },
    { image: '/images/jaipuri6.jpg', brand: 'AKS', price: 1300 },
    { image: '/images/jaipuri7.jpg', brand: 'Imara', price: 1400 },
    { image: '/images/jaipuri8.jpg', brand: 'Libas', price: 1800 },
    { image: '/images/jaipuri9.jpg', brand: 'Shree', price: 1250 },
    { image: '/images/jaipuri10.jpg', brand: 'Biba', price: 1350 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Lakhnavi;
