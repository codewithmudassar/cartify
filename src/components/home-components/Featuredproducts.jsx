import React from 'react'

const Featuredproducts = () => {

    const products = [
  {
     id: 1, name: 'Headphone', image: '/images/headphone.jpg' 
    },
  {
     id: 2, name: 'Shoes', image: '/images/shoes.jpg' 
    },
  {
     id: 3, name: 'Charcoal Facewash', image: '/images/charcoal-facewash.jpg' 
    },
  { 
    id: 4, name: 'Ceramic Plates', image: '/images/ceramic-plates.jpg'
 },  
   ]

  return (

    
    <div>
        <section className='py-12 bg-gray-50'>
  <div className='max-w-7xl mx-auto text-center'>
    <h2 className='text-3xl font-bold mb-8'>Featured Products</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>

      {products.map((product) => (
        <div key={product.id} className='bg-white rounded-lg shadow hover:scale-105 transition p-4'>
          <img src={product.image} alt={product.name} className='w-full h-50 rounded' />
          <h3 className='text-lg font-semibold mt-4'>{product.name}</h3>
          
          <p className='text-blue-600 font-bold mt-2'>$25.00</p>
          <button className='mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full'>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Featuredproducts
