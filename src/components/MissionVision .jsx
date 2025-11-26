import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">

      <div className="absolute -top-5 sm:-top-10 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-600 rounded-full opacity-80 blur-sm animate-pulse"></div>
      <div className="absolute top-20 sm:top-40 right-0 w-12 h-12 sm:w-24 sm:h-24 bg-black rounded-full opacity-70 blur-[2px] animate-bounce"></div>


      <div className="absolute top-4 sm:top-10 left-1/2 -translate-x-1/2 rotate-6 z-20">
        <p className="bg-black text-white px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] rounded-sm">
          CORE VALUES 🔥
        </p>
      </div>

      <h2 className="relative text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-12 sm:mb-16 md:mb-20 drop-shadow-[2px_3px_0px_#000] px-4">
        OUR
        <span className="mx-2 sm:mx-3 px-2 py-1 sm:px-4 sm:py-1 bg-yellow-600 text-white rounded-md shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] block sm:inline mt-2 sm:mt-0">
          MISSION
        </span>
        & VISION
      </h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">


        <div className="relative group">

          <div className="absolute -inset-2 sm:-inset-3 bg-black rotate-3 rounded-xl opacity-90"></div>

          <div className="relative bg-yellow-600 border-2 border-black p-6 sm:p-8 md:p-10 rounded-xl shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] transform rotate-[-2deg] group-hover:rotate-0 transition-all">

            <div className="text-3xl sm:text-4xl md:text-5xl text-black mb-3 sm:mb-4 drop-shadow-[2px_2px_0px_#fff]">
              <FaBullseye />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-2 sm:mb-3">
              Our Mission
            </h3>


            <div className="h-1.5 sm:h-2 w-16 sm:w-24 bg-black mb-3 sm:mb-4 rounded-full"></div>

            <p className="font-medium text-black opacity-80 leading-relaxed text-sm sm:text-base">
              To build unforgettable digital experiences that help brands
              dominate attention, spark conversations, and create true impact.
            </p>
          </div>
        </div>


        <div className="relative group">

          <div className="absolute -inset-2 sm:-inset-3 bg-black -rotate-3 rounded-xl opacity-90"></div>

          <div className="relative bg-yellow-600 border-2 border-black p-6 sm:p-8 md:p-10 rounded-xl shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] transform rotate-2 group-hover:rotate-0 transition-all">

            <div className="text-3xl sm:text-4xl md:text-5xl text-black mb-3 sm:mb-4 drop-shadow-[2px_2px_0px_#fff]">
              <FaEye />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-2 sm:mb-3">
              Our Vision
            </h3>


            <div className="h-1.5 sm:h-2 w-16 sm:w-24 bg-black mb-3 sm:mb-4 rounded-full"></div>

            <p className="font-medium text-black opacity-80 leading-relaxed text-sm sm:text-base">
              To become the world’s loudest, boldest and most creative agency,
              where ideas turn into movements and brands turn into cults.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
