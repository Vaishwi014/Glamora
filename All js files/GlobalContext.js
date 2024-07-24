import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <GlobalContext.Provider value={{ wishlist, cart, addToWishlist, addToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
