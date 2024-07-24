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

const Sunglasses = () => {
  const products = [
    { image: '/images/sunglasses1.jpg', brand: 'Ray-Ban', price: 4999 },
    { image: '/images/sunglasses2.jpg', brand: 'Oakley', price: 5999 },
    { image: '/images/sunglasses3.jpg', brand: 'Persol', price: 6999 },
    { image: '/images/sunglasses4.jpg', brand: 'Maui Jim', price: 7999 },
    { image: '/images/sunglasses5.jpg', brand: 'Prada', price: 9999 },
    { image: '/images/sunglasses6.jpg', brand: 'Gucci', price: 10999 },
    { image: '/images/sunglasses7.jpg', brand: 'Tom Ford', price: 8499 },
    { image: '/images/sunglasses8.jpg', brand: 'Versace', price: 9499 },
    { image: '/images/sunglasses9.jpg', brand: 'Armani Exchange', price: 7599 },
    { image: '/images/sunglasses10.jpg', brand: 'Burberry', price: 6599 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Sunglasses;
