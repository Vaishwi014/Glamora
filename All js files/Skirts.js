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

const Skirts = () => {
  const products = [
    { image: '/Images/Skirts/1.jpg', brand: 'Zara', price: 1900 },
    { image: '/Images/Skirts/2.jpg', brand: 'Urban Outfitters', price: 2100 },
    { image: '/Images/Skirts/3.jpg', brand: 'ASOS', price: 2300 },
    { image: '/Images/Skirts/4.jpg', brand: 'Forever 21', price: 1900 },
    { image: '/Images/Skirts/5.jpg', brand: 'Mango', price: 2100 },
    { image: '/Images/Skirts/6.jpg', brand: 'Free People', price: 2300 },
    { image: '/Images/Skirts/7.jpg', brand: 'Aritzia', price: 1900 },
    { image: '/Images/Skirts/8.jpg', brand: 'H&M', price: 2100 },
    { image: '/Images/Skirts/9.jpg', brand: 'Madewell', price: 2300 },
    { image: '/Images/Skirts/10.jpg', brand: 'Ann Taylor', price: 1900 },
    { image: '/Images/Skirts/11.jpg', brand: 'LOFT', price: 2100 },
    { image: '/Images/Skirts/12.jpg', brand: 'Uniqlo', price: 2300 },
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

export default Skirts;