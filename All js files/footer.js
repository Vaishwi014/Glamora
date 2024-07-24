import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="section">
          <h3>About Us</h3>
          <p>We are a fashion retailer providing the latest trends and styles.</p>
        </div>
        <div className="section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className="section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; 2024 Glamora. All Rights Reserved.</p>
      </div>
    </div>
  );
}
export default Footer;