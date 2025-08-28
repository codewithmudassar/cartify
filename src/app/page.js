import Category from '@/components/home-components/Category'
import Featuredproducts from '@/components/home-components/Featuredproducts'
import Hero from '@/components/home-components/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Hero/> */}
      <Category/>
      <Featuredproducts/>
    </div>
  )
}

export default page
