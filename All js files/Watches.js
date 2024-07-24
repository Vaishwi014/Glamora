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

const Watches = () => {
  const products = [
    { image: '/images/watch1.jpg', brand: 'Fossil', price: 4999 },
    { image: '/images/watch2.jpg', brand: 'Timex', price: 2999 },
    { image: '/images/watch3.jpg', brand: 'Casio', price: 1999 },
    { image: '/images/watch4.jpg', brand: 'Titan', price: 3999 },
    { image: '/images/watch5.jpg', brand: 'Seiko', price: 5999 },
    { image: '/images/watch6.jpg', brand: 'Citizen', price: 4999 },
    { image: '/images/watch7.jpg', brand: 'Michael Kors', price: 7999 },
    { image: '/images/watch8.jpg', brand: 'Guess', price: 6499 },
    { image: '/images/watch9.jpg', brand: 'Diesel', price: 7499 },
    { image: '/images/watch10.jpg', brand: 'Skagen', price: 8499 },
    { image: '/images/watch11.jpg', brand: 'Emporio Armani', price: 8999 },
    { image: '/images/watch12.jpg', brand: 'Tommy Hilfiger', price: 4999 },
    { image: '/images/watch13.jpg', brand: 'Daniel Wellington', price: 5499 },
    { image: '/images/watch14.jpg', brand: 'Tissot', price: 9999 },
    { image: '/images/watch15.jpg', brand: 'Longines', price: 12999 },
    { image: '/images/watch16.jpg', brand: 'Rolex', price: 19999 },
    { image: '/images/watch17.jpg', brand: 'Omega', price: 14999 },
    { image: '/images/watch18.jpg', brand: 'Rado', price: 13999 },
    { image: '/images/watch19.jpg', brand: 'Hublot', price: 17999 },
    { image: '/images/watch20.jpg', brand: 'Tag Heuer', price: 15999 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Watches;
