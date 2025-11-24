import React from 'react'
import Hero from './Hero'
import UnderHero from './UnderHero'
import HowItWorks from './HowItWorks'
import Features from './Features'
import Stats from './Stats'
import Testimonials from './Testimonials'
import CTA from './CTA'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <UnderHero/>
      {/* <HowItWorks/>
      <Features/>
      <Stats/>
      <Testimonials/>
      <CTA/> */}
      <Footer/>
    </div>
  )
}

export default Home
