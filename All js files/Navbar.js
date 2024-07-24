import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { GiShoppingBag } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdAccountCircle, MdKeyboardArrowDown } from "react-icons/md";
import SearchBar from './Searchbar';

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    WesternWear: false,
    IndianWear: false,
    Footwear: false,
    more: false,
    profile: false,
  });

  const navigate = useNavigate();

  const handleMouseEnter = (category) => {
    setDropdowns({ ...dropdowns, [category]: true });
  };

  const handleMouseLeave = (category) => {
    setDropdowns({ ...dropdowns, [category]: false });
  };

  const handleProfileClick = () => {
    setDropdowns({ ...dropdowns, profile: !dropdowns.profile });
  };

  const handleLoginSignupClick = () => {
    navigate('/login');
  };

  return (
    <div className='navbar'>
      <div className='left'>
        <span className='brand-name'>Glamora</span>
      </div>
      <div className='center'>
        <Link className="abc" to="/whats-new">What's New?</Link>

        <div 
          className="drop" 
          onMouseEnter={() => handleMouseEnter('WesternWear')} 
          onMouseLeave={() => handleMouseLeave('WesternWear')}
        >
          <div className="abc" >
            Western Wear
            <MdKeyboardArrowDown className="arrow-down" />
          </div>
          {dropdowns.WesternWear && (
            <div className="dropdown-menu">
              <Link to="/western-wear/tshirts">T-shirts</Link>
              <Link to="/western-wear/tops">Tops</Link>
              <Link to="/western-wear/crop-tops">Crop Tops</Link>
              <Link to="/western-wear/jeans">Jeans</Link>
              <Link to="/western-wear/skirts">Skirts</Link>
              <Link to="/western-wear/dresses">Dresses</Link>
              <Link to="/western-wear/cords">Cords</Link>
              <Link to="/western-wear/jumpsuits">Jumpsuits</Link>
            </div>
          )}
        </div>

        <div className="drop"
         onMouseEnter={() => handleMouseEnter('IndianWear')} 
         onMouseLeave={() => handleMouseLeave('IndianWear')}>
          <div className="abc">
            Indian Wear
            <MdKeyboardArrowDown className="arrow-down" />
          </div>
          {dropdowns.IndianWear && (
            <div className="dropdown-menu">
              <Link to="/indian-wear/kurta-set">Kurta-sets</Link>
              <Link to="/indian-wear/sarees">Sarees</Link>
              <Link to="/indian-wear/lehengas">Anarkali</Link>
              <Link to="/indian-wear/lehengas">Jaipuri</Link>
              <Link to="/indian-wear/lehengas">Indo-Western</Link>
              <Link to="/indian-wear/lehengas">Lehengas</Link>
            </div>
          )}
        </div>

        <div className="drop"
         onMouseEnter={() => handleMouseEnter('Footwear')} 
         onMouseLeave={() => handleMouseLeave('Footwear')}>
        <div className="abc" >
          Footwear
          <MdKeyboardArrowDown className="arrow-down" />
        </div>
        {dropdowns.Footwear && (
            <div className="dropdown-menu">
              <Link to="/foot-wear/flats">Flats</Link>
              <Link to="/foot-wear/heels">Heels</Link>
              <Link to="/foot-wear/sneakers">Sneakers</Link>
              <Link to="/foot-wear/sandals">Sandals</Link>
              <Link to="/foot-wear/crocs">Crocs</Link>
              <Link to="/foot-wear/boots">Boots</Link>
            </div>
          )}
        </div>

        <div className="drop"
         onMouseEnter={() => handleMouseEnter('more')}
         onMouseLeave={() => handleMouseLeave('more')}>
         <div className="abc">
           More
           <MdKeyboardArrowDown className="arrow-down" />
         </div>
          {dropdowns.more && (
            <div className="dropdown-menu">
              <Link to="/more/watches">Watches</Link>
              <Link to="/more/beauty">Beauty</Link>
              <Link to="/more/sunglasses">Sunglasses</Link>
              <Link to="/more/pajamas">Pajamas</Link>
            </div>
          )}
          </div>

        <SearchBar /> {/* Include the SearchBar component here */}

        <div 
          className='profile-container' 
          onMouseEnter={() => handleMouseEnter('profile')}
          onMouseLeave={() => handleMouseLeave('profile')}
        >
          <h2 className='ICON'><MdAccountCircle /></h2>
          {dropdowns.profile && (
            <div className='profile-dropdown'>
              <div className='profile-header'>
                <p>Welcome</p>
                <p>To access account and manage orders</p>
                <button className='login-button' onClick={handleLoginSignupClick}>LOGIN / SIGNUP</button>
              </div>
              <Link to="/orders" className='profile-link'>Orders</Link>
              <Link to="/wishlist" className='profile-link'>Wishlist</Link>
              <Link to="/contact" className='profile-link'>Contact Us</Link>
            </div>
          )}
        </div>

        <h2><Link to="/wishlist" className='xyz'><IoMdHeartEmpty /></Link></h2>
        <h2><Link to="/cart" className='xyz'><GiShoppingBag /></Link></h2>
      </div>
    </div>
  );
};

export default Navbar;
