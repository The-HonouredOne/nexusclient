import React, { useState, useEffect } from "react";
import influencerimage1 from "../assets/influencerimage1.jpg";
import influencerimage2 from "../assets/influencerimage2.jpg";
import influencerimage3 from "../assets/peopleimage3.jpg";
import influencerimage4 from "../assets/influencerimage4.jpg";
import logo from "../assets/logo2.png";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 1 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5, 
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-yellow-400/20 animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s alternate`,
          }}
        />
      ))}
    </div>
  );
}; 

const slides = [
  // {
  //   img: influencerimage1,
  //   title: "INFLUENCE REDEFINED",
  //   subtitle: "Empowering creators with next-level digital presence.",
  // },
  {
    img: influencerimage2,
    title: "CONNECT • COLLABORATE • CREATE",
    subtitle: "Where influencers meet endless opportunities.",
  },
  // {
  //   img: influencerimage3,
  //   title: "AMPLIFY YOUR IMPACT",
  //   subtitle: "Turn your influence into a powerful brand.",
  // },
  // {
  //   img: influencerimage4,
  //   title: "RISE ABOVE THE CROWD",
  //   subtitle: "Stand out with strategy, creativity & innovation.",
  // },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden bg-black container mx-auto mt-5 rounded-2xl h-[70vh] group">
      <FloatingParticles />
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-yellow-400/20 p-[2px]">
        <div className="w-full h-full rounded-2xl bg-black overflow-hidden">
          
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1500 
              ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              
              {/* Enhanced gradient overlay with animated mesh */}
              <div className="w-full h-full flex items-center justify-center text-center px-6 relative">
                
                {/* Animated mesh background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 animate-pulse" />
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                </div>

                <div className="max-w-3xl animate-fadeInUp relative z-10">
                  
                  {/* <div className="relative mb-6">
                    <img src={logo} alt="logo"
                      className="w-32 md:w-40 mx-auto drop-shadow-[0_0_40px_rgba(255,215,0,0.8)] hover:drop-shadow-[0_0_60px_rgba(255,215,0,1)] transition-all duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                  </div> */}


                  <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                    bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 drop-shadow-2xl
                    hover:from-yellow-200 hover:via-yellow-400 hover:to-yellow-200 ">
                    {slide.title}
                  </h1>

                  {/* Enhanced subtitle with typewriter effect */}
                  <p className="text-gray-200 text-lg md:text-xl mt-4 tracking-wide opacity-90
                    hover:text-yellow-200 transition-colors duration-300">
                    {slide.subtitle}
                  </p>

                  {/* Enhanced CTA button with multiple effects */}
                  <div className="mt-8 relative inline-block">
                    <button className="relative px-8 py-3 rounded-full bg-gradient-to-r 
                    from-yellow-400 to-yellow-600 text-black font-semibold text-lg shadow-xl
                    hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/50
                    transition-all duration-300 overflow-hidden group/btn
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-300 before:to-yellow-500
                    before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                      <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">
                        Get Started
                      </span>
                      <div className="absolute inset-0 bg-yellow-400/20 blur-xl group-hover/btn:blur-2xl transition-all duration-300" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* Enhanced navigation dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 rounded-full cursor-pointer transition-all duration-500 hover:scale-125 ${
                  current === i 
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 w-8 shadow-lg shadow-yellow-400/50" 
                    : "bg-white/40 w-3 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
