import React from 'react';
import { useBasket } from '../context/BasketContext';
import { Minus, Plus, Trash2, Send } from 'lucide-react';

export const Basket: React.FC = () => {
  const { state, dispatch } = useBasket();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    // Create the order message
    const orderDetails = state.items
      .map(item => `${item.name} x${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');
    
    const message = `New Order:\n\n${orderDetails}\n\nTotal: €${total.toFixed(2)}`;
    
    // Create WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/4917630644144?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Basket</h1>
      {state.items.length === 0 ? (
        <p className="text-gray-600 text-center">Your basket is empty</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center py-4 border-b last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">€{item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
                    })
                  }
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                  }
                  className="p-1 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl font-bold">Total:</p>
              <p className="text-xl font-bold">€{total.toFixed(2)}</p>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center"
            >
              <Send className="mr-2" size={20} />
              Place Order via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
};