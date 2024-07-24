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

const Sneakers = () => {
  const products = [
    { image: '/images/sneakers1.jpg', brand: 'Nike', price: 2999 },
    { image: '/images/sneakers2.jpg', brand: 'Adidas', price: 3499 },
    { image: '/images/sneakers3.jpg', brand: 'Puma', price: 2499 },
    { image: '/images/sneakers4.jpg', brand: 'Reebok', price: 1999 },
    { image: '/images/sneakers5.jpg', brand: 'New Balance', price: 2299 },
    { image: '/images/sneakers6.jpg', brand: 'Asics', price: 2599 },
    { image: '/images/sneakers7.jpg', brand: 'Under Armour', price: 2799 },
    { image: '/images/sneakers8.jpg', brand: 'Vans', price: 1999 },
    { image: '/images/sneakers9.jpg', brand: 'Converse', price: 1899 },
    { image: '/images/sneakers10.jpg', brand: 'Fila', price: 1699 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Sneakers;
