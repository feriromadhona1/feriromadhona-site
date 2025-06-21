'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type NavbarProps = {
  activeSection: string
}

const sections = ['home', 'about', 'experience', 'portfolio', 'testimonials', 'contact']

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 py-3 flex justify-center gap-8 text-sm font-medium transition-all duration-300
        ${
        scrolled
            ? 'bg-white shadow-md'
            : 'bg-gradient-to-b from-[#e0f2fe]/90 via-[#bae6fd]/80 to-white/70 backdrop-blur-md dark:from-gray-800 dark:to-gray-700/40'
        }`}
    >
      {sections.map((id) => (
        <Link
          key={id}
          href={`#${id}`}
          className={`hover:underline transition-colors ${
            activeSection === id
              ? 'text-sky-600 font-semibold'
              : 'text-gray-600 dark:text-gray-200'
          }`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </Link>
      ))}
    </nav>
  )
}
