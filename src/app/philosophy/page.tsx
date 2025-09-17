"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Philosophy Section */}
      <section className="min-h-screen flex items-center px-6 py-20 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6">BRAND PHILOSOPHY</p>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-8 font-serif-heading">
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
              <h3 className="text-xl font-light text-black mb-4 font-serif-heading">Never Over-Communicate, Never Under-Perform</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                A guiding principle that reflects our operational integrity and commitment to delivering 
                exactly what we promise, when we promise it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-light">2</span>
              </div>
              <h3 className="text-xl font-light text-black mb-4 font-serif-heading">Quality in Every Stitch</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Our unwavering commitment to excellence ensures that every garment meets the highest 
                standards of craftsmanship and durability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-light">3</span>
              </div>
              <h3 className="text-xl font-light text-black mb-4 font-serif-heading">Customer Satisfaction is Our Goal</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Timely delivery is our promise – a pledge that defines our global partnerships and 
                commitment to exceeding expectations.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 py-16 px-8">
              <h3 className="text-2xl font-light text-black mb-4 font-serif-heading">Our Mantra</h3>
              <p className="text-xl text-gray-600 italic font-light">
                "Quality in every stitch. Satisfaction in every shipment."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
