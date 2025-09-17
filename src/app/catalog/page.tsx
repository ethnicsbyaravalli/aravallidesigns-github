"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-6 font-serif-heading">
              Our Collection
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated selection of contemporary Indian fashion, 
              where tradition meets modern elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[9/16]"
              >
                <CardContent className="p-0 h-full relative">
                  {/* Product Image */}
                  <div className="relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    
                    {/* Quick Info (always visible) */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium text-lg mb-1 font-serif-heading drop-shadow-lg">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light tracking-tight text-black mb-6 font-serif-heading">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
            We're constantly adding new pieces to our collection. Get in touch with us 
            to discuss custom designs or special requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-medium">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white font-medium">
              View All Collections
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
