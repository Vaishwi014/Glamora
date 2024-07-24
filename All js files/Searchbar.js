import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch, MdClose } from "react-icons/md";
import './Searchbar.css';

const categories = [
  'T-shirts', 'Tops', 'Crop Tops', 'Jeans', 'Skirts', 'Dresses', 'Coats', 'Sweaters',
  'Kurta-sets', 'Sarees', 'Anarkali', 'Lakhnavi', 'Indo-Western', 'Lehengas',
  'Flats', 'Heels', 'Sneakers', 'Sandals', 'Crocs', 'Boots',
  'Watches', 'Beauty', 'Sunglasses', 'Pajamas',
  'New Arrivals'
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigateToCategory(searchTerm.toLowerCase());
      setSearchTerm('');
    }
  };

  const navigateToCategory = (term) => {
    switch (term) {
      case 't-shirts':
      case 'tshirts':
        navigate('/western-wear/tshirts');
        break;
      case 'tops':
        navigate('/western-wear/tops');
        break;
      case 'crop tops':
      case 'croptops':
        navigate('/western-wear/crop-tops');
        break;
      case 'jeans':
        navigate('/western-wear/jeans');
        break;
      case 'skirts':
        navigate('/western-wear/skirts');
        break;
      case 'dresses':
        navigate('/western-wear/dresses');
        break;
      case 'cords':
        navigate('/western-wear/cords');
        break;
      case 'jumpsuits':
        navigate('/western-wear/jumpsuits');
        break;
      case 'kurta-sets':
        navigate('/indian-wear/kurta-sets');
        break;
      case 'sarees':
        navigate('/indian-wear/sarees');
        break;
      case 'anarkali':
        navigate('/indian-wear/anarkali');
        break;
      case 'jaipuri':
        navigate('/indian-wear/jaipuri');
        break;
      case 'indo-western':
        navigate('/indian-wear/indo-western');
        break;
      case 'lehengas':
        navigate('/indian-wear/lehengas');
        break;
      case 'flats':
        navigate('/foot-wear/flats');
        break;
      case 'heels':
        navigate('/foot-wear/heels');
        break;
      case 'sneakers':
        navigate('/foot-wear/sneakers');
        break;
      case 'sandals':
        navigate('/foot-wear/sandals');
        break;
      case 'crocs':
        navigate('/foot-wear/crocs');
        break;
      case 'boots':
        navigate('/foot-wear/boots');
        break;
      case 'watches':
        navigate('/more/watches');
        break;
      case 'beauty':
        navigate('/more/beauty');
        break;
      case 'sunglasses':
        navigate('/more/sunglasses');
        break;
      case 'pajamas':
        navigate('/more/pajamas');
        break;
      case 'new arrivals':
        navigate('/');
        break;
      default:
        alert('Category not found!');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = categories.filter(category =>
        category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setFilteredCategories([]);
    navigateToCategory(suggestion.toLowerCase());
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredCategories([]);
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for styles"
        />
        {searchTerm && (
          <button type="button" className="clear-search" onClick={handleClearSearch}>
            <MdClose className="search-icon" />
          </button>
        )}
        <button type="submit" className="search-button">
          <MdSearch className="search-icon" />
        </button>
      </form>
      {filteredCategories.length > 0 && (
        <div className="suggestions-dropdown">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
