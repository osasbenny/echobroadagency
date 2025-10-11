import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Echo</span>
              <span className="text-red">Broad</span>
            </div>
            <p className="text-gray-300 text-sm">
              Digital marketing and creative media solutions that amplify your brand's voice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  E-Store
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-red" />
                info@echobroad.com
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-red" />
                +2349071447959
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-red" />
                30 East West Road, Rumuodara, Port Harcourt
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/echobroad?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/n-broad-socials/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@daviduwak?si=BA-T5-d_a7Rbl1rx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EchoBroad Agency. All rights reserved.</p>
          <p className="mt-2">
            Designed by{' '}
            <a
              href="https://echobroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              EchoBroad Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

