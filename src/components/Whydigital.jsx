import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Crown, Rocket, Wand2 } from "lucide-react";

const reasons = [
  {
    icon: <Zap size={32} className="text-yellow-500" />,
    title: "We Create Scroll-Stopping Stuff",
    desc: "Your audience’s thumb? Yeah, we freeze it mid-scroll with bold, Gen-Z approved content.",
  },
  {
    icon: <Crown size={32} className="text-purple-500" />,
    title: "We Make Brands Iconic",
    desc: "Not just visible. ICONIC. The type of brand people tattoo on their brains.",
  },
  {
    icon: <Rocket size={32} className="text-blue-500" />,
    title: "We Don’t ‘Market’ — We Dominate",
    desc: "Influencers, UGC, scripts, trends — we use everything except black magic. (Sometimes that too.)",
  },
  {
    icon: <Wand2 size={32} className="text-pink-500" />,
    title: "Creativity That Hits Different",
    desc: "No Canva vibes. No template energy. Pure handcrafted, high-effort storytelling.",
  },
];

export default function Whydigital() {
  return (
    <section className="relative py-24 px-6 bg-[#faf7f2] overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-200 blur-[180px] opacity-40 rounded-full -top-40 left-0"></div>
      <div className="absolute w-[350px] h-[350px] bg-yellow-200 blur-[150px] opacity-40 rounded-full bottom-0 right-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 rounded-full text-sm">
            <Sparkles size={16} />
            why you can’t ignore us
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Because We Turn Brands Into  
            <span className="bg-gradient-to-r from-yellow-600 via-purple-600 to-pink-500 bg-clip-text text-transparent ml-2">
              Unforgettable Experiences.
            </span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            We don’t just “do marketing.” We build hype, loyalty, and impact your competitors can’t sleep through.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
