"use client";

import { useState, useEffect } from "react";

export default function SlideshowHeader() {
  const images = [
    "/volleyball.jpeg",
    "/VolleyServe.JPG"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images.length]);

  const headerHeight = Math.max(100 - (scrollPosition / 5), 30); // Minimum 40vh height

  // ...existing code...
  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full flex items-center justify-center text-white text-center overflow-hidden transition-all duration-600 z-30"
        style={{ 
          height: `${headerHeight}vh`,
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        {/* Header Content */}
        <h1 
          className="relative z-10 text-4xl font-bold transform transition-all duration-300"
          style={{
            opacity: Math.max(1 - scrollPosition / 300, 0),
            transform: `scale(${Math.max(1 - scrollPosition / 1000, 0.8)})`,
          }}
        >
          Wilkommen zu meinem Portfolio
        </h1>
      </header>
      <div style={{ height: '100vh' }} className="bg-transparent"></div>
    </>
  );
}