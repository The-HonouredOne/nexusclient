import React, { useState, useEffect } from 'react'
import logo2 from '../assets/logo2.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass backdrop-blur-md py-2' : 'bg-gray-200 py-5'
    }`}>
      <div className='flex container mx-auto justify-between items-center px-6'>
        
      
        <div className="relative group">
          <img 
            src={logo2} 
            alt="Nexus Influence" 
            className='w-20 hover:scale-110 transition-all duration-300 hover-lift cursor-pointer'
          />
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

      
        <div className="relative">
          <button className='relative px-6 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold
            hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 overflow-hidden group
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-500
            before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300'>
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-yellow-400/30 blur-md group-hover:blur-lg transition-all duration-300" />
          </button>
        </div>

    
        {/* <button className="md:hidden text-white hover:text-yellow-400 transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar
