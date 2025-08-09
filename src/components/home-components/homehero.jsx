"use client";
import React from "react";

const HomeHero = () => {
  return (
    <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden">
      
      <img
        src="/images/coverphoto.png"
        alt="Product Collage"
        className="absolute inset-0 w-full h-full object-cover"
      /> 
          
      <div className="relative z-10 text-center bg-neutral-200 rounded-4xl p-4 text-blue-500 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Discover Your Style with Cartify
        </h1>
        <p className=" text-black text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
          Shop the latest fashion trends and accessories all in one place.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition">
          Shop Now
        </button>
        </div>
    </section>
  );
};

export default HomeHero;









