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

const Jumpsuits = () => {
  const products = [
    { image: '/Images/Jumpsuits/1.jpg', brand: 'Zara', price: 2900 },
    { image: '/Images/Jumpsuits/2.jpg', brand: 'Forever 21', price: 3100 },
    { image: '/Images/Jumpsuits/3.jpg', brand: 'ASOS', price: 3500 },
    { image: '/Images/Jumpsuits/4.jpg', brand: 'Mango', price: 2900 },
    { image: '/Images/Jumpsuits/5.jpg', brand: 'Urban Outfitters', price: 3100 },
    { image: '/Images/Jumpsuits/6.jpg', brand: 'Revolve', price: 3500 },
    { image: '/Images/Jumpsuits/7.jpg', brand: 'Free People', price: 2900 },
    { image: '/Images/Jumpsuits/8.jpg', brand: 'Madewell', price: 3100 },
    { image: '/Images/Jumpsuits/9.jpg', brand: 'Express', price: 3500 },
    { image: '/Images/Jumpsuits/10.jpg', brand: 'Missguided', price: 2900 },
    { image: '/Images/Jumpsuits/11.jpg', brand: 'Nasty Gal', price: 2900 },
    { image: '/Images/Jumpsuits/12.jpg', brand: 'PrettyLittleThing', price: 3100 },
    { image: '/Images/Jumpsuits/13.jpg', brand: 'Nordstrom', price: 3500 },
    { image: '/Images/Jumpsuits/14.jpg', brand: 'Guess', price: 2900 },
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

export default Jumpsuits;