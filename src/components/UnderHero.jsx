import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/backgroundvideo.mp4";
import { FaArrowDownLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function UnderHero() {
    const videoRef = useRef(null);
    const textSectionRef = useRef(null);

    useEffect(() => {
        const vid = videoRef.current;

        vid.pause();
        vid.currentTime = 0;

        gsap.to(vid, {
            scrollTrigger: {
                trigger: vid,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                onUpdate: (self) => {
                    if (!isNaN(vid.duration)) {
                        vid.currentTime = vid.duration * self.progress;
                    }
                },
            },
        });

        const elements = Array.from(
            textSectionRef.current.querySelectorAll(".fade-item")
        );

        gsap.fromTo(
            elements,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    start: "top 90%",
                    end: "top 40%",
                    scrub: true,
                    markers: false
                }
            }
        );

    }, []);

    return (
        <>
            <div className="relative w-full mx-auto my-20 container h-96 rounded-xl shadow-lg overflow-hidden">
                <video
                    ref={videoRef}
                    src={video}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                ></video>

                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/40 to-black/80 flex flex-col items-center justify-center text-center px-6 relative">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                    
                    <h2 className="text-4xl font-bold text-gradient-animate relative z-10 hover:scale-105 transition-transform duration-300">
                        Best Influencer Marketing Platform Because Of
                    </h2>
                </div>
            </div>


            <div
                ref={textSectionRef}
                className="items-center text-center justify-center mb-50 flex flex-col relative"
            >
                {/* Floating decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-3/4 left-3/4 w-20 h-20 bg-yellow-300/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
                </div>

                {/* Enhanced arrow with glow */}
                <div className="relative fade-item">
                    <FaArrowDownLong size={40} className="text-black hover:text-yellow-600 transition-colors duration-300 animate-bounce" />
                    <div className="absolute inset-0 bg-yellow-400/20 blur-lg animate-pulse" />
                </div>
                
                {/* Enhanced Action text with multiple effects */}
                <div className="relative mt-2 fade-item group">
                    <p className="font-medium text-6xl md:text-9xl text-gradient-animate hover:scale-105 transition-transform duration-500 cursor-default">
                        Action
                    </p>
                    {/* Morphing background shape */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 blur-3xl animate-morphing -z-10" />
                </div>
                
                {/* Enhanced arrow with different animation */}
                <div className="relative mt-10 fade-item">
                    <FaArrowDownLong size={40} className="text-black hover:text-yellow-600 transition-colors duration-300 animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute inset-0 bg-yellow-400/20 blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                
                {/* Enhanced Analytics text */}
                <div className="relative mt-2 fade-item group">
                    <p className="font-medium text-6xl md:text-9xl text-gradient-animate hover:scale-105 transition-transform duration-500 cursor-default">
                        Analytics
                    </p>
                    {/* Different morphing background shape */}
                    <div className="absolute inset-0 bg-gradient-to-l from-purple-400/10 to-yellow-500/10 blur-3xl animate-morphing -z-10" style={{ animationDelay: '2s' }} />
                </div>

                {/* Additional creative elements */}
                <div className="mt-16 fade-item">
                    <div className="flex justify-center space-x-8">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-sparkle" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }} />
                        <div className="w-3 h-3 bg-yellow-600 rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
                    </div>
                </div>
            </div>
        </>
    );
}
