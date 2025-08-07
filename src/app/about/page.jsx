import AboutHero from '@/components/about-components/AboutHero'
import AboutMission from '@/components/about-components/AboutMission'
import AboutOrders from '@/components/about-components/AboutOrders'
import AboutProducts from '@/components/about-components/AboutProducts'
import AboutReviews from '@/components/about-components/AboutReviews'
import OurStory from '@/components/about-components/OurStory'
import React from 'react'

const Aboutpage = () => {
  return (
   <>
   <AboutHero/>
   <OurStory/>
   <AboutMission/>
   <AboutProducts/>
   <AboutReviews/>
   <AboutOrders/>
   
   </>
  )
}

export default Aboutpage
