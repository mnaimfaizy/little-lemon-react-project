import React from 'react'
import HeroSection from './components/HeroSection'
import Testimonial from './components/Testimonial'
import AboutUs from './components/AboutUs'
import Specials from './components/Specials'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <Specials />
        <Testimonial />
        <AboutUs />
    </>
  )
}

export default HomePage