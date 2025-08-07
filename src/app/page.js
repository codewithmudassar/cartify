import { Headphones } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
        <section className='bg-gray-50 py-12 px-6'>
          <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
            
            <div className='flex justify-center'>
              <img
                src='/images/headphones.jpg'
                alt='Cartify Headphones'
                className='w-100 h-100 object-cover'
              />
            </div>
       <div>
            <h2 className='text-3xl font-bold mb-4'>Why Choose Cartify Headphones?</h2>
            <p className='text-gray-750 mb-6'>
              Combining advanced technology, deep bass, crisp treble, and premium sound quality. Experience music like never before with long-lasting comfort.
              </p>
    
              
              <div className='grid grid-cols-2 gap-6 mb-6'>
                <div className='flex items-center space-x-3'>
                  <span className='text-xl'>🎧</span>
                  <p className='text-gray-750'>Noise Cancellation</p>
                </div>

                <div className='flex items-center space-x-3'>
                  <span className='text-xl'>🔋</span>
                  <p className='text-gray-750'>30 hrs Battery Life</p>
                </div>

                <div className='flex items-center space-x-3'>
                  <span className='text-xl'>📶</span>
                  <p className='text-gray-750'>Wireless Bluetooth</p>
                </div>

                <div className='flex items-center space-x-3'>
                  <span className='text-xl'>🎵</span>
                  <p className='text-gray-750'>Premium Sound</p>
                </div>


              </div>
    
              
              <button className='bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition'>
                Explore Now
              </button>
            </div>
          </div>
        </section>
      );
    };
    
   

export default page