import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const caseStudies = [
  {
    brand: "Urban Threads – Fashion",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    task: "Influencer Strategy + Creative Direction",
    result: "3.2M influencer reach • 4X engagement boost",
  },
  {
    brand: "TechNova – SaaS Startup",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    task: "Branding + Performance Marketing",
    result: "₹1.1 Cr generated from paid ads",
  },
  {
    brand: "FreshBite – FMCG",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    task: "UGC Creators + Social Media Revamp",
    result: "120% increase in online visibility",
  },
  {
    brand: "Aura Living – Lifestyle",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    task: "Ad Creatives + Influencer Collabs",
    result: "72% increase in conversions",
  },
];

export default function CaseStudiesYellow() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-20 relative overflow-hidden">

      {/* Floating Funky Shape */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-yellow-900 rounded-full shadow-[3px_3px_0px_#000] sm:shadow-[6px_6px_0px_#000] animate-bounce"></div>

      {/* Big Heading */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black font-black tracking-tight"
        >
          CASE
          <span className="bg-yellow-900 px-2 py-1 sm:px-3 sm:py-2 md:px-5 md:py-2 ml-2 sm:ml-4 shadow-[3px_3px_0px_#000] sm:shadow-[6px_6px_0px_#000] block sm:inline mt-2 sm:mt-0">
            STUDIES
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-5 px-4 sm:px-0"
        >
          Real brands. Real influencers. Real viral moments.  
          Here’s how we made brands blow up on social media.
        </motion.p>

        {/* Sticker */}
        <div className="absolute right-4 sm:right-16 top-0 rotate-12">
          <div className="bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-sm text-xs sm:text-sm font-bold shadow-[3px_3px_0px_#000] sm:shadow-[5px_5px_0px_#000]">
            🔥 HOT!
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-14">
        {caseStudies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="
              bg-yellow-600 border-2 border-black rounded-2xl
              shadow-[5px_5px_0px_#000] sm:shadow-[10px_10px_0px_#000]
              overflow-hidden cursor-pointer transition-all
            "
          >
            {/* Image */}
            <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
              <img
                src={item.image}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-black">{item.brand}</h3>

              <p className="mt-2 text-black font-medium text-sm sm:text-base">{item.task}</p>

              <p className="mt-3 text-gray-900 text-xs sm:text-sm">{item.result}</p>

              {/* Button */}
              <button className="mt-4 sm:mt-5 flex items-center gap-2 font-semibold border-2 border-black px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] text-black bg-white hover:translate-x-2 transition-all text-sm sm:text-base">
                View Case Study
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center mt-16 sm:mt-20 md:mt-24"
      >
        <p className="text-gray-700 text-base sm:text-lg font-semibold px-4 sm:px-0">
          Want your brand to be our next success story? 😎
        </p>

        <button className="mt-4 sm:mt-5 px-6 py-3 sm:px-10 sm:py-4 bg-black text-white rounded-full shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] hover:translate-y-1 transition-all font-bold text-base sm:text-lg">
          Let’s Go Viral 🚀
        </button>
      </motion.div>
    </section>
  );
}
