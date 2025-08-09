import React from "react";
import { ShoppingCart } from "lucide-react"; // optional icon library

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* ✅ Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-teal-600">Cartify</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-teal-600">Home</a>
            <a href="#" className="hover:text-teal-600">Shop</a>
            <a href="#" className="hover:text-teal-600">About</a>
            <a href="#" className="hover:text-teal-600">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Hero Section */}
      <section className="relative bg-teal-100 h-[450px] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg" // Put an image in public folder
            alt="Cartify Hero"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Smarter with Cartify</h1>
          <p className="text-lg mb-6">Your one-stop shop for all essentials</p>
          <button className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded text-white">
            Shop Now
          </button>
        </div>
      </section>

      {/* ✅ Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Electronics", "Fashion", "Home", "Beauty"].map((category, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow hover:scale-105 transition">
                <img src={`/category${index + 1}.jpg`} alt={category} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow hover:scale-105 transition p-4">
                <img src={`/product${item}.jpg`} alt="Product" className="w-full h-40 object-cover rounded" />
                <h3 className="text-lg font-semibold mt-4">Product {item}</h3>
                <p className="text-teal-600 font-bold mt-2">$25.00</p>
                <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded w-full">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-white shadow mt-12">
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2025 Cartify. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-teal-600">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-teal-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
