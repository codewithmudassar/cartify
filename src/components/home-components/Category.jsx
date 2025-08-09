import React from 'react'

const Category = () => {
  return (
    <div>
      
      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Shop by Category</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {['Electronics', 'Fashion', 'Home', 'Beauty'].map((category, index) => (
              <div key={index} className='bg-gray-100 rounded-lg overflow-hidden shadow hover:scale-105 transition'>
                <img src={`/images/category-${index + 1}.jpg`} alt={category} className='w-full h-50' />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold'>{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Category
