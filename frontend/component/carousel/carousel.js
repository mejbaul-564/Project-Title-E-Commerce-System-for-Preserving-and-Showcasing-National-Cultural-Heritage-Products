"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Carousel() {
  const images = [
    "/heroSection/homeHero_1.png",
    "/heroSection/homeHero_2.png",
    "/heroSection/homeHero_3.jpg", // ensure correct case-sensitive filename
    "/heroSection/homeHero_4.png",
    "/heroSection/homeHero_5.png",
    "/heroSection/homeHero_6.png",
    "/heroSection/homeHero_7.png",
    "/heroSection/homeHero_8.png",
    "/heroSection/homeHero_9.png",

  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);

  // 🔁 Auto Slide
  useEffect(() => {
    if (isHovered) return; // pause on hover

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  // Previous / Next Slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 📱 Swipe Support for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide(); // swipe left
    if (diff < -50) prevSlide(); // swipe right
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="relative min-w-full h-full">
              <Image
                src={img}
                alt={`slide-${index}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black z-10"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black z-10"
      >
        ❯
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}