'use client'

import React, { useEffect, useState } from 'react'

const sliders = [
    {
        name: 'banner 1',
        img: '/assets/Banner1.png',
    },
    {
        name: 'banner 2',
        img: '/assets/Banner2.png',
    },
    {
        name: 'banner 3',
        img: '/assets/Banner3.png',
    },
    {
        name: 'banner 4',
        img: '/assets/Banner4.png',
    },
    {
        name: 'banner 5',
        img: '/assets/Banner5.png',
    },
]

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % sliders.length); 
        }, 3000); 
      }, []);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 150}px)`, 
          }}
        >
          {sliders.map((slider, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2"
            >
              <img src={slider.img} alt={slider.name} className="h-full w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
