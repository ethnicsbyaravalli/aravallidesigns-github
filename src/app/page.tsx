"use client"

import React, { useState, useEffect, useRef } from "react"
import Header from "@/components/Header"
import Link from "next/link"
import CircularGallery from "@/components/CircularGallery"

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
  const [, setScrollProgress] = useState(0)

  useEffect(() => {
    let rafId: number
    let targetProgress = 0
    let currentProgress = 0
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const maxScroll = windowHeight * 4 // 4x screen height for scroll space (twice as fast)
      targetProgress = Math.min(scrollTop / maxScroll, 1)
    }
    
    const smoothUpdate = () => {
      // Smooth interpolation for progress
      currentProgress += (targetProgress - currentProgress) * 0.1
      setScrollProgress(currentProgress)
      
      const progress = currentProgress
      const windowWidth = window.innerWidth
      
      // Calculate scale for images (1x to 2.5x) - reduced on mobile
      const scale = 1 + progress * (windowWidth < 640 ? 0.8 : 1.5)
      
      // Calculate horizontal movement (grow outwards) - reduced on mobile
      const moveDistance = windowWidth < 640 ? 100 : 200
      const leftMove = -progress * moveDistance // Move left image further left
      const rightMove = progress * moveDistance // Move right image further right
      
      // Show new images after 20% scroll progress (earlier threshold)
      const showNewImages = progress > 0.2
      const newImageProgress = Math.max(0, (progress - 0.2) * 1.25) // 0 to 1 after 20% scroll
      const newImageScale = 1 + newImageProgress * (windowWidth < 640 ? 0.8 : 1.5)
      const newLeftMove = -newImageProgress * moveDistance
      const newRightMove = newImageProgress * moveDistance
      
      // Show third set of images after 40% scroll progress (earlier threshold)
      const showThirdImages = progress > 0.4
      const thirdImageProgress = Math.max(0, (progress - 0.4) * 1.67) // 0 to 1 after 40% scroll
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
      
      // First set of images (0-33% scroll)
      if (leftImageRef.current) {
        leftImageRef.current.style.transform = `translateX(${leftMove}px) scale(${scale})`
        leftImageRef.current.style.opacity = !showNewImages ? '1' : '0'
      }
      if (rightImageRef.current) {
        rightImageRef.current.style.transform = `translateX(${rightMove}px) scale(${scale})`
        rightImageRef.current.style.opacity = !showNewImages ? '1' : '0'
      }
      
      // Second set of images (33-66% scroll)
      if (newLeftImageRef.current) {
        newLeftImageRef.current.style.transform = `translateX(${newLeftMove}px) scale(${newImageScale})`
        newLeftImageRef.current.style.opacity = showNewImages && !showThirdImages ? '1' : '0'
      }
      if (newRightImageRef.current) {
        newRightImageRef.current.style.transform = `translateX(${newRightMove}px) scale(${newImageScale})`
        newRightImageRef.current.style.opacity = showNewImages && !showThirdImages ? '1' : '0'
      }
      
      // Third set of images (66-100% scroll)
      if (thirdLeftImageRef.current) {
        thirdLeftImageRef.current.style.transform = `translateX(${thirdLeftMove}px) scale(${thirdImageScale})`
        thirdLeftImageRef.current.style.opacity = showThirdImages ? '1' : '0'
      }
      if (thirdRightImageRef.current) {
        thirdRightImageRef.current.style.transform = `translateX(${thirdRightMove}px) scale(${thirdImageScale})`
        thirdRightImageRef.current.style.opacity = showThirdImages ? '1' : '0'
      }
      
      // Fourth set of images (80%+ scroll)
      if (fourthLeftImageRef.current) {
        fourthLeftImageRef.current.style.transform = `translateX(${fourthLeftMove}px) scale(${fourthImageScale})`
        fourthLeftImageRef.current.style.opacity = showFourthImages ? '1' : '0'
      }
      if (fourthRightImageRef.current) {
        fourthRightImageRef.current.style.transform = `translateX(${fourthRightMove}px) scale(${fourthImageScale})`
        fourthRightImageRef.current.style.opacity = showFourthImages ? '1' : '0'
      }
      
      // Fifth set of images (90%+ scroll)
      if (fifthLeftImageRef.current) {
        fifthLeftImageRef.current.style.transform = `translateX(${fifthLeftMove}px) scale(${fifthImageScale})`
        fifthLeftImageRef.current.style.opacity = showFifthImages ? '1' : '0'
      }
      if (fifthRightImageRef.current) {
        fifthRightImageRef.current.style.transform = `translateX(${fifthRightMove}px) scale(${fifthImageScale})`
        fifthRightImageRef.current.style.opacity = showFifthImages ? '1' : '0'
      }
      
      // Continue the animation loop
      rafId = requestAnimationFrame(smoothUpdate)
    }

    // Start the smooth animation loop
    rafId = requestAnimationFrame(smoothUpdate)
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Call handleScroll once to set initial state
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <div className="bg-white" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Header />
      
      {/* Mobile Circular Gallery - Only visible on mobile */}
      <div className="fixed inset-0 z-10 sm:hidden">
        <CircularGallery 
          items={[
            {
              image: "https://res.cloudinary.com/dfye0gag9/image/upload/festive-wearkurta_dzlyzn.jpg",
              text: ""
            },
            {
              image: "https://res.cloudinary.com/dfye0gag9/image/upload/festive-wearkurta_set_g3hixx.jpg",
              text: ""
            },
            {
              image: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearanarkali_qaxwt7.jpg",
              text: ""
            },
            {
              image: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-weardress_uio8lg.jpg",
              text: ""
            },
            {
              image: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearsuit_sets_lzrwx6.jpg",
              text: ""
            },
            {
              image: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearkaftans_uu1fik.jpg",
              text: ""
            }
          ]}
          bend={0}
          textColor="#ffffff"
          borderRadius={0}
          scrollEase={0.02}
        />
      </div>
      
      {/* Hero Content - Fixed and Centered */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full px-4 sm:px-6 lg:px-8">
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


      {/* Left Side Image - First Set */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={leftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/festive-wearkurta_dzlyzn.jpg" 
          alt="Festive Wear Kurta" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
        />
      </div>

      {/* Right Side Image - First Set */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={rightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/festive-wearkurta_set_g3hixx.jpg" 
          alt="Festive Wear Kurta Set" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
        />
      </div>

      {/* New Left Side Image - Second Set */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={newLeftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearanarkali_qaxwt7.jpg" 
          alt="Festive Wear Anarkali" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
        />
      </div>

      {/* New Right Side Image - Second Set */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={newRightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-weardress_uio8lg.jpg" 
          alt="Festive Wear Dress" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
        />
      </div>

      {/* Third Left Side Image - Third Set */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={thirdLeftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearsuit_sets_lzrwx6.jpg" 
          alt="Festive Wear Suit Sets" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
        />
      </div>

      {/* Third Right Side Image - Third Set */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={thirdRightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearkaftans_uu1fik.jpg" 
          alt="Festive Wear Kaftans" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
        />
      </div>

      {/* Fourth Left Side Image - Appears after even more scroll */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={fourthLeftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929301/Dresses_krxyu4.jpg" 
          alt="Festive Wear Dresses" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Fourth Right Side Image - Appears after even more scroll */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={fourthRightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929301/Kurta_sets_eut7hb.jpg" 
          alt="Festive Wear Kurta Sets" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Fifth Left Side Image - Appears after maximum scroll */}
      <div className="fixed left-2 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={fifthLeftImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929303/Kurta_hq3pka.png" 
          alt="Festive Wear Kurta" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Fifth Right Side Image - Appears after maximum scroll */}
      <div className="fixed right-2 sm:right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <img 
          ref={fifthRightImageRef}
          src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929302/Kaftans_uyhm7a.jpg" 
          alt="Festive Wear Kaftans" 
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg transition-all duration-100 ease-out"
          style={{ opacity: 0 }}
        />
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
      <div className="relative z-0">
        <section className="h-screen bg-white"></section>
        <section className="h-screen bg-white"></section>
        <section className="h-screen bg-white"></section>
        <section className="h-screen bg-white"></section>
        <section className="h-screen bg-white"></section>
        <section className="h-screen bg-white"></section>
      </div>
    </div>
  )
}