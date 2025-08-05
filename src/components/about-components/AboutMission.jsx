"use client";
import React from "react";

const AboutMission = () => {
  return (
    <section className="w-full bg-blue-500 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center text-white">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Our Mission</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          At <strong>Cartify</strong>, we believe in building more than a shopping experience — we create value, trust, and impact with every purchase.
        </p>

        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          <div className="bg-white text-blue-700 rounded-xl p-6 shadow-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Uncompromised Quality</h3>
            <p className="text-sm text-black">
              Every product is handpicked and quality-checked to meet our highest standards.
            </p>
          </div>

          
          <div className="bg-white text-blue-700 rounded-xl p-6 shadow-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-sm text-black">
              From browsing to delivery, our mission is to make your shopping simple and delightful.
            </p>
          </div>

        
          <div className="bg-white text-blue-700 rounded-xl p-6 shadow-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Positive Impact</h3>
            <p className="text-sm text-black">
              We’re committed to ethical sourcing, fair pricing, and sustainable practices for a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
