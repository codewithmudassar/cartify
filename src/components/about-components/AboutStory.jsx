"use client";
import React from "react";

const AboutStory = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        
        <div className="w-full lg:w-1/2">
          <img
            src="/images/story.jpg"
            alt="Our Story"
            className="w-full h-auto rounded object-cover"
          />
        </div>


        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">Our Story</h2>
          <p className="text-black text-lg mb-4 text-justify">
            At <strong>Cartify</strong>, we started with a simple mission: to make shopping more accessible, stylish, and seamless.
            Since our launch, we've grown from a small team into a thriving store powered by a passion for innovation and customer satisfaction.
          </p>
          <p className="text-black text-lg text-justify">
            Every product we offer is handpicked with care, keeping your needs in mind. From sourcing quality items to delivering them at your doorstep — we’re here to serve you better, every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
