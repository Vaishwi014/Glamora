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

const Jeans = () => {
  const products = [
    { image: '/Images/Jeans/1.jpg', brand: "Levi's", price: 1500 },
    { image: '/Images/Jeans/2.jpg', brand: 'Wrangler', price: 800 },
    { image: '/Images/Jeans/3.jpg', brand: 'Lee', price: 1700 },
    { image: '/Images/Jeans/4.jpg', brand: 'Guess', price: 1500 },
    { image: '/Images/Jeans/5.jpg', brand: 'American Eagle', price: 800 },
    { image: '/Images/Jeans/6.jpg', brand: 'GAP', price: 1700 },
    { image: '/Images/Jeans/7.jpg', brand: 'Lee', price: 1500 },
    { image: '/Images/Jeans/8.jpg', brand: 'Diesel', price: 800 },
    { image: '/Images/Jeans/9.jpg', brand: 'Uniqlo', price: 1700 },
    { image: '/Images/Jeans/10.jpg', brand: 'AG Jeans', price: 1500 },
    { image: '/Images/Jeans/11.jpg', brand: 'Mother Denim', price: 800 },
    { image: '/Images/Jeans/12.jpg', brand: 'Rag & Bone', price: 1700 },
    // Add more products as needed
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Jeans;