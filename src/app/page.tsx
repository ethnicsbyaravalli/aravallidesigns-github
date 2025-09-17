"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Star, Users, Award, Globe } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CircularGallery from "@/components/CircularGallery"
import { useState, useEffect } from "react"

export default function Home() {
  const galleryItems = [
    {
      image: "https://ekohum.com/cdn/shop/files/DSC7728.jpg?v=1717779635",
      text: ""
    },
    {
      image: "https://ekohum.com/cdn/shop/files/DSC9855.jpg?v=1717778854",
      text: ""
    },
    {
      image: "https://ekohum.com/cdn/shop/files/DSC7093.jpg?v=1717779598",
      text: ""
    },
    {
      image: "https://ekohum.com/cdn/shop/files/DSC7391.jpg?v=1717779241",
      text: ""
    },
    {
      image: "https://ekohum.com/cdn/shop/files/DSC6478.jpg?v=1717779121",
      text: ""
    },
    {
      image: "https://ekohum.com/cdn/shop/files/DSC7338_968d4f2c-bf38-4f10-b342-542a7848c8fd.jpg?v=1717779252",
      text: ""
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col pt-20">
        {/* Top Row - Hero Content */}
        <div className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <div className="mb-8">
                <p className="text-sm font-light tracking-widest text-gray-500 mb-8 animate-fade-in-down">PREMIUM WOMEN'S CLOTHING MANUFACTURER</p>
                <h1 className="text-5xl md:text-7xl font-light text-black leading-none mb-8 animate-fade-in-up animation-delay-200 font-serif-heading">
                  THE LUXURY OF
                  <span className="block italic text-red-500 animate-fade-in-up animation-delay-400">ARTISANAL CRAFTSMANSHIP</span>
                </h1>
                <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
                  Premium women's clothing manufacturer in Jaipur for brands, designers, and B2B clients. 
                  Custom, bulk, and private label women's clothing direct from manufacturer.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up animation-delay-800">
                <Link href="/contact" className="text-sm font-light tracking-wider text-black border-b border-black pb-1 hover:opacity-60 transition-all duration-300 hover:scale-105">
                  INQUIRE FOR PRODUCTS
                </Link>
                <Link href="/contact" className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-all duration-300 hover:scale-105">
                  VIEW CATALOG
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Full Width Circular Gallery */}
        <div className="w-full animate-fade-in-up animation-delay-1000">
          <div style={{ height: '500px', position: 'relative' }}>
            <CircularGallery 
              items={galleryItems}
              bend={3} 
              textColor="#000000" 
              borderRadius={0} 
              scrollEase={0.02}
              font="bold 20px serif"
            />
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
