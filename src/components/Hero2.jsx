import React from "react";
import bgimage from "react";
import { motion } from "framer-motion";
import { Camera, Megaphone, Sparkles } from "lucide-react";

export default function HeroFunky() {
  return (
    <section className="relative w-full py-30 overflow-hidden bg-[#fefcfb] flex items-center"
    style={{backgroundImage:`url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >

      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-10 left-10 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-70"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-16 right-10 w-56 h-56 bg-yellow-200 rounded-full blur-3xl opacity-60"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* FUNNY BADGE */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-yellow-300 px-4 py-2 rounded-full shadow-md mb-6"
        >
          <Sparkles className="text-purple-700" />
          <span className="font-semibold text-gray-800">
            Official Chaos Creators
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
        >
          We Make Brands  
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-900">
            Impossible To Ignore 
          </span><span>😎✨</span>
        </motion.h1>

        {/* Funny Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-gray-600 font-light italic max-w-2xl"
        >
          Script videos, influencer chaos, UGC magic, memes…  
          Basically, we make your brand famous without you selling your soul.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-4 mt-10"
        >
          <button className="px-8 py-3 bg-yellow-700 text-white rounded-full shadow-xl hover:scale-105 transition-all">
            Make My Brand Cool 😤🔥
          </button>

          <button className="px-8 py-3 rounded-full border border-gray-500 flex items-center gap-2 hover:bg-black transition">
            <Camera size={18} /> See Our Crimes
          </button>
        </motion.div>

        {/* Floating Emojis & Icons */}
        <div className="relative mt-16">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute left-10 text-5xl"
          >
            {/* 😂 */}
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute right-10 text-5xl"
          >
            🚀
          </motion.div>

          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute left-1/2 top-10 -translate-x-1/2 p-4 bg-white shadow-xl rounded-xl"
          >
            <Megaphone className="text-yellow-600" size={30} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
