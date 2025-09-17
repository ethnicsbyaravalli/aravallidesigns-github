import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-light tracking-widest text-gray-500 mb-8">GET IN TOUCH</p>
          <h1 className="text-6xl md:text-8xl font-light text-black leading-none mb-8 font-serif-heading">
            Let's create something
            <span className="block italic text-red-500">extraordinary together</span>
          </h1>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're a brand, designer, or B2B client, we're here to help you bring 
            premium women's clothing to your customers.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-black mb-8 font-serif-heading">Send us a message</h2>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-black placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-black placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-600 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-black placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-600 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-black placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-600 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-black placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-600 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-black placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements, order quantities, timeline, or any specific needs..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-500 text-white py-4 text-sm font-light tracking-wider hover:bg-red-600 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-light text-black mb-8 font-serif-heading">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 flex items-center justify-center mt-1">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">Address</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        H 169, Malviya Nagar Industrial Area<br />
                        Malviya Nagar, Jaipur<br />
                        Rajasthan 302017, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 flex items-center justify-center mt-1">
                      <Mail className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">Email</h3>
                      <p className="text-gray-600 font-light">aravallidesigns@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 flex items-center justify-center mt-1">
                      <Phone className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">Phone</h3>
                      <p className="text-gray-600 font-light">+91 93144 44425</p>
                      <p className="text-gray-600 font-light">+91 93588 83783</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 flex items-center justify-center mt-1">
                      <Clock className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">Business Hours</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed<br />
                        (IST - Indian Standard Time)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Partner With Us */}
              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-light text-black mb-6 font-serif-heading">Why Partner With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                    <p className="text-gray-600 font-light text-sm">Proven expertise in women wear manufacturing and export</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                    <p className="text-gray-600 font-light text-sm">Skilled team of designers, artisans, and merchandisers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                    <p className="text-gray-600 font-light text-sm">Precision in sizing, stitching, and finishing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                    <p className="text-gray-600 font-light text-sm">Capacity for bulk orders with timely delivery</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-3"></div>
                    <p className="text-gray-600 font-light text-sm">Trusted by international retailers and fashion houses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-3xl font-light text-black leading-tight font-serif-heading">
              Common questions about our <span className="italic text-red-500">manufacturing process</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-light text-black mb-3">What is your minimum order quantity?</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Our minimum order quantity varies by product type. For most items, we require a minimum of 100 pieces per style. 
                For custom designs, the minimum may be higher. Contact us for specific requirements.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-light text-black mb-3">How long does production take?</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Standard production time is 4-6 weeks from order confirmation. For custom designs or large quantities, 
                production may take 6-8 weeks. We provide detailed timelines during the quotation process.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-light text-black mb-3">Do you offer custom design services?</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Yes, we specialize in custom design services. Our team of designers can work with your specifications 
                to create unique pieces that align with your brand and market requirements.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-light text-black mb-3">What fabrics do you work with?</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We work with a wide range of fabrics including cotton cambric, cotton voile, cotton dobby, cotton flex, 
                cotton slub, silk, silk blends, and select man-made textiles. We can source specific fabrics based on your requirements.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="text-lg font-light text-black mb-3">Do you provide samples?</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Yes, we provide samples for approval before bulk production. Sample charges apply and are typically 
                credited against your first order. We ensure samples meet your exact specifications before proceeding with production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
