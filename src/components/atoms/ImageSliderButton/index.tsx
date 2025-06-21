// components/atoms/ImageSliderButton.tsx
import { ButtonHTMLAttributes } from 'react'

type ImageSliderButtonProps = {
  direction: 'prev' | 'next'
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function ImageSliderButton({
  direction,
  ...props
}: ImageSliderButtonProps) {
  return (
    <button
      {...props}
      className={`absolute top-1/2 ${
        direction === 'prev' ? 'left-4' : 'right-4'
      } -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition`}
      aria-label={direction === 'prev' ? 'Previous Slide' : 'Next Slide'}
    >
      {direction === 'prev' ? '‹' : '›'}
    </button>
  )
}
