"use client"

import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Products Section */}
      <section className="min-h-screen flex items-center px-6 py-20 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6">OUR PRODUCT PORTFOLIO</p>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-8 font-serif-heading">
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

      <Footer />
    </div>
  )
}
