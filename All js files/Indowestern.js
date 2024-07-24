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

const IndoWestern = () => {
  const products = [
    { image: '/images/indowestern1.jpg', brand: 'Biba', price: 1500 },
    { image: '/images/indowestern2.jpg', brand: 'Global Desi', price: 2000 },
    { image: '/images/indowestern3.jpg', brand: 'Fabindia', price: 2500 },
    { image: '/images/indowestern4.jpg', brand: 'W for Women', price: 3000 },
    { image: '/images/indowestern5.jpg', brand: 'Ritu Kumar', price: 3500 },
    { image: '/images/indowestern6.jpg', brand: 'Anita Dongre', price: 4000 },
    { image: '/images/indowestern7.jpg', brand: 'Jaipur Kurti', price: 4500 },
    { image: '/images/indowestern8.jpg', brand: 'AKS', price: 5000 },
    { image: '/images/indowestern9.jpg', brand: 'Imara', price: 5500 },
    { image: '/images/indowestern10.jpg', brand: 'Libas', price: 6000 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default IndoWestern;
