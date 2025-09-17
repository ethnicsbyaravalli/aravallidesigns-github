"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* About Section */}
      <section className="min-h-screen flex items-center px-6 py-20 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <p className="text-sm font-light tracking-widest text-gray-500 mb-6">ABOUT ARAVALLI DESIGNS</p>
              <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-8 font-serif-heading">
                The balance of <span className="italic text-red-500">traditional artistry</span> and modern production
              </h2>
              <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                Based in Jaipur's textile hub, we combine traditional craftsmanship with modern manufacturing techniques 
                to deliver premium women's clothing for brands, designers, and B2B clients globally.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">Custom manufacturing for brands and designers worldwide</p>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">Premium fabrics and traditional craftsmanship techniques</p>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">Bulk production capabilities with quality assurance</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right hover:scale-105 transition-transform duration-500">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipMN1X472LIyKs9ShMxiTxWWwyFKPRlpygxcfe7Q=s680-w680-h510-rw"
                  alt="Aravalli Designs Manufacturing Facility"
                  className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <p className="text-sm font-light tracking-wider">MANUFACTURING FACILITY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
