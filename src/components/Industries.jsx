import React from "react";

const Industries = () => {
  const industries = [
    "E-commerce",
    "Fashion",
    "Tech Startups",
    "Beauty & Skincare",
    "Food & Beverages",
    "Real Estate",
    "Fitness & Wellness",
    "Education",
    "Automobile",
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">

      <div className="absolute -top-10 left-10 w-24 h-24 bg-yellow-600 rounded-full opacity-80 animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-black rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-700 rotate-12 rounded-lg animate-bounce"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-black drop-shadow-[2px_2px_0px_#000] mb-12">
          Funky Industries We Rock 🤘🔥
        </h1>

        {/* Funky Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <div
              key={i}
              className="bg-yellow-600 text-black font-bold text-lg py-6 rounded-xl 
              shadow-[6px_6px_0px_#000] border-2 border-black rotate-[-2deg]
              hover:rotate-0 hover:scale-105 hover:shadow-[8px_8px_0px_#000]
              transition-all cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="absolute top-6 right-6 rotate-12">
          {/* <p className="bg-black text-white px-4 py-2 rounded-sm shadow-[4px_4px_0px_#000] text-sm font-bold">
            TRENDING 🚀
          </p> */}
        </div>

        <div className="mt-20 flex flex-col items-center gap-3">
          <p className="text-black text-lg font-semibold tracking-wide">
            Not seeing your industry too? 👀
          </p>

          <button className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
            Let’s Build Something Crazy 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default Industries;
