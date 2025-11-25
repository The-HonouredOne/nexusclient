// Hero.jsx
import React, { useEffect, useRef } from "react";
import { FaBolt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import digitalmarketing from "../assets/digitalmarketing.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  // CTA Button refs
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  // NEW image refs
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TITLE ANIMATION
      gsap.from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // BRAND BLOCK
      gsap.from(".brand-block", {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      // ICON FLOAT
      gsap.to(".bolt", {
        rotate: 10,
        yoyo: true,
        repeat: -1,
        duration: 0.5,
        ease: "power1.inOut",
      });

      // BG FLOAT
      gsap.to(".float-shape-bg", {
        y: -25,
        x: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // STICKERS
      gsap.from(".sticker", {
        opacity: 0,
        rotate: -30,
        duration: 1,
        stagger: 0.3,
        ease: "back.out(2)",
      });

      // CTA Buttons
      gsap.fromTo(
        [btn1Ref.current, btn2Ref.current],
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }
      );

      // ------------------------------------
      // ⭐ LEFT & RIGHT IMAGES SCROLL EFFECT
      // ------------------------------------
      gsap.to(leftImgRef.current, {
        x: 200, // move toward center
        y: 200, // move downward
        rotate: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(rightImgRef.current, {
        x: -200, // move toward center
        y: 200,
        rotate: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-white overflow-hidden pt-24 pb-20"
    >
      {/* Floating Background Circle */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-yellow-700 rounded-full float-shape-bg z-0"></div>

      {/* WOW Sticker */}
      <div className="absolute top-16 right-16 rotate-12 sticker z-10">
        <div className="bg-yellow-700 px-4 py-2 text-white font-bold shadow-[4px_4px_0px_#000] rounded-sm text-sm">
          WOW!
        </div>
      </div>

      {/* YES Sticker */}
      <div className="absolute bottom-16 left-32 rotate-[-10deg] sticker z-10">
        <div className="bg-black px-5 py-2 text-white font-bold shadow-[4px_4px_0px_#000] rounded-sm text-sm">
          YES!
        </div>
      </div>

      {/* LEFT FUNKY IMAGE */}
      <img
        ref={leftImgRef}
        src="https://i0.wp.com/timoelliott.com/blog/wp-content/uploads/2015/03/marketing-has-a-branding-problem.jpg?ssl=1"
        alt="Influencer"
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-60 rotate-[-8deg] drop-shadow-[10px_10px_0px_#000] border-[4px] border-black rounded-xl sticker"
      />

      {/* RIGHT FUNKY IMAGE */}
      <img
        ref={rightImgRef}
        src="https://st2.depositphotos.com/1636517/6287/v/450/depositphotos_62874813-stock-illustration-change-agent.jpg"
        alt="Influencer"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-64 rotate-[10deg] drop-shadow-[10px_10px_0px_#000] border-[4px] border-black rounded-xl sticker"
      />

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-8 bg-yellow-700 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-[4px_4px_0px_#000]">
          ✨ DIGITAL MARKETING AGENCY
        </div>

        <h1 className="hero-title text-5xl md:text-7xl font-extrabold leading-tight text-black">
          WE MAKE
        </h1>

        <h1 className="hero-title relative text-5xl md:text-7xl font-extrabold leading-tight mt-3 inline-block">
          <span className="brand-block bg-yellow-700 text-white px-6 py-2 shadow-[8px_8px_0px_#000]">
            BRANDS GO
          </span>
        </h1>

        <h1 className="hero-title text-5xl md:text-7xl font-extrabold leading-tight flex justify-center items-center gap-4 mt-3 text-black">
          VIRAL
          <FaBolt className="bolt text-yellow-500 text-6xl drop-shadow-[3px_3px_0px_#000]" />
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-800 max-w-2xl mx-auto text-lg">
          Scripting that slaps. Influencers that pop. Results that break the
          internet.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-6 relative z-20">
          <button
            ref={btn1Ref}
            className="cta-btn px-8 py-4 bg-yellow-700 text-black font-bold text-lg rounded-full border-2 border-black shadow-[6px_6px_0px_#000] hover:translate-y-1 transition-all"
          >
            LET’S GET IT 🚀
          </button>

          <button
            ref={btn2Ref}
            className="cta-btn px-8 py-4 bg-black text-white font-bold text-lg rounded-full shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-all"
          >
            SEE OUR WORK ✨
          </button>
        </div>
      </div>
    </section>
  );
}
