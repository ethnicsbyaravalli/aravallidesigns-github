import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Aravalli Designs - Leading Women\'s Ethnic Wear Manufacturer',
  description: 'Premier women\'s clothing manufacturer and exporter from Jaipur, India. Specializing in ethnic wear, dresses, tunics, and coordinated sets for global markets.',
  keywords: 'women clothing manufacturer, ethnic wear, Jaipur, India, dresses, tunics, fashion exporter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amarante&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-serif`}>
        {children}
      </body>
    </html>
  )
}
