import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="text-lg font-light tracking-wider font-serif-heading">ARAVALLI DESIGNS</h3>
            </div>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              Premium women's clothing manufacturer in Jaipur for brands, designers, and B2B clients.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-light tracking-wider mb-6">PRODUCTS</h4>
            <ul className="space-y-3 text-gray-600 text-sm font-light">
              <li>Dresses & Tunics</li>
              <li>Tops & Kaftaans</li>
              <li>Skirts & Bottoms</li>
              <li>Palazzos & Pants</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-light tracking-wider mb-6">COMPANY</h4>
            <ul className="space-y-3 text-gray-600 text-sm font-light">
              <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/philosophy" className="hover:text-black transition-colors">Our Philosophy</Link></li>
              <li>Quality Standards</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-light tracking-wider mb-6">CONTACT</h4>
            <ul className="space-y-3 text-gray-600 text-sm font-light">
              <li>H 169, Malviya Nagar Industrial Area</li>
              <li>Malviya Nagar, Jaipur, Rajasthan</li>
              <li>aravallidesigns@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
              <p className="text-gray-600 text-sm font-light">&copy; 2025 Aravalli Designs Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
