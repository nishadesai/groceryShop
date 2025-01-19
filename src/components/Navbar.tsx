import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, Home, Package, Phone, Info, Menu, X } from 'lucide-react'; // Added Menu and X for the hamburger icon
import { useBasket } from '../context/BasketContext';

export const Navbar: React.FC = () => {
  const { state } = useBasket();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  // State for handling the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">Indian Grocery</Link>
          </div>
          
          {/* Desktop and larger screens navigation links */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Hamburger Menu Icon */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/basket" className="flex items-center space-x-1 hover:text-orange-200" onClick={closeMobileMenu}>
              <div className="relative">
                <ShoppingBasket size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Toggle visibility based on isMobileMenuOpen state */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-left space-y-4 py-4">
            <Link to="/" className="flex items-left space-x-1 hover:text-orange-200" onClick={closeMobileMenu}>
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-left space-x-1 hover:text-orange-200" onClick={closeMobileMenu}>
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link to="/products" className="flex items-left space-x-1 hover:text-orange-200" onClick={closeMobileMenu}>
              <Package size={20} />
              <span>Products</span>
            </Link>
            <Link to="/contact" className="flex items-left space-x-1 hover:text-orange-200" onClick={closeMobileMenu}>
              <Phone size={20} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
