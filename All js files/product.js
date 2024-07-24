import React from 'react';
import './product.css';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.brand} className="product-image" />
      <div className="product-details">
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">Rs. {product.price}</div>
      </div>
    </div>
  );
};

const ProductList = () => {
  // Example products array with at least 15 products for 3 rows
  const products = [
    { image: '/images/product1.jpg', brand: 'HRX by Hrithik Roshan', price: 335 },
    { image: '/images/product2.jpg', brand: 'Roadster', price: 251 },
    { image: '/images/product3.jpg', brand: 'DILLINGER', price: 535 },
    { image: '/images/product4.jpg', brand: 'Roadster', price: 458 },
    { image: '/images/product5.jpg', brand: 'Chemistry', price: 503 },
    { image: '/images/product6.jpg', brand: 'Brand F', price: 1216 },
    { image: '/images/product7.jpg', brand: 'Brand G', price: 2975 },
    { image: '/images/product8.jpg', brand: 'Brand H', price: 1200 },
    { image: '/images/product9.jpg', brand: 'Brand I', price: 1350 },
    { image: '/images/product10.jpg', brand: 'Brand J', price: 1500 },
    { image: '/images/product11.jpg', brand: 'Brand K', price: 800 },
    { image: '/images/product12.jpg', brand: 'Brand L', price: 1700 },
    { image: '/images/product13.jpg', brand: 'Brand M', price: 1900 },
    { image: '/images/product14.jpg', brand: 'Brand N', price: 2100 },
    { image: '/images/product15.jpg', brand: 'Brand O', price: 2300 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;