import React, { useRef, useState } from 'react';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { ShoppingCart } from 'lucide-react';
import { CardProvider } from './context/CardContext';



function App() {
  const [keyWord, setKeyWord] = useState('');
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.keyWord.value);
    // formRef.current.reset();
  }
  return (
    <CardProvider>
      { console.log(formRef) }
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
          <form ref={formRef} onSubmit={handleSubmit} className="flex justify-center">
            <input 
              name="keyWord"
              // value={keyWord}
              // onChange={(e) => setKeyWord(e.target.value)}
              type="text" className='w-full p-2 border border-gray-300 rounded' />
            <p className='text-gray-500 mt-4'>You are searching for : <span className='font-bold text-red-500'>{keyWord}</span></p>
          
          </form>
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
    </CardProvider>
  );
}

export default App;