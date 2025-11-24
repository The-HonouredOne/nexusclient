import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRocket, FaStar } from 'react-icons/fa'
import logo from '../assets/logo2.png'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-yellow-300/5 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with enhanced logo */}
        <div className="text-center mb-12">
          <div className="relative inline-block group">
            <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-4 hover:scale-110 transition-all duration-300 hover-lift" />
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gradient-animate">Nexus Influence</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Connecting influencers with brands for authentic partnerships that drive real results.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="glass rounded-lg p-6 hover-lift">
            <div className="flex items-center mb-4">
              <FaRocket className="text-yellow-400 mr-2" />
              <h4 className="text-lg font-semibold">Company</h4>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                About Us
              </a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Careers
              </a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Contact
              </a></li>
            </ul>
          </div>
          
          {/* For Influencers */}
          <div className="glass rounded-lg p-6 hover-lift">
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-400 mr-2" />
              <h4 className="text-lg font-semibold">For Influencers</h4>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Join Platform
              </a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Find Campaigns
              </a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Analytics
              </a></li>
            </ul>
          </div>
          
          {/* For Brands */}
          <div className="glass rounded-lg p-6 hover-lift">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">For Brands</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Partner with Us
              </a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Find Influencers
              </a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Campaign Management
              </a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="glass rounded-lg p-6 hover-lift">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Connect With Us</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex items-center justify-center p-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 transition-all duration-300 group">
                <FaFacebook className="text-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="flex items-center justify-center p-3 rounded-lg bg-sky-500/20 hover:bg-sky-500/40 transition-all duration-300 group">
                <FaTwitter className="text-2xl text-sky-400 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="flex items-center justify-center p-3 rounded-lg bg-pink-600/20 hover:bg-pink-600/40 transition-all duration-300 group">
                <FaInstagram className="text-2xl text-pink-400 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="flex items-center justify-center p-3 rounded-lg bg-blue-700/20 hover:bg-blue-700/40 transition-all duration-300 group">
                <FaLinkedin className="text-2xl text-blue-300 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Nexus Influence. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer