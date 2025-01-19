import React from 'react';
import { useBasket } from '../context/BasketContext';
import { products } from '../data/products';
import { Plus, MessageCircle } from 'lucide-react';

export const Products: React.FC = () => {
  const { dispatch } = useBasket();

  const handleContact = () => {
    const message = encodeURIComponent("Hi, I would like to inquire about your products.");
    window.open(`https://wa.me/4917630644144?text=${message}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
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
                onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
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