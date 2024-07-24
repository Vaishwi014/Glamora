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

const KurtaSets = () => {
  const products = [
    { image: '/Images/Kurta-sets/13.jpg', brand: 'Biba', price: 2500 },
    { image: '/Images/Kurta-sets/2.jpg', brand: 'W for Women', price: 3000 },
    { image: '/Images/Kurta-sets/3.jpg', brand: 'Aurelia', price: 3500 },
    { image: '/Images/Kurta-sets/4.jpg', brand: 'Global Desi', price: 4000 },
    { image: '/Images/Kurta-sets/5.jpg', brand: 'Jaipur Kurti', price: 4500 },
    { image: '/Images/Kurta-sets/6.jpg', brand: 'AKS', price: 5000 },
    { image: '/Images/Kurta-sets/7.jpg', brand: 'Imara', price: 5500 },
    { image: '/Images/Kurta-sets/8.jpg', brand: 'Fabindia', price: 6000 },
    { image: '/Images/Kurta-sets/9.jpg', brand: 'Libas', price: 6500 },
    { image: '/Images/Kurta-sets/10.jpg', brand: 'Shree', price: 7000 },
    { image: '/Images/Kurta-sets/11.jpg', brand: 'AKS', price: 5000 },
    { image: '/Images/Kurta-sets/12.jpg', brand: 'Imara', price: 5500 },
    { image: '/Images/Kurta-sets/1.jpg', brand: 'Fabindia', price: 6000 },
    { image: '/Images/Kurta-sets/14.jpg', brand: 'Libas', price: 6500 },
    { image: '/Images/Kurta-sets/15.jpg', brand: 'Shree', price: 7000 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default KurtaSets;
