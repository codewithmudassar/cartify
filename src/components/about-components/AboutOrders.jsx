"use client";
import React from "react";
import { ShoppingCart, Truck, PackageCheck } from "lucide-react";

const AboutOrders = () => {
  return (
    <section className="w-full bg-white text-blue-900 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">How Orders Work</h2>
        <p className="mb-12 max-w-3xl mx-auto text-lg">
          From checkout to delivery, we ensure a smooth and reliable experience. Here's how your order journey looks with <strong>Cartify</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
         
          <div className="bg-white text-blue-800 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Place Your Order</h3>
            <p>
              Browse our wide range of products and place your order through our secure checkout process.
            </p>
          </div>

          
          <div className="bg-white text-blue-800 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <PackageCheck className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. We Process It</h3>
            <p>
              Once the order is confirmed, our team picks, packs, and prepares your products for shipping.
            </p>
          </div>

          
          <div className="bg-white text-blue-800 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Truck className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Fast Delivery</h3>
            <p>
              We ship quickly and provide tracking so you know exactly when to expect your package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrders;
