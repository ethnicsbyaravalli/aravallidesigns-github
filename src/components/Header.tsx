"use client"

import { useState, useEffect } from "react"
import StaggeredMenu from "./StaggeredMenu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Catalog', ariaLabel: 'View our catalog', link: '/catalog' },
    { label: 'Philosophy', ariaLabel: 'Our brand philosophy', link: '/philosophy' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  return (
    <>
      {/* Header with Staggered Menu */}
      <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`} style={{ overflow: 'visible' }}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          displaySocials={false}
          displayItemNumbering={true}
          menuButtonColor="#000"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={false}
          colors={['#f8f9fa', '#ffffff']}
          logoUrl="/ARAVALLI png.png"
          accentColor="#ef4444"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </header>
    </>
  )
}
