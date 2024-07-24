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

const Beauty = () => {
  const products = [
    { image: '/images/beauty1.jpg', brand: 'Lakme Lipstick', price: 499 },
    { image: '/images/beauty2.jpg', brand: 'Maybelline Mascara', price: 349 },
    { image: '/images/beauty3.jpg', brand: 'L\'Oreal Foundation', price: 799 },
    { image: '/images/beauty4.jpg', brand: 'Revlon Nail Polish', price: 199 },
    { image: '/images/beauty5.jpg', brand: 'Neutrogena Face Wash', price: 299 },
    { image: '/images/beauty6.jpg', brand: 'Olay Moisturizer', price: 699 },
    { image: '/images/beauty7.jpg', brand: 'Nivea Body Lotion', price: 349 },
    { image: '/images/beauty8.jpg', brand: 'Dove Shampoo', price: 299 },
    { image: '/images/beauty9.jpg', brand: 'Pond\'s Cream', price: 249 },
    { image: '/images/beauty10.jpg', brand: 'Clinique Toner', price: 899 },
    { image: '/images/beauty11.jpg', brand: 'MAC Lip Gloss', price: 1199 },
    { image: '/images/beauty12.jpg', brand: 'Himalaya Face Scrub', price: 199 },
    { image: '/images/beauty13.jpg', brand: 'The Body Shop Body Butter', price: 599 },
    { image: '/images/beauty14.jpg', brand: 'Biotique Hair Oil', price: 399 },
    { image: '/images/beauty15.jpg', brand: 'Forest Essentials Face Pack', price: 799 },
    { image: '/images/beauty16.jpg', brand: 'Plum Green Tea Serum', price: 499 },
    { image: '/images/beauty17.jpg', brand: 'Kama Ayurveda Face Mist', price: 449 },
    { image: '/images/beauty18.jpg', brand: 'L\'Occitane Hand Cream', price: 799 },
    { image: '/images/beauty19.jpg', brand: 'Kiehl\'s Eye Cream', price: 999 },
    { image: '/images/beauty20.jpg', brand: 'Estee Lauder Perfume', price: 1999 },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Beauty;
