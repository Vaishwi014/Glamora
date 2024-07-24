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

const TShirts = () => {
  const products = [
    { image: '/Images/Tshirts/Image 1.jpg', brand: 'HRX by Hrithik Roshan', price: 499 },
    { image: '/Images/Tshirts/Image 2.jpg', brand: 'Roadster', price: 399 },
    { image: '/Images/Tshirts/Image 3.jpg', brand: 'DILLINGER', price: 549 },
    { image: '/Images/Tshirts/Image 4.jpg', brand: 'HRX by Hrithik Roshan', price: 450 },
    { image: '/Images/Tshirts/Image 5.jpg', brand: 'Roadster', price: 349 },
    { image: '/Images/Tshirts/Image 6.jpg', brand: 'DILLINGER', price: 699 },
    { image: '/Images/Tshirts/Image 7.jpg', brand: 'Calvin Klein', price: 899 },
    { image: '/Images/Tshirts/Image 8.jpg', brand: "Levi's", price: 999 },
    { image: '/Images/Tshirts/Image 9.jpg', brand: 'Calvin Klein', price: 1999 },
    { image: '/Images/Tshirts/Image 10.jpg', brand: "Levi's", price: 1299 },
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

export default TShirts;