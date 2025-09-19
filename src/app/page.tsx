"use client"

import React, { useState, useEffect, useRef } from "react"
import Header from "@/components/Header"
import Link from "next/link"

export default function Home() {
  const leftImageRef = useRef<HTMLImageElement>(null)
  const rightImageRef = useRef<HTMLImageElement>(null)
  const newLeftImageRef = useRef<HTMLImageElement>(null)
  const newRightImageRef = useRef<HTMLImageElement>(null)
  const thirdLeftImageRef = useRef<HTMLImageElement>(null)
  const thirdRightImageRef = useRef<HTMLImageElement>(null)
  const fourthLeftImageRef = useRef<HTMLImageElement>(null)
  const fourthRightImageRef = useRef<HTMLImageElement>(null)
  const fifthLeftImageRef = useRef<HTMLImageElement>(null)
  const fifthRightImageRef = useRef<HTMLImageElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      const maxScroll = windowHeight * 7 // 7x screen height for scroll space
      const progress = Math.min(scrollTop / maxScroll, 1)
      
      setScrollProgress(progress)
      
      // Calculate scale for images (1x to 2.5x) - reduced on mobile
      const scale = 1 + progress * (windowWidth < 640 ? 0.8 : 1.5)
      
      // Calculate horizontal movement (grow outwards) - reduced on mobile
      const moveDistance = windowWidth < 640 ? 100 : 200
      const leftMove = -progress * moveDistance // Move left image further left
      const rightMove = progress * moveDistance // Move right image further right
      
      // Show new images after 33% scroll progress
      const showNewImages = progress > 0.33
      const newImageProgress = Math.max(0, (progress - 0.33) * 1.5) // 0 to 1 after 33% scroll
      const newImageScale = 1 + newImageProgress * (windowWidth < 640 ? 0.8 : 1.5)
      const newLeftMove = -newImageProgress * moveDistance
      const newRightMove = newImageProgress * moveDistance
      
      // Show third set of images after 66% scroll progress
      const showThirdImages = progress > 0.66
      const thirdImageProgress = Math.max(0, (progress - 0.66) * 3) // 0 to 1 after 66% scroll
      const thirdImageScale = 1 + thirdImageProgress * (windowWidth < 640 ? 0.8 : 1.5)
      const thirdLeftMove = -thirdImageProgress * moveDistance
      const thirdRightMove = thirdImageProgress * moveDistance
      
      // Show fourth set of images after 80% scroll progress
      const showFourthImages = progress > 0.80
      const fourthImageProgress = Math.max(0, (progress - 0.80) * 5) // 0 to 1 after 80% scroll
      const fourthImageScale = 1 + fourthImageProgress * (windowWidth < 640 ? 0.8 : 1.5)
      const fourthLeftMove = -fourthImageProgress * moveDistance
      const fourthRightMove = fourthImageProgress * moveDistance
      
      // Show fifth set of images after 90% scroll progress
      const showFifthImages = progress > 0.90
      const fifthImageProgress = Math.max(0, (progress - 0.90) * 10) // 0 to 1 after 90% scroll
      const fifthImageScale = 1 + fifthImageProgress * (windowWidth < 640 ? 0.8 : 1.5)
      const fifthLeftMove = -fifthImageProgress * moveDistance
      const fifthRightMove = fifthImageProgress * moveDistance
      
      if (leftImageRef.current) {
        leftImageRef.current.style.transform = `translateX(${leftMove}px) scale(${scale})`
        leftImageRef.current.style.opacity = showNewImages ? '0' : '1'
      }
      if (rightImageRef.current) {
        rightImageRef.current.style.transform = `translateX(${rightMove}px) scale(${scale})`
        rightImageRef.current.style.opacity = showNewImages ? '0' : '1'
      }
      
      if (newLeftImageRef.current) {
        newLeftImageRef.current.style.transform = `translateX(${newLeftMove}px) scale(${newImageScale})`
        newLeftImageRef.current.style.opacity = showNewImages && !showThirdImages && !showFourthImages && !showFifthImages ? '1' : '0'
      }
      if (newRightImageRef.current) {
        newRightImageRef.current.style.transform = `translateX(${newRightMove}px) scale(${newImageScale})`
        newRightImageRef.current.style.opacity = showNewImages && !showThirdImages && !showFourthImages && !showFifthImages ? '1' : '0'
      }
      
      if (thirdLeftImageRef.current) {
        thirdLeftImageRef.current.style.transform = `translateX(${thirdLeftMove}px) scale(${thirdImageScale})`
        thirdLeftImageRef.current.style.opacity = showThirdImages && !showFourthImages && !showFifthImages ? '1' : '0'
      }
      if (thirdRightImageRef.current) {
        thirdRightImageRef.current.style.transform = `translateX(${thirdRightMove}px) scale(${thirdImageScale})`
        thirdRightImageRef.current.style.opacity = showThirdImages && !showFourthImages && !showFifthImages ? '1' : '0'
      }
      
      if (fourthLeftImageRef.current) {
        fourthLeftImageRef.current.style.transform = `translateX(${fourthLeftMove}px) scale(${fourthImageScale})`
        fourthLeftImageRef.current.style.opacity = showFourthImages && !showFifthImages ? '1' : '0'
      }
      if (fourthRightImageRef.current) {
        fourthRightImageRef.current.style.transform = `translateX(${fourthRightMove}px) scale(${fourthImageScale})`
        fourthRightImageRef.current.style.opacity = showFourthImages && !showFifthImages ? '1' : '0'
      }
      
      if (fifthLeftImageRef.current) {
        fifthLeftImageRef.current.style.transform = `translateX(${fifthLeftMove}px) scale(${fifthImageScale})`
        fifthLeftImageRef.current.style.opacity = showFifthImages ? '1' : '0'
      }
      if (fifthRightImageRef.current) {
        fifthRightImageRef.current.style.transform = `translateX(${fifthRightMove}px) scale(${fifthImageScale})`
        fifthRightImageRef.current.style.opacity = showFifthImages ? '1' : '0'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Header />
      
      {/* Hero Content - Fixed and Centered */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-300 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <p className="text-xs sm:text-sm font-light tracking-widest text-gray-700 mb-4 sm:mb-6 lg:mb-8 animate-fade-in-down">PREMIUM WOMEN'S CLOTHING MANUFACTURER</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 leading-tight sm:leading-none mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up animation-delay-200 font-serif-heading">
                THE LUXURY OF
                <span className="block italic text-red-600 animate-fade-in-up animation-delay-400">ARTISANAL CRAFTSMANSHIP</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg font-light text-gray-600 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600 px-2">
                Premium women's clothing manufacturer in Jaipur for brands, designers, and B2B clients. 
                Custom, bulk, and private label women's clothing direct from manufacturer.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Left Side Image */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={leftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/festive-wearkurta_dzlyzn.jpg" 
          alt="Festive Wear Kurta" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* Right Side Image */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={rightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/festive-wearkurta_set_g3hixx.jpg" 
          alt="Festive Wear Kurta Set" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* New Left Side Image - Appears after scroll */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={newLeftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearanarkali_qaxwt7.jpg" 
          alt="Festive Wear Anarkali" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* New Right Side Image - Appears after scroll */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={newRightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-weardress_uio8lg.jpg" 
          alt="Festive Wear Dress" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* Third Left Side Image - Appears after more scroll */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={thirdLeftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearsuit_sets_lzrwx6.jpg" 
          alt="Festive Wear Suit Sets" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Third Right Side Image - Appears after more scroll */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={thirdRightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearkaftans_uu1fik.jpg" 
          alt="Festive Wear Kaftans" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Fourth Left Side Image - Appears after even more scroll */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={fourthLeftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929301/Dresses_krxyu4.jpg" 
          alt="Festive Wear Dresses" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Fourth Right Side Image - Appears after even more scroll */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={fourthRightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929301/Kurta_sets_eut7hb.jpg" 
          alt="Festive Wear Kurta Sets" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Fifth Left Side Image - Appears after maximum scroll */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={fifthLeftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929303/Kurta_hq3pka.png" 
          alt="Festive Wear Kurta" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Fifth Right Side Image - Appears after maximum scroll */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={fifthRightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929302/Kaftans_uyhm7a.jpg" 
          alt="Festive Wear Kaftans" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Mobile Image Gallery - Only visible on mobile */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 sm:hidden">
        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          <img 
            src="https://res.cloudinary.com/dfye0gag9/image/upload/festive-wearkurta_dzlyzn.jpg" 
            alt="Festive Wear Kurta" 
            className="w-full h-24 object-cover rounded-lg opacity-50"
          />
          <img 
            src="https://res.cloudinary.com/dfye0gag9/image/upload/festive-wearkurta_set_g3hixx.jpg" 
            alt="Festive Wear Kurta Set" 
            className="w-full h-24 object-cover rounded-lg opacity-50"
          />
        </div>
      </div>

      {/* CTA Buttons - Fixed and Centered */}
      <div className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full px-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
          <Link href="/contact" className="text-xs sm:text-sm font-light tracking-wider text-gray-800 border-b border-gray-800 pb-1 hover:opacity-60 transition-all duration-300 hover:scale-105 text-center">
            INQUIRE FOR PRODUCTS
          </Link>
          <Link href="/contact" className="text-xs sm:text-sm font-light tracking-wider text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 text-center">
            VIEW CATALOG
          </Link>
        </div>
      </div>

      {/* Scrollable Content for Parallax Effect */}
      <section className="h-screen bg-white"></section>
      <section className="h-screen bg-white"></section>
      <section className="h-screen bg-white"></section>
      <section className="h-screen bg-white"></section>
      <section className="h-screen bg-white"></section>
      <section className="h-screen bg-white"></section>
      <section className="h-screen bg-white"></section>
    </div>
  )
}