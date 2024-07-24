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

const Croptops = () => {
  const products = [
    { image: '/Images/Crop tops/Top 1.jpg', brand: 'Ajile', price: 499 },
    { image: '/Images/Crop tops/Top 2.jpg', brand: 'Young once', price: 549 },
    { image: '/Images/Crop tops/Top  3.jpg', brand: 'Only', price: 599 },
    { image: '/Images/Crop tops/Top 4.jpg', brand: 'Ginger', price: 499 },
    { image: '/Images/Crop tops/Top 5.jpg', brand: 'People', price: 699 },
    { image: '/Images/Crop tops/Top 6.jpg', brand: 'Vero Moda', price: 1399 },
    { image: '/Images/Crop tops/Top 7.jpg', brand: 'Kappa', price: 599 },
    { image: '/Images/Crop tops/Top 8.jpg', brand: 'Only', price: 799 },
    { image: '/Images/Crop tops/Top 9.jpg', brand: 'Ginger', price: 599 },
    { image: '/Images/Crop tops/Top 10.jpg', brand: 'Ajile', price: 599 },
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

export default Croptops;