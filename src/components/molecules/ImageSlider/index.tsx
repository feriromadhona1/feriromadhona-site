// components/molecules/ImageSlider.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageSliderButton from '@/components/atoms/ImageSliderButton/index'

const sliderImages = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg']

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="pt-8">
      <h3 className="text-xl font-semibold text-sky-600 mb-4 text-center">Gallery</h3>
      <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md">
        <Image
          src={`${basePath}/assets/images/about-slider/${sliderImages[currentIndex]}`}
          alt={`Slide ${currentIndex + 1}`}
          width={800}
          height={400}
          className="w-full h-[240px] object-cover transition-all duration-500"
        />
        <ImageSliderButton direction="prev" onClick={handlePrev} />
        <ImageSliderButton direction="next" onClick={handleNext} />
      </div>
    </div>
  )
}
