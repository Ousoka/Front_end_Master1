import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to the cart
  function addItem(product) {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // Remove item from the cart
  function removeItem(id) {
    setCartItems(cartItems.filter(item => item.id !== id));
  }

  // Update quantity of an item
  function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  }

  // Calculate total price
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, getTotal, updateQuantity, removeItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
