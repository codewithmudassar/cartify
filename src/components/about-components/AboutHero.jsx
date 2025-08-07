"use client";
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    
      <img
        src="/images/aboutcover.png"
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover"
      />
     
      <div className="relative z-10 sm:px-8 max-w-2xl text-black">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-base sm:text-lg mb-6 text-justify">
          Welcome to <strong>Cartify</strong> — your trusted destination for quality, style, and convenience.
          Since our launch, we've been dedicated to delivering exceptional products that fit your lifestyle and budget.
          Explore our story and see what makes us more than just a store.
        </p>
        <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AboutHero;