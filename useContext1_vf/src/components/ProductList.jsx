import React from 'react';
import { useCart } from '../context/CardContext';

const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Headphones', price: 99.99 },
  { id: 3, name: 'Mouse', price: 29.99 },
];

export function ProductList() {
  const {addItem}  = useCart();
  
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addItem(product)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}