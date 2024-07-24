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

const Flats = () => {
  const products = [
    { image: '/images/flats1.jpg', brand: 'Bata', price: 499 },
    { image: '/images/flats2.jpg', brand: 'Hush Puppies', price: 999 },
    { image: '/images/flats3.jpg', brand: 'Metro', price: 799 },
    { image: '/images/flats4.jpg', brand: 'Catwalk', price: 899 },
    { image: '/images/flats5.jpg', brand: 'Liberty', price: 699 },
    { image: '/images/flats6.jpg', brand: 'Clarks', price: 1099 },
    { image: '/images/flats7.jpg', brand: 'Crocs', price: 1199 },
    { image: '/images/flats8.jpg', brand: 'Woodland', price: 1299 },
    { image: '/images/flats9.jpg', brand: 'Red Tape', price: 1399 },
    { image: '/images/flats10.jpg', brand: 'Nike', price: 1499 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Flats;
