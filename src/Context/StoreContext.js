import React, { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

const getInitialCart = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};

const clearAllItemsInCart = () => {
    localStorage.clear();
    return "success";
}

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart); 

  const addCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    clearAllItemsInCart();
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    // The Provider component makes the theme and toggleTheme available to any children components
    <StoreContext.Provider value={{ cart, addCart, clearCart }}>
      {children}
    </StoreContext.Provider>
  );
};
