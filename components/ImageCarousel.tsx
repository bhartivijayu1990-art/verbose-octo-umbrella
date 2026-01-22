"use client";

import { useState, useEffect } from "react";

const images = [
        "/images/spa1.jpg",
        "/images/spa2.jpg",
        "/images/spa3.jpg",
        "/images/spa4.jpg"
      ];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">

      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          alt="Spa"
        />
      ))}

    </div>
  );
}
