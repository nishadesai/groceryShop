import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Basket } from './pages/Basket';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <BasketProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BasketProvider>
    </Router>
  );
}

export default App;