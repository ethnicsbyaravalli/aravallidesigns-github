"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "Black Ikhat Print Dress",
      image: "https://ekohum.com/cdn/shop/files/DSC7728.jpg?v=1717779635"
    },
    {
      id: 2,
      name: "Pink Printed Tiered Maxi Dress with Belt",
      image: "https://ekohum.com/cdn/shop/files/DSC9855.jpg?v=1717778854"
    },
    {
      id: 3,
      name: "Peach Silk Embroidered Kaftan",
      image: "https://ekohum.com/cdn/shop/files/DSC7093.jpg?v=1717779598"
    },
    {
      id: 4,
      name: "White Dobby Short Kurta with Pink Ikhat Pant Co-Ord Set",
      image: "https://ekohum.com/cdn/shop/files/DSC7391.jpg?v=1717779241"
    },
    {
      id: 5,
      name: "Lavender Cotton Gathered Top",
      image: "https://ekohum.com/cdn/shop/files/DSC6478.jpg?v=1717779121"
    },
    {
      id: 6,
      name: "White Dobby Short Kurta with Blue Ikhat Pant Co-Ord Set",
      image: "https://ekohum.com/cdn/shop/files/DSC7338_968d4f2c-bf38-4f10-b342-542a7848c8fd.jpg?v=1717779252"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-20 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6">OUR COLLECTION</p>
            <h1 className="text-4xl md:text-5xl font-light text-black leading-tight mb-8 font-serif-heading">
              Discover our <span className="italic text-red-500">carefully curated</span> selection
            </h1>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Contemporary Indian fashion where tradition meets modern elegance, 
              crafted for brands, designers, and B2B clients.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="group animate-fade-in-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="bg-gray-50 h-[500px] mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-light text-black mb-2 group-hover:text-red-500 transition-colors duration-300 font-serif-heading">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-gray-600">
                  Premium craftsmanship with contemporary design
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6">READY TO GET STARTED?</p>
            <h2 className="text-3xl font-light text-black leading-tight font-serif-heading">
              Can't find what you're looking for? <span className="italic text-red-500">Let's create it together</span>
            </h2>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're constantly adding new pieces to our collection. Get in touch with us 
              to discuss custom designs, special requests, or bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="text-sm font-light tracking-wider text-black border-b border-black pb-1 hover:opacity-60 transition-all duration-300 hover:scale-105">
                INQUIRE FOR CUSTOM DESIGNS
              </Link>
              <Link href="/products" className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-all duration-300 hover:scale-105">
                VIEW ALL PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
