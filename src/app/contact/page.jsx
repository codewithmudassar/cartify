
import React from 'react'

const page = () => {
  return (
    


    <div className='min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12'>
      
      
      <div className='mb-10 md:mb-0 md:w-1/2'>
      
        <h1 className='text-4xl font-semibold mb-4'>Contact us</h1>
        
        <p className='text-gray-700'>
          Need to get in touch with us? Fill out the form with your inquiry.We will contact you shortly.
          Thank you!
          
        </p>
      </div>

      
      <div className='bg-white shadow-xl p-8 rounded-lg md:w-1/2'>
        <form className='space-y-6'>
          <div className="flex gap-4">
            <input
              type='text'
              placeholder='First Name'
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type='text'
              placeholder='Last Name'
              className='w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <input
            type='email'
            placeholder='Email'
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
          <textarea
            placeholder='What can we help you with?'
            className='w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          ></textarea>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default page;
