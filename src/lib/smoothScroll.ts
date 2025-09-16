// Check if we're in the browser
const isBrowser = typeof window !== 'undefined'

// Initialize smooth scroll for anchor links
export const initSmoothScroll = () => {
  if (!isBrowser) return null

  const handleAnchorClick = (e: Event) => {
    const target = e.target as HTMLAnchorElement
    const href = target.getAttribute('href')
    
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault()
      const elementId = href.substring(1)
      scrollToElement(elementId)
    }
  }

  // Add event listeners to all anchor links
  const anchorLinks = document.querySelectorAll('a[href*="#"]')
  anchorLinks.forEach(link => {
    link.addEventListener('click', handleAnchorClick)
  })

  // Return cleanup function
  return () => {
    anchorLinks.forEach(link => {
      link.removeEventListener('click', handleAnchorClick)
    })
  }
}

// Smooth scroll to specific element
export const scrollToElement = (elementId: string, offset: number = 80) => {
  if (!isBrowser) return

  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
