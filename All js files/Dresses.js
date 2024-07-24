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

const Dresses = () => {
  const products = [
    { image: '/Images/Dresses/Dress 1.jpg', brand: 'Forever 21', price: 3400 },
    { image: '/Images/Dresses/Dress 2.jpg', brand: 'Shein', price: 2800 },
    { image: '/Images/Dresses/Dress 3.jpg', brand: 'Boohoo', price: 3200 },
    { image: '/Images/Dresses/Dress 4.jpg', brand: 'Fashion Nova', price: 3400 },
    { image: '/Images/Dresses/Dress 5.jpg', brand: 'Amour Vert', price: 2800 },
    { image: '/Images/Dresses/Dress 6.jpg', brand: 'People Tree', price: 3200 },
    { image: '/Images/Dresses/Dress 7.jpg', brand: 'Tory Burch', price: 3400 },
    { image: '/Images/Dresses/Dress 8.jpg', brand: 'Shein', price: 2800 },
    { image: '/Images/Dresses/Dress 9.jpg', brand: 'People Tree', price: 3200 },
    { image: '/Images/Dresses/Dress 10.jpg', brand: 'Kate Spade', price: 3400 },
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

export default Dresses;