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
    <section className="relative bg-white py-12  sm:py-16 md:py-20 overflow-hidden">

      <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 h-12 sm:w-24 sm:h-24 bg-yellow-600 rounded-full opacity-80 animate-bounce"></div>
      <div className="absolute bottom-4 sm:bottom-10 right-6 sm:right-14 w-10 h-10 sm:w-20 sm:h-20 bg-black rounded-full rotate-12 opacity-80 animate-pulse"></div>
      <div className="absolute top-20 sm:top-40 right-1/2 translate-x-1/2 w-8 h-8 sm:w-16 sm:h-16 bg-yellow-700 rounded-lg animate-bounce"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">


        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-8 sm:mb-10 md:mb-12 drop-shadow-[2px_3px_0px_#000]">
          What Makes Us{" "}
          <span className="px-2 py-1 sm:px-4 sm:py-1 bg-yellow-600 text-white rounded-md shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] block sm:inline mt-2 sm:mt-0">
            Unstoppable
          </span>
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-yellow-600 border-2 border-black rounded-xl p-5 sm:p-6 md:p-7 text-left shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] rotate-[-2deg]
              hover:rotate-0 hover:shadow-[6px_6px_0px_#000] sm:hover:shadow-[8px_8px_0px_#000] hover:scale-[1.03] transition-all cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 text-black drop-shadow-[2px_2px_0px_#fff]">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-black text-sm sm:text-base opacity-80 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>


        <div className="absolute top-0 sm:top-6 right-2 sm:right-6 rotate-12">
          <p className="bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-sm shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] text-xs sm:text-sm font-bold">
            WE’RE DIFFERENT 🔥
          </p>
        </div>

      </div>
    </section>
  );
};

export default Apart;
