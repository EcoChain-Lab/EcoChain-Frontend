import { Leaf, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    product: [
      { label: "HOW IT WORKS", href: "#how-it-works" },
      { label: "SMART BINS", href: "#smart-bins" },
      { label: "MOBILE APP", href: "#mobile-app" },
      { label: "BLOCKCHAIN", href: "#blockchain" },
    ],
    company: [
      { label: "ABOUT US", href: "#about" },
      { label: "CAREERS", href: "#careers" },
      { label: "PRESS", href: "#press" },
      { label: "PARTNERS", href: "#partners" },
    ],
    support: [
      { label: "HELP CENTER", href: "#help" },
      { label: "CONTACT US", href: "#contact" },
      { label: "PRIVACY POLICY", href: "#privacy" },
      { label: "TERMS OF SERVICE", href: "#terms" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-black text-white border-t-4 border-green-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-400 p-2 border-2 border-white">
                <Leaf className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl sm:text-3xl font-black uppercase">ECOCHAIN</div>
            </div>
            <p className="font-bold text-sm sm:text-base mb-6 text-gray-300">
              REVOLUTIONIZING WASTE MANAGEMENT THROUGH BLOCKCHAIN AND AI TECHNOLOGY FOR A SUSTAINABLE FUTURE.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="font-bold text-sm">HELLO@ECOCHAIN.IO</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="font-bold text-sm">+1 (555) ECO-CHAIN</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="font-bold text-sm">GLOBAL NETWORK</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-black uppercase mb-4 sm:mb-6 text-green-400">PRODUCT</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-bold text-sm hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-black uppercase mb-4 sm:mb-6 text-green-400">COMPANY</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-bold text-sm hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-black uppercase mb-4 sm:mb-6 text-green-400">SUPPORT</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-bold text-sm hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-black uppercase text-sm mb-3 text-green-400">FOLLOW US</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-green-400 text-black border-2 border-white p-2 hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-110 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-4 border-green-400 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="font-bold uppercase text-sm text-center sm:text-left">
              © 2024 ECOCHAIN - BUILDING A SUSTAINABLE FUTURE
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-bold">
              <a href="#privacy" className="hover:text-green-400 transition-colors duration-300">
                PRIVACY
              </a>
              <a href="#terms" className="hover:text-green-400 transition-colors duration-300">
                TERMS
              </a>
              <a href="#cookies" className="hover:text-green-400 transition-colors duration-300">
                COOKIES
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
