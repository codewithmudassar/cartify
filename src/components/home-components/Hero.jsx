import React from 'react'

const Hero = () => {
  return (
    <div>
      
      <section className='flex items-start h[450px] justify-start text-left px-25 py-35 mb-5 '>
        <div className='absolute inset-0'>
          <img
            src='/images/hero.jpg' 
            alt='Cartify Hero'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='z-10 text-gray-900 text-left'>
          <h1 className='text-10xl md:text-5xl font-bold mb-7'>Shop Smarter with Cartify</h1>
          <p className='text-lg mb-7'>Your one-stop shop for all essentials</p>
          <button className='bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white'>
            Shop Now
          </button>
        </div>
      </section>

    </div>
  )
}

export default Hero
