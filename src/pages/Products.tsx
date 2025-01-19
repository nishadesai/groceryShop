import React, { useState } from 'react';
import { useBasket } from '../context/BasketContext';
import { products } from '../data/products';
import { Plus, MessageCircle } from 'lucide-react';

export const Products: React.FC = () => {
  const { dispatch } = useBasket();
  const [addedToBasket, setAddedToBasket] = useState<string | null>(null); 

  const handleAddToBasket = (product: any) => {
    // Dispatch the entire product object, not just the name
    dispatch({ type: 'ADD_ITEM', payload: product });
    setAddedToBasket(product.name);  // Show the added product notification

    // Hide the notification after 2 seconds
    setTimeout(() => {
      setAddedToBasket(null);
    }, 2000);
  };

  const handleContact = () => {
    const message = encodeURIComponent("Hi, I would like to inquire about your products.");
    window.open(`https://wa.me/4917630644144?text=${message}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>

      {/* Quick Popup */}
      {addedToBasket && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-center z-50">
          <p>Product "{addedToBasket}" added to basket!</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-orange-600">
                  €{product.price.toFixed(2)}
                </span>
                <button
                  onClick={handleContact}
                  className="flex items-center text-gray-600 hover:text-green-600"
                >
                  <MessageCircle size={20} className="mr-1" />
                  Contact Us
                </button>
              </div>
              <button
                onClick={() => handleAddToBasket(product)}  // Pass the entire product object here
                className="w-full flex items-center justify-center px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
              >
                <Plus size={20} className="mr-1" />
                Add to Basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
