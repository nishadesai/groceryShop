import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="text-orange-600 mr-3" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-orange-600 mr-3" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">info@indiangrocery.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-orange-600 mr-3" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">123 Grocery Street</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="text-orange-600 mr-3" />
              <div>
                <p className="font-semibold">Business Hours</p>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 9:00 PM</p>
                <p className="text-gray-600">Sun: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};