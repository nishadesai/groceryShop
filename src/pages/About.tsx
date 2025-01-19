import React from 'react';
import { Store, Award, Truck, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bringing authentic Indian flavors to your kitchen since 1970. We are committed to providing
          the highest quality Indian groceries and spices to our valued customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80"
            alt="Our Store"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Starting as a small family shop in 1970, we've grown into one of the most trusted
              Indian grocery stores in the region. Our journey has been guided by our commitment
              to authenticity, quality, and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
            alt="Our Products"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h2>
            <p className="text-gray-600">
              We carefully source our products directly from trusted suppliers in India,
              ensuring that every item on our shelves meets our high standards for quality
              and authenticity. We believe in providing our customers with the very best.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Store className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">50+ Years</h3>
          <p className="text-gray-600">Of trusted service</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">10,000+</h3>
          <p className="text-gray-600">Happy customers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Premium</h3>
          <p className="text-gray-600">Quality products</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Truck className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-gray-600">Delivery service</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-600">
              We never compromise on the quality of our products, ensuring that you get
              the best ingredients for your kitchen.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
            <p className="text-gray-600">
              Every product we sell is carefully selected to ensure it meets the
              authentic taste and quality of traditional Indian cuisine.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
            <p className="text-gray-600">
              Our dedicated team is always ready to help you find the right products
              and answer any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};