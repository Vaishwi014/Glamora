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

const Lehngas = () => {
  const products = [
    { image: '/images/lehnga1.jpg', brand: 'Sabyasachi', price: 20000 },
    { image: '/images/lehnga2.jpg', brand: 'Tarun Tahiliani', price: 25000 },
    { image: '/images/lehnga3.jpg', brand: 'Manish Malhotra', price: 30000 },
    { image: '/images/lehnga4.jpg', brand: 'Anita Dongre', price: 35000 },
    { image: '/images/lehnga5.jpg', brand: 'Ritu Kumar', price: 15000 },
    { image: '/images/lehnga6.jpg', brand: 'Falguni Shane Peacock', price: 40000 },
    { image: '/images/lehnga7.jpg', brand: 'Shyamal & Bhumika', price: 45000 },
    { image: '/images/lehnga8.jpg', brand: 'Abu Jani Sandeep Khosla', price: 50000 },
    { image: '/images/lehnga9.jpg', brand: 'JJ Valaya', price: 55000 },
    { image: '/images/lehnga10.jpg', brand: 'Masaba Gupta', price: 60000 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Lehngas;
