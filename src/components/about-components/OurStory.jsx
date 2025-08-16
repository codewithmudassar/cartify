"use client";
import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        
        <div className="w-full lg:w-1/2 overflow-hidden">
          <motion.img
          initial={{x:-50,opacity:0,scale:1}}
           whileInView={{x:0,opacity:1,transition:{duration:0.8,delay:0.2}}} 
           viewport={{once:true}}
           whileHover={{scale:1.2,transition:{duration:0.4}}}
            src="/images/story.jpg"
            alt="Our Story"
            className="w-full h-auto rounded object-cover"
          />
        </div>


        <div className="w-full lg:w-1/2">
          <motion.h2 initial={{x:50,opacity:0}}
          viewport={{once:true}}
           whileInView={{x:0,opacity:1}} transition={{duration:0.8}} className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">Our Story</motion.h2>
          <motion.p initial={{x:50,opacity:0}}
          viewport={{once:true}}
           whileInView={{x:0,opacity:1}} transition={{duration:0.8,delay:0.4}} className="text-black text-lg mb-4 text-justify">
            At <strong>Cartify</strong>, we started with a simple mission: to make shopping more accessible, stylish, and seamless.
            Since our launch, we've grown from a small team into a thriving store powered by a passion for innovation and customer satisfaction.
          </motion.p>
          <motion.p initial={{x:50,opacity:0}}
          viewport={{once:true}}
           whileInView={{x:0,opacity:1}} transition={{duration:0.8,delay:0.6}} className="text-black text-lg text-justify">
            Every product we offer is handpicked with care, keeping your needs in mind. From sourcing quality items to delivering them at your doorstep — we’re here to serve you better, every day.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
