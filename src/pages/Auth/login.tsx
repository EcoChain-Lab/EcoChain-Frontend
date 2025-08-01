"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Leaf, Eye, EyeOff, Mail, Lock, ArrowRight, Coins, Recycle, Shield } from "lucide-react"
import { useState, useEffect } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>(
    [],
  )

  // Generate floating elements for animation
  useEffect(() => {
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setFloatingElements(elements)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="w-full max-w-md animate-slide-in-left">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-400 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Leaf className="h-8 w-8 text-black" />
            </div>
            <div className="text-3xl font-black uppercase">ECOCHAIN</div>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h1 className="text-4xl font-black uppercase mb-4">
              WELCOME
              <br />
              <span className="text-green-600">BACK!</span>
            </h1>
            <p className="text-lg font-bold text-gray-600">SIGN IN TO CONTINUE EARNING REWARDS AND SAVING THE PLANET</p>
          </div>

          {/* Login Form */}
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block font-black uppercase text-sm">EMAIL ADDRESS</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR@EMAIL.COM"
                    className="pl-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase placeholder:text-gray-400 focus:border-green-600 transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block font-black uppercase text-sm">PASSWORD</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="YOUR PASSWORD"
                    className="pl-12 pr-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase placeholder:text-gray-400 focus:border-green-600 transition-colors duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-2 border-black accent-green-600" />
                  <span className="font-bold text-sm">REMEMBER ME</span>
                </label>
                <a
                  href="/forgot-password"
                  className="font-bold text-sm text-green-600 hover:text-green-800 hover:underline decoration-2 transition-colors duration-200"
                >
                  FORGOT PASSWORD?
                </a>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white border-4 border-black hover:bg-black font-black uppercase text-lg py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    SIGNING IN...
                  </div>
                ) : (
                  <>
                    SIGN IN
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-4 border-black"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 font-black uppercase text-sm">OR</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="border-4 border-black bg-white hover:bg-green-50 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                >
                  🔍 GOOGLE
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-4 border-black bg-white hover:bg-green-50 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                >
                  📱 APPLE
                </Button>
              </div>
            </form>
          </Card>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="font-bold">
              DON'T HAVE AN ACCOUNT?{" "}
              <a
                href="/register"
                className="text-green-600 hover:text-green-800 font-black underline decoration-2 hover:decoration-4 transition-all duration-200"
              >
                SIGN UP NOW
              </a>
            </p>
          </div>
        </div>

        {/* Floating Background Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
            }}
          >
            {element.id % 3 === 0 && <Leaf className="h-8 w-8 text-green-600" />}
            {element.id % 3 === 1 && <Coins className="h-8 w-8 text-green-600" />}
            {element.id % 3 === 2 && <Recycle className="h-8 w-8 text-green-600" />}
          </div>
        ))}
      </div>

      {/* Right Panel - Visual */}
      <div className="flex-1 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 relative overflow-hidden flex items-center justify-center">
        <div className="text-center text-white z-10 animate-slide-in-right">
          <div className="bg-white/20 backdrop-blur-sm border-4 border-white p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] mb-8">
            <h2 className="text-5xl font-black uppercase mb-6">
              EARN WHILE
              <br />
              YOU CLEAN
            </h2>
            <p className="text-xl font-bold mb-8">JOIN 50,000+ USERS MAKING A DIFFERENCE AND EARNING REWARDS</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Coins, label: "EARN REWARDS", value: "$2.5M+" },
                { icon: Recycle, label: "WASTE PROCESSED", value: "150K KG" },
                { icon: Shield, label: "SECURE BLOCKCHAIN", value: "100%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/30 border-2 border-white p-4 mb-2 inline-block">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="font-black text-lg">{stat.value}</div>
                  <div className="font-bold text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 border-4 border-white transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/20 border-4 border-white transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/30 border-4 border-white rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-white/20 border-4 border-white transform rotate-45 animate-pulse"></div>
      </div>
    </div>
  )
}
