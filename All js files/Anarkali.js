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

const Anarkali = () => {
  const products = [
    { image: '/Images/Anarkalis/1.jpg', brand: 'Biba', price: 2500 },
    { image: '/Images/Anarkalis/2.jpg', brand: 'W for Women', price: 3000 },
    { image: '/Images/Anarkalis/3.jpg', brand: 'Aurelia', price: 3500 },
    { image: '/Images/Anarkalis/4.jpg', brand: 'Global Desi', price: 4000 },
    { image: '/Images/Anarkalis/5.jpg', brand: 'Jaipur Kurti', price: 4500 },
    { image: '/Images/Anarkalis/6.jpg', brand: 'AKS', price: 5000 },
    { image: '/Images/Anarkalis/7.jpg', brand: 'Imara', price: 5500 },
    { image: '/Images/Anarkalis/8.jpg', brand: 'Fabindia', price: 6000 },
    { image: '/Images/Anarkalis/9.jpg', brand: 'Libas', price: 6500 },
    { image: '/Images/Anarkalis/10.jpg', brand: 'Shree', price: 7000 },
    { image: '/Images/Anarkalis/11.jpg', brand: 'AKS', price: 5000 },
    { image: '/Images/Anarkalis/12.jpg', brand: 'Imara', price: 5500 },
    { image: '/Images/Anarkalis/13.jpg', brand: 'Fabindia', price: 6000 },
    { image: '/Images/Anarkalis/14.jpg', brand: 'Libas', price: 6500 },
    { image: '/Images/Anarkalis/15.jpg', brand: 'Shree', price: 7000 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Anarkali;
