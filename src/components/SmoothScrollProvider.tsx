"use client"

import { useEffect } from 'react'
import { initSmoothScroll } from '@/lib/smoothScroll'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize smooth scroll when component mounts
    const cleanup = initSmoothScroll()
    
    // Cleanup function
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  return <>{children}</>
}
