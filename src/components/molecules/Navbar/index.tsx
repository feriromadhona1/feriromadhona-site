'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

type NavbarProps = {
  activeSection: string
}

const sections = ['home', 'about', 'experience', 'portfolio', 'testimonials', 'contact']

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [showBurger, setShowBurger] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(true)

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-hide menu after 5s when mobile menu is shown
  useEffect(() => {
    if (!showMobileMenu) return;

    const timer = setTimeout(() => {
      setShowBurger(true);
      setShowMobileMenu(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showMobileMenu]); // 🔁 trigger ulang setiap kali menu ditampilkan


  // Auto-hide menu after 5s on mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBurger(true)
      setShowMobileMenu(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Toggle menu on burger hover or click
  const handleBurgerToggle = () => {
    setShowMobileMenu(true)
    setShowBurger(false)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 px-6 py-3 justify-center gap-8 text-sm font-medium transition-all duration-300
        ${scrolled
          ? 'bg-white shadow-md dark:bg-gray-900'
          : 'bg-gradient-to-b from-[#e0f2fe]/90 via-[#bae6fd]/80 to-white/70 backdrop-blur-md dark:from-gray-800 dark:to-gray-700/40'
        }`}
      >
        {sections.map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`hover:underline transition-colors capitalize ${
              activeSection === id
                ? 'text-sky-600 font-semibold'
                : 'text-gray-600 dark:text-gray-200'
            }`}
          >
            {id}
          </Link>
        ))}
      </nav>

      {/* Mobile Burger Button */}
      {showBurger && (
        <button
          onClick={handleBurgerToggle}
          className="md:hidden fixed top-4 left-6 z-50 bg-white/80 dark:bg-gray-800/80 p-2 rounded-lg shadow-md backdrop-blur-md"
          aria-label="Open menu"
        >
          <Menu size={22} className="text-gray-800 dark:text-white" />
        </button>
      )}

      {/* Mobile Floating Menu */}
      {showMobileMenu && (
        <nav
          className="md:hidden fixed top-24 left-2 w-25 p-3 gap-2 flex flex-col rounded-xl backdrop-blur-md bg-white/60 shadow-md dark:bg-gray-800/60 z-40 transition-all"
        >
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`capitalize px-3 py-2 rounded transition-colors font-medium ${
                activeSection === id
                  ? 'text-sky-600 font-semibold'
                  : 'text-gray-700 dark:text-gray-200 hover:text-sky-500'
              }`}
            >
              {id}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
