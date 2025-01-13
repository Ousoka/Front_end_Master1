import { createContext, useContext, useState } from "react";

export const context = createContext();
export function CardProvider({ children }) {

    const [items, setItems] = useState([]);

    const addItem = (product) =>{
        setItems((currentItems) => {
            const existingItem = currentItems
            .find(item => item.id === product.id);
            if (existingItem) {
              return currentItems.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            }
            return [...currentItems, { ...product, quantity: 1 }];
          });
    } 

    const removeItem = (productId) => {
        setItems(currentItems => 
          currentItems.filter(item => item.id !== productId)
        );
    };

    const updateQuantity = (productId, newQuantity) => {
        setItems(currentItems =>
          currentItems.map(item =>
            item.id === productId
              ? { ...item, quantity: Math.max(0, newQuantity) }
              : item
          )
        );
    };

    const getTotal = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <context.Provider value={{ items, addItem, removeItem, updateQuantity, getTotal }}>
          {children}
        </context.Provider>
      );
}


export function useCart() {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return ctx;
  }