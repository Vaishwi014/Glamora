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

const Pajamas = () => {
  const products = [
    { image: '/images/pajamas1.jpg', brand: 'Jockey', price: 999 },
    { image: '/images/pajamas2.jpg', brand: 'Calvin Klein', price: 1999 },
    { image: '/images/pajamas3.jpg', brand: 'Marks & Spencer', price: 1499 },
    { image: '/images/pajamas4.jpg', brand: 'H&M', price: 799 },
    { image: '/images/pajamas5.jpg', brand: 'Uniqlo', price: 899 },
    { image: '/images/pajamas6.jpg', brand: 'Zara', price: 1299 },
    { image: '/images/pajamas7.jpg', brand: 'Tommy Hilfiger', price: 1599 },
    { image: '/images/pajamas8.jpg', brand: 'Adidas', price: 1199 },
    { image: '/images/pajamas9.jpg', brand: 'Nike', price: 1099 },
    { image: '/images/pajamas10.jpg', brand: 'Puma', price: 999 },
    { image: '/images/pajamas11.jpg', brand: 'Reebok', price: 999 },
    { image: '/images/pajamas12.jpg', brand: 'Under Armour', price: 1299 },
    { image: '/images/pajamas13.jpg', brand: 'Gap', price: 999 },
    { image: '/images/pajamas14.jpg', brand: 'Levi\'s', price: 1099 },
    { image: '/images/pajamas15.jpg', brand: 'American Eagle', price: 1199 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Pajamas;
