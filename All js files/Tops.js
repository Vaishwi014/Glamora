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

const Tops = () => {
  const products = [
    { image: '/Images/Tops/Top 1.jpg', brand: 'Ajile', price: 499 },
    { image: '/Images/Tops/Top 2.jpg', brand: 'Young once', price: 549 },
    { image: '/Images/Tops/Top 3.jpg', brand: 'Only', price: 599 },
    { image: '/Images/Tops/Top 4.jpg', brand: 'Ginger', price: 499 },
    { image: '/Images/Tops/Top 5.jpg', brand: 'People', price: 699 },
    { image: '/Images/Tops/Top 6.jpg', brand: 'Vero Moda', price: 1399 },
    { image: '/Images/Tops/Top 7.jpg', brand: 'Kappa', price: 599 },
    { image: '/Images/Tops/Top 8.jpg', brand: 'Only', price: 799 },
    { image: '/Images/Tops/Top 9.jpg', brand: 'Ginger', price: 599 },
    { image: '/Images/Tops/Top 10.jpg', brand: 'Ajile', price: 599 },
    { image: '/Images/Tops/Top 11.jpg', brand: 'Young once', price: 649 },
    { image: '/Images/Tops/Top 12.jpg', brand: 'Only', price: 799 },
    { image: '/Images/Tops/Top 13.jpg', brand: 'Ginger', price: 749 },
    { image: '/Images/Tops/Top 14.jpg', brand: 'People', price: 649 },
    { image: '/Images/Tops/Top 15.jpg', brand: 'Vero Moda', price: 1199 },
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

export default Tops;