import React from "react";
import { FaFire, FaBullhorn, FaRocket, FaStar } from "react-icons/fa";

const Apart = () => {
  const features = [
    {
      icon: <FaFire />,
      title: "Strategy That Slaps",
      desc: "We don’t guess. We build explosive digital strategies backed by real data & creativity.",
    },
    {
      icon: <FaBullhorn />,
      title: "Influencers That Convert",
      desc: "No random influencers — only the ones who fit, connect, and actually convert.",
    },
    {
      icon: <FaRocket />,
      title: "Campaigns That Go Viral",
      desc: "We create scroll-stopping campaigns that people share without being asked.",
    },
    {
      icon: <FaStar />,
      title: "Content That Pops",
      desc: "Every piece of content is crafted to stand out, not blend in.",
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">

      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-600 rounded-full opacity-80 animate-bounce"></div>
      <div className="absolute bottom-10 right-14 w-20 h-20 bg-black rounded-full rotate-12 opacity-80 animate-pulse"></div>
      <div className="absolute top-40 right-1/2 translate-x-1/2 w-16 h-16 bg-yellow-700 rounded-lg animate-bounce"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">


        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-12 drop-shadow-[2px_3px_0px_#000]">
          What Makes Us{" "}
          <span className="px-4 py-1 bg-yellow-600 text-white rounded-md shadow-[6px_6px_0px_#000]">
            Unstoppable
          </span>
        </h1>


        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-yellow-600 border-2 border-black rounded-xl p-7 text-left shadow-[6px_6px_0px_#000] rotate-[-2deg]
              hover:rotate-0 hover:shadow-[8px_8px_0px_#000] hover:scale-[1.03] transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3 text-black drop-shadow-[2px_2px_0px_#fff]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-black text-md opacity-80 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>


        <div className="absolute top-6 right-6 rotate-12">
          <p className="bg-black text-white px-4 py-2 rounded-sm shadow-[4px_4px_0px_#000] text-sm font-bold">
            WE’RE DIFFERENT 🔥
          </p>
        </div>

      </div>
    </section>
  );
};

export default Apart;
