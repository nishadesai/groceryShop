import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, Home, Package, Phone, Info } from 'lucide-react';
import { useBasket } from '../context/BasketContext';

export const Navbar: React.FC = () => {
  const { state } = useBasket();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">Indian Grocery</Link>
          </div>

          {/* Menu for larger screens (lg and up) */}
          <div className="flex items-center space-x-4 lg:flex hidden">
            <Link to="/" className="flex items-center space-x-1 hover:text-orange-200">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-orange-200">
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link to="/products" className="flex items-center space-x-1 hover:text-orange-200">
              <Package size={20} />
              <span>Products</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-orange-200">
              <Phone size={20} />
              <span>Contact</span>
            </Link>

            {/* Basket for larger screens (inside the menu) */}
            <div className="relative ml-auto">
              <Link to="/basket" className="flex items-center space-x-1 hover:text-orange-200">
                <div className="relative">
                  <ShoppingBasket size={20} />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span>Basket</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Basket for mobile screens (outside the menu) */}
        <div className="lg:hidden flex justify-end mt-4">
          <Link to="/basket" className="flex items-center space-x-1 hover:text-orange-200">
            <div className="relative">
              <ShoppingBasket size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
