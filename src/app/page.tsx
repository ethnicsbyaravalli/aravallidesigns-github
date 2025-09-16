"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Star, Users, Award, Globe } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const productImages = [
    {
      regular: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116528/festive-wearkurta_set_g3hixx.jpg",
      hover: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116529/festive-wearkurta_set_hover_mjnqex.jpg"
    },
    {
      regular: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116528/festive-wearkurta_dzlyzn.jpg",
      hover: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearkurta_hover_qlxbcc.jpg"
    },
    {
      regular: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearkaftans_uu1fik.jpg",
      hover: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearkaftans_hover_jgxltj.jpg"
    },
    {
      regular: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearsuit_sets_lzrwx6.jpg",
      hover: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearsuit_sets_hover_aqnrqr.jpg"
    },
    {
      regular: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-weardress_uio8lg.jpg",
      hover: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-weardress_hover_ihowmn.jpg"
    },
    {
      regular: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116526/festive-wearanarkali_qaxwt7.jpg",
      hover: "https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearanarkali_hover_mygrpv.jpg"
    },
    {
      regular: "https://res.cloudinary.com/dfye0gag9/image/upload/v1755929301/Kurta_sets_eut7hb.jpg",
      hover: "https://res.cloudinary.com/dfye0gag9/image/upload/v1755929303/Kurta_sets_hover_z4xfq9.jpg"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [productImages.length])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <div className="mb-16">
                <p className="text-sm font-light tracking-widest text-gray-500 mb-8 animate-fade-in-down">PREMIUM WOMEN'S CLOTHING MANUFACTURER</p>
                <h1 className="text-5xl md:text-7xl font-light text-black leading-none mb-8 animate-fade-in-up animation-delay-200">
                  THE LUXURY OF
                  <span className="block italic text-red-500 animate-fade-in-up animation-delay-400">ARTISANAL CRAFTSMANSHIP</span>
                </h1>
                <p className="text-lg font-light text-gray-600 max-w-xl leading-relaxed animate-fade-in-up animation-delay-600">
                  Premium women's clothing manufacturer in Jaipur for brands, designers, and B2B clients. 
                  Custom, bulk, and private label women's clothing direct from manufacturer.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 animate-fade-in-up animation-delay-800">
                <Link href="/contact" className="text-sm font-light tracking-wider text-black border-b border-black pb-1 hover:opacity-60 transition-all duration-300 hover:scale-105">
                  INQUIRE FOR PRODUCTS
                </Link>
                <Link href="/contact" className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-all duration-300 hover:scale-105">
                  VIEW CATALOG
                </Link>
              </div>
            </div>

            {/* Right Column - Product Image Slider */}
            <div className="animate-fade-in-right">
              <div className="relative rounded-lg overflow-hidden">
                <div className="relative h-[800px] group">
                  <img 
                    src={productImages[currentImageIndex].regular}
                    alt={`Product ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-1000 group-hover:hidden"
                  />
                  <img 
                    src={productImages[currentImageIndex].hover}
                    alt={`Product ${currentImageIndex + 1} Hover`}
                    className="w-full h-full object-cover transition-opacity duration-1000 hidden group-hover:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <p className="text-sm font-light tracking-widest text-gray-500 mb-6">ABOUT ARAVALLI DESIGNS</p>
              <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-8">
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

      {/* Products Section */}
      <section id="products" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6">OUR PRODUCT PORTFOLIO</p>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-8">
              <span className="italic text-red-500">Classic</span> and contemporary women's clothing
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Welcome to Aravalli Designs – your destination for premium women's clothing crafted in Jaipur, India 
              for brands, designers, and B2B clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group animate-fade-in-up animation-delay-100 hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 h-[500px] mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929301/Dresses_krxyu4.jpg"
                  alt="Dresses"
                  className="w-full h-full object-cover group-hover:hidden"
                />
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929302/Dresses_hover_cnfrrs.jpg"
                  alt="Dresses Hover"
                  className="w-full h-full object-cover hidden group-hover:block"
                />
              </div>
              <h3 className="text-lg font-light text-black mb-2 group-hover:text-red-500 transition-colors duration-300">Dresses</h3>
              <p className="text-sm font-light text-gray-600">Flowing silhouettes with artisanal detailing for everyday and festive wear</p>
            </div>

            <div className="group animate-fade-in-up animation-delay-200 hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 h-[500px] mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearkaftans_uu1fik.jpg"
                  alt="Kaftaans"
                  className="w-full h-full object-cover group-hover:hidden"
                />
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1756116527/festive-wearkaftans_hover_jgxltj.jpg"
                  alt="Kaftaans Hover"
                  className="w-full h-full object-cover hidden group-hover:block"
                />
              </div>
              <h3 className="text-lg font-light text-black mb-2 group-hover:text-red-500 transition-colors duration-300">Kaftaans</h3>
              <p className="text-sm font-light text-gray-600">Versatile styles blending tradition with modern flair</p>
            </div>

            <div className="group animate-fade-in-up animation-delay-300 hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 h-[500px] mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929303/Kurta_hq3pka.png"
                  alt="Co-ordinated Sets"
                  className="w-full h-full object-cover group-hover:hidden"
                />
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929303/Kurta_hover_e6n7p3.jpg"
                  alt="Co-ordinated Sets Hover"
                  className="w-full h-full object-cover hidden group-hover:block"
                />
              </div>
              <h3 className="text-lg font-light text-black mb-2 group-hover:text-red-500 transition-colors duration-300">Co-ordinated Sets</h3>
              <p className="text-sm font-light text-gray-600">Harmonized top-bottom ensembles for cohesive fashion statements</p>
            </div>

            <div className="group animate-fade-in-up animation-delay-400 hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 h-[500px] mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929304/Anarkali_v7kggh.jpg"
                  alt="Skirts & Bottoms"
                  className="w-full h-full object-cover group-hover:hidden"
                />
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929302/Anarkali_hover_q6jtvw.jpg"
                  alt="Skirts & Bottoms Hover"
                  className="w-full h-full object-cover hidden group-hover:block"
                />
              </div>
              <h3 className="text-lg font-light text-black mb-2 group-hover:text-red-500 transition-colors duration-300">Skirts & Bottoms</h3>
              <p className="text-sm font-light text-gray-600">Comfortable cuts in breathable fabrics for effortless styling</p>
            </div>

            <div className="group animate-fade-in-up animation-delay-500 hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 h-[500px] mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929301/Kurta_sets_eut7hb.jpg"
                  alt="Palazzos & Pants"
                  className="w-full h-full object-cover group-hover:hidden"
                />
                <img 
                  src="https://res.cloudinary.com/dfye0gag9/image/upload/v1755929303/Kurta_sets_hover_z4xfq9.jpg"
                  alt="Palazzos & Pants Hover"
                  className="w-full h-full object-cover hidden group-hover:block"
                />
              </div>
              <h3 className="text-lg font-light text-black mb-2 group-hover:text-red-500 transition-colors duration-300">Palazzos & Pants</h3>
              <p className="text-sm font-light text-gray-600">Tailored fits with global appeal</p>
            </div>

            <div className="group animate-fade-in-up animation-delay-600 hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 h-64 mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <p className="text-xs font-light text-gray-500">STOLES & ACCESSORIES</p>
                </div>
              </div>
              <h3 className="text-lg font-light text-black mb-2 group-hover:text-red-500 transition-colors duration-300">Stoles & Accessories</h3>
              <p className="text-sm font-light text-gray-600">Finishing touches that elevate any ensemble</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto">
              Crafted using natural and sustainable fabrics, our garments are tailored to meet international 
              sizing standards, with a focus on body-friendly fits and seasonal trends.
            </p>
            <Link href="/contact" className="text-sm font-light tracking-wider text-black border-b border-black pb-1 hover:opacity-60 transition-opacity">
              INQUIRE FOR PRODUCT CATALOG
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6">BRAND PHILOSOPHY</p>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-8">
              The luxury of <span className="italic text-red-500">uncomplicated</span> excellence
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our guiding principles reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-light">1</span>
              </div>
              <h3 className="text-xl font-light text-black mb-4">Never Over-Communicate, Never Under-Perform</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                A guiding principle that reflects our operational integrity and commitment to delivering 
                exactly what we promise, when we promise it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-light">2</span>
              </div>
              <h3 className="text-xl font-light text-black mb-4">Quality in Every Stitch</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Our unwavering commitment to excellence ensures that every garment meets the highest 
                standards of craftsmanship and durability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-light">3</span>
              </div>
              <h3 className="text-xl font-light text-black mb-4">Customer Satisfaction is Our Goal</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Timely delivery is our promise – a pledge that defines our global partnerships and 
                commitment to exceeding expectations.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 py-16 px-8">
              <h3 className="text-2xl font-light text-black mb-4">Our Mantra</h3>
              <p className="text-xl text-gray-600 italic font-light">
                "Quality in every stitch. Satisfaction in every shipment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6">PARTNER WITH US</p>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-8">
              It's time to achieve <span className="italic text-red-500">more</span> with <span className="italic text-red-500">less</span>
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Whether you're a brand, designer, or B2B client, Aravalli Designs is your trusted partner 
              for premium women's clothing manufacturing from Jaipur, India.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-2xl font-light text-black mb-8">Why Partner With Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-gray-600 font-light">Specialized in women's clothing manufacturing and export from Jaipur</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-gray-600 font-light">Experienced team of designers, artisans, and production specialists</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-gray-600 font-light">Attention to detail in sizing, stitching, and finishing</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-gray-600 font-light">Flexible production capacity for custom and bulk orders</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-gray-600 font-light">Trusted by international brands and fashion retailers</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-12">
              <h3 className="text-2xl font-light text-black mb-8">Get In Touch</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-1 h-1 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-600 font-light">H 169, Malviya Nagar Industrial Area, Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-1 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-600 font-light">aravallidesigns@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-1 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-600 font-light">+91 93144 44425</span>
                </div>
              </div>
              <Link href="/contact" className="text-sm font-light tracking-wider text-black border-b border-black pb-1 hover:opacity-60 transition-opacity">
                INQUIRE FOR PARTNERSHIP
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
