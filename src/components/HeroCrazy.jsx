import React from "react";
import { motion } from "framer-motion";
import { Wand2, Sparkles, Flame } from "lucide-react";

export default function HeroGen() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#fefcf7] px-6">

      {/* --- Funky Background Blobs --- */}
      <div className="absolute w-[600px] h-[600px] bg-purple-300 opacity-30 blur-[180px] rounded-full -top-32 -left-32"></div>
      <div className="absolute w-[500px] h-[500px] bg-yellow-300 opacity-40 blur-[160px] rounded-full bottom-0 right-0"></div>

      {/* Floating Stickers */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
        alt="hand"
        className="w-28 absolute top-28 left-10 rotate-12"
        animate={{ y: [0, -20, 0], rotate: [12, 18, 12] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/1047/1047736.png"
        alt="hand 2"
        className="w-24 absolute bottom-24 right-16 -rotate-12"
        animate={{ y: [0, 15, 0], rotate: [-12, -18, -12] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Floating Emoji Stickers */}
      <motion.div
        className="text-6xl absolute top-10 right-20"
        animate={{ rotate: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        🤳
      </motion.div>

      <motion.div
        className="text-6xl absolute bottom-10 left-20"
        animate={{ rotate: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        🎥
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-black text-white text-sm rounded-full shadow-lg"
        >
          <Sparkles size={16} />
          <span>GEN-Z APPROVED MARKETING</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 tracking-tight"
        >
          We Turn Brands Into  
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent ">
            CULTS.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-xl text-gray-700 max-w-xl mx-auto"
        >
          Scripted videos, influencer domination, meme-engineering, UGC wizardry —
          <span className="font-semibold"> we run the marketing mafia so your brand doesn’t have to.</span>
        </motion.p>

        {/* Funky Buttons */}
        <motion.div
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="px-8 py-3 bg-black text-white rounded-xl text-lg font-semibold shadow-2xl hover:scale-105 transition">
            Hire the Mafia
          </button>

          <button className="px-8 py-3 border-2 border-black rounded-xl text-lg font-semibold hover:bg-black hover:text-white transition">
            See Our Crimes
          </button>
        </motion.div>
      </div>

      {/* Neon Line Decoration */}
      <motion.div
        className="absolute w-96 h-1 bg-gradient-to-r from-purple-500 to-yellow-500 bottom-32 left-1/2 -translate-x-1/2 rounded-full"
        animate={{ width: ["20%", "80%", "20%"] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
    </section>
  );
}
