import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import InteractiveBackground from './components/InteractiveBackground'

function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden relative">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-yellow-300/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* <InteractiveBackground /> */}
      
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <Home />
        </div>
        <div className='bg-gradient-to-b from-black via-gray-900 to-black min-h-screen relative'>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
