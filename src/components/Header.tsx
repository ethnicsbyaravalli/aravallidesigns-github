"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-md transition-all duration-300 hover:scale-110"
            >
              <Menu className="h-6 w-6 text-black transition-transform duration-300" />
            </button>

            {/* Centered Logo */}
            <div className="flex-1 flex justify-center">
              <Link href="/">
                <img 
                  src="/ARAVALLI png.png" 
                  alt="Aravalli Designs" 
                  className="h-16 w-auto hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                />
              </Link>
            </div>

            {/* Inquire Button */}
            <Link href="/contact" className="text-sm font-light tracking-wider text-black border-b border-black pb-1 hover:opacity-60 transition-opacity">
              INQUIRE
            </Link>
          </div>
        </div>
      </header>

      {/* Left Side Navigation Sheet */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sheet */}
          <div className="fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-all duration-500 ease-out animate-fade-in-left">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-md transition-all duration-300 hover:scale-110"
                >
                  <X className="h-6 w-6 text-black transition-transform duration-300" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="space-y-6">
                <a 
                  href="/#about" 
                  className="block text-lg font-light tracking-wider text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </a>
                <a 
                  href="/#products" 
                  className="block text-lg font-light tracking-wider text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PRODUCTS
                </a>
                <a 
                  href="/#philosophy" 
                  className="block text-lg font-light tracking-wider text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PHILOSOPHY
                </a>
                <Link 
                  href="/contact" 
                  className="block text-lg font-light tracking-wider text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
