import React from 'react';
import ProductData from './Data';

function TshirtsandTops() {
  const products = ProductData.filter(item => item.category === 'Tshirts & Tops');

  return (
    <div className="product-page">
      <h1>Tshirts & Tops</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TshirtsandTops;
