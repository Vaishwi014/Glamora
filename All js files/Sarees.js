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

const Sarees = () => {
  const products = [
    { image: '/images/saree1.jpg', brand: 'Nalli', price: 3500 },
    { image: '/images/saree2.jpg', brand: 'Kalanjali', price: 4500 },
    { image: '/images/saree3.jpg', brand: 'Meena Bazaar', price: 5500 },
    { image: '/images/saree4.jpg', brand: 'Satya Paul', price: 6500 },
    { image: '/images/saree5.jpg', brand: 'Ritu Kumar', price: 7500 },
    { image: '/images/saree6.jpg', brand: 'Fabindia', price: 3500 },
    { image: '/images/saree7.jpg', brand: 'Sabyasachi', price: 9500 },
    { image: '/images/saree8.jpg', brand: 'Tarun Tahiliani', price: 8500 },
    { image: '/images/saree9.jpg', brand: 'Anita Dongre', price: 10500 },
    { image: '/images/saree10.jpg', brand: 'Manish Malhotra', price: 12500 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Sarees;
