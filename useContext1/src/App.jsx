import React from 'react';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { ShoppingCart } from 'lucide-react';

function App() {
  return (
    // <CartProvider>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center">
            <div className="flex items-center justify-center gap-2">
              <ShoppingCart className="w-8 h-8" />
              <h1 className="text-3xl font-bold">Shopping Cart Example</h1>
            </div>
            <p className="text-gray-600 mt-2">
              A practical example of React Context for state management
            </p>
          </header>
          
          <main className="grid gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Products</h2>
              <ProductList />
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
              <Cart />
            </section>
          </main>
        </div>
      </div>
    // </CartProvider>
  );
}

export default App;