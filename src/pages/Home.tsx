import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, TrendingUp, Truck } from 'lucide-react';
import { products } from '../data/products';
import homeImage from '../images/home.jpg'; 


export const Home: React.FC = () => {
  const bestSellers = products.slice(0, 3); // Using first 3 products as best sellers

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${homeImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-45" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Authentic Indian Groceries
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover the rich flavors of India with our premium selection of
              groceries, spices, and ingredients.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-lg"
            >
              <ShoppingBag className="mr-2" />
              Order Now
            </Link>
          </div>
        </div>
      </div>
  
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked quality products</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
              <p className="text-gray-600">100% satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <Link
                      to="/products"
                      className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};