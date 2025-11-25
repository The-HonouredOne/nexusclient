import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Wand2, Camera, Megaphone } from "lucide-react";

const Service = () => {
  const services = [
    {
      title: "Influencer Marketing",
      icon: <Megaphone size={38} className="text-purple-600" />,
      text: "We make influencers talk about you so much, even their mom knows your brand 😎",
      color: "from-purple-100 to-white",
    },
    {
      title: "UGC Content Creation",
      icon: <Camera size={38} className="text-pink-500" />,
      text: "Real people + real vibes = real sales. No boring corporate ads allowed ✋😂",
      color: "from-pink-100 to-white",
    },
    {
      title: "Talent Management",
      icon: <Wand2 size={38} className="text-yellow-600" />,
      text: "We handle creators so you don’t have to chase them for deadlines (we got you) 👀✨",
      color: "from-yellow-100 to-white",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* funky floating background shapes */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-20 left-10 w-40 h-40 bg-yellow-200 rounded-full blur-2xl opacity-40"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-20 right-20 w-52 h-52 bg-purple-200 rounded-full blur-2xl opacity-40"
      />

      {/* Heading */}
      <div className="flex flex-col items-center gap-3 mb-16 relative z-10">
        <Sparkles className="text-yellow-600 animate-bounce" size={40} />
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight funkyText">
          Our Super Powers ⚡
        </h2>
        <p className="text-gray-500 text-lg italic">
          (Yes, we’re basically the Avengers… but for marketing)
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto relative z-10">
        {services.map((s, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 bg-gradient-to-br ${s.color} hover:-rotate-2 hover:scale-[1.05]`}
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {s.title} 🚀
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
