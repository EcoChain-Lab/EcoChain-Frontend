"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#how-it-works", label: "HOW IT WORKS" },
    { href: "#stats", label: "STATS" },
    { href: "#contact", label: "CONTACT" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-green-400/95 backdrop-blur-sm border-b-4 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)]"
          : "bg-green-400 border-b-4 border-black"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="bg-black p-2 border-2 border-black group-hover:scale-110 transition-transform duration-300">
              <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black uppercase tracking-tight group-hover:text-green-800 transition-colors duration-300">
              ECOCHAIN
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-bold uppercase text-sm hover:underline decoration-4 hover:text-green-800 transition-all duration-300 hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="/login">
              <Button className="bg-black text-white border-4 border-black hover:bg-white hover:text-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                Login
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-black text-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 mt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-bold uppercase text-sm hover:text-green-600 transition-colors duration-300 py-2 border-b-2 border-gray-200 last:border-b-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </a>
              ))}
              <a href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-green-600 text-white border-4 border-black hover:bg-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-4">
                  GET APP
                </Button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
