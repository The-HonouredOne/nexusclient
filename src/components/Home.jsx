import React from 'react'
import Hero from './Hero'
import UnderHero from './UnderHero'
import HowItWorks from './HowItWorks'
import Features from './Features'
import Stats from './Stats'
import Testimonials from './Testimonials'
import CTA from './CTA'
import Footer from './Footer'
import Service from './Service'
import Hero2 from './Hero2'
import HeroCrazy from './HeroCrazy'
import HeroLuxuryFunky from './HeroCrazy'
import HeroGen from './HeroCrazy'
import Whydigital from './Whydigital'
import Industries from './Industries'
import Apart from './Apart'
import MissionVision from './MissionVision '
import Portfolio from './Portfolio'

const Home = () => {
  return (
    <div>
      <Hero2/>
      <Hero/>
      {/* <UnderHero/> */}
      {/* <HowItWorks/> */}
      <Features/>
      <Service/>
      <Industries/>
      <Whydigital/>
      <Apart/>


      <Stats/>
      <MissionVision/>
      <Portfolio/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Home
