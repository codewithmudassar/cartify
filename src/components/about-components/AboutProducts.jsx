"use client";
import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Premium Leather Bag",
    image: "/images/product1.jpg",
    description: "Crafted with care and elegance for your everyday style.",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    image: "/images/product2.jpg",
    description: "Track your goals, stay connected, and live smarter.",
  },
  {
    id: 3,
    name: "Noise-Canceling Headphones",
    image: "/images/product3.jpg",
    description: "Experience immersive sound like never before.",
  },
  {
    id: 4,
    name: "Stylish Sunglasses",
    image: "/images/product4.jpg",
    description: "Protect your eyes in style with UV-blocking polarized lenses.",
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    image: "/images/product5.jpg",
    description: "A perfect blend of modern design and soft lighting for workspaces.",
  },
];

const AboutProduct = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">Our Products</h2>
        <p className="text-lg text mb-12 max-w-2xl mx-auto text-blue-900">
          Explore a curated collection of quality products designed to elevate your lifestyle.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product,i) => (
            <motion.div
            initial={{y:50,opacity:0}}
          viewport={{once:true}}
           whileInView={{y:0,opacity:1}} transition={{duration:1,delay: i * 0.1}}
              key={product.id}
              
              className="bg-white border border-blue-400 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{product.name}</h3>
                <p className="text-blue-600 text-sm">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
