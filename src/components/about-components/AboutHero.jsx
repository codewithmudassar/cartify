"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    
      <img
        src="/images/aboutcover.png"
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover"
      />
     
      <div className="relative z-10 sm:px-8 max-w-2xl text-black">
        <motion.h1 initial={{y:-50,opacity:0,scale:1}}
        viewport={{once:true}}
           whileInView={{y:0,opacity:1,transition:{duration:0.8,delay:0.2}}}  className="text-3xl sm:text-4xl font-bold mb-4">About Us</motion.h1>
        <motion.p initial={{x:50,opacity:0,scale:1}}
        viewport={{once:true}}
           whileInView={{x:0,opacity:1,transition:{duration:0.8,delay:0.4}}} className="text-base sm:text-lg mb-6 text-justify">
          Welcome to <strong>Cartify</strong> — your trusted destination for quality, style, and convenience.
          Since our launch, we've been dedicated to delivering exceptional products that fit your lifestyle and budget.
          Explore our story and see what makes us more than just a store.
        </motion.p>
        <motion.button  initial={{y:50,opacity:0}}
        viewport={{once:true}}
           whileInView={{y:0,opacity:1,transition:{duration:0.8,delay:0.6}}} className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};

export default AboutHero;