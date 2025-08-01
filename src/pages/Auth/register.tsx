"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Leaf, Eye, EyeOff, Mail, Lock, User, ArrowRight, Globe, Users, Award } from "lucide-react"
import { useState, useEffect } from "react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>(
    [],
  )

  // Generate floating elements for animation
  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setFloatingElements(elements)
  }, [])

  // Calculate password strength
  useEffect(() => {
    const password = formData.password
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    setPasswordStrength(strength)
  }, [formData.password])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return "bg-red-500"
      case 2:
        return "bg-yellow-500"
      case 3:
        return "bg-green-400"
      case 4:
        return "bg-green-600"
      default:
        return "bg-gray-300"
    }
  }

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return "WEAK"
      case 2:
        return "FAIR"
      case 3:
        return "GOOD"
      case 4:
        return "STRONG"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Panel - Visual */}
      <div className="flex-1 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 relative overflow-hidden flex items-center justify-center min-h-[50vh] lg:min-h-screen order-2 lg:order-1">
        <div className="text-center text-white z-10 animate-slide-in-left p-4 sm:p-6 lg:p-8">
          <div className="bg-white/20 backdrop-blur-sm border-4 border-white p-6 sm:p-8 lg:p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4 sm:mb-6">
              JOIN THE
              <br />
              <span className="text-green-200">ECO REVOLUTION</span>
            </h2>
            <p className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">
              BE PART OF THE GLOBAL MOVEMENT TOWARDS A SUSTAINABLE FUTURE
            </p>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {[
                { icon: Globe, label: "GLOBAL NETWORK", value: "25+ CITIES" },
                { icon: Users, label: "ACTIVE USERS", value: "50,000+" },
                { icon: Award, label: "REWARDS EARNED", value: "$2.5M+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 bg-white/20 border-2 border-white p-3 sm:p-4"
                >
                  <div className="bg-white/30 border-2 border-white p-2 sm:p-3">
                    <stat.icon className="h-5 sm:h-6 w-5 sm:w-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-black text-base sm:text-lg">{stat.value}</div>
                    <div className="font-bold text-xs sm:text-sm opacity-90">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Shapes */}
        <div className="absolute top-12 sm:top-20 right-6 sm:right-10 w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-white/20 border-4 border-white transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-8 sm:left-16 w-16 sm:w-20 h-16 sm:h-20 bg-white/20 border-4 border-white transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-white/30 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-white/20 border-4 border-white transform rotate-12 animate-ping"></div>

        {/* Floating Background Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-20 animate-float-slow hidden lg:block"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white/40 border-2 border-white transform rotate-45"></div>
          </div>
        ))}
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden order-1 lg:order-2">
        <div className="w-full max-w-md animate-slide-in-right">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="bg-green-400 p-2 sm:p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Leaf className="h-6 sm:h-8 w-6 sm:w-8 text-black" />
            </div>
            <div className="text-2xl sm:text-3xl font-black uppercase">ECOCHAIN</div>
          </div>

          {/* Welcome Text */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-black uppercase mb-3 sm:mb-4">
              CREATE
              <br />
              <span className="text-green-600">ACCOUNT</span>
            </h1>
            <p className="text-base sm:text-lg font-bold text-gray-600">
              START YOUR JOURNEY TO EARN REWARDS WHILE SAVING THE PLANET
            </p>
          </div>

          {/* Register Form */}
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label className="block font-black uppercase text-xs sm:text-sm">FIRST NAME</label>
                  <div className="relative">
                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-gray-500" />
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="JOHN"
                      className="pl-10 sm:pl-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase placeholder:text-gray-400 focus:border-green-600 transition-colors duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block font-black uppercase text-xs sm:text-sm">LAST NAME</label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="DOE"
                    className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase placeholder:text-gray-400 focus:border-green-600 transition-colors duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block font-black uppercase text-xs sm:text-sm">EMAIL ADDRESS</label>
                <div className="relative">
                  <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-gray-500" />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="YOUR@EMAIL.COM"
                    className="pl-10 sm:pl-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase placeholder:text-gray-400 focus:border-green-600 transition-colors duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block font-black uppercase text-xs sm:text-sm">PASSWORD</label>
                <div className="relative">
                  <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-gray-500" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="CREATE PASSWORD"
                    className="pl-10 sm:pl-12 pr-10 sm:pr-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase placeholder:text-gray-400 focus:border-green-600 transition-colors duration-300 text-sm sm:text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 sm:h-5 w-4 sm:w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-4 sm:h-5 w-4 sm:w-5 text-gray-500" />
                    )}
                  </button>
                </div>
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`h-2 flex-1 border-2 border-black ${
                            level <= passwordStrength ? getPasswordStrengthColor() : "bg-gray-200"
                          } transition-colors duration-300`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs font-bold">
                      PASSWORD STRENGTH:{" "}
                      <span className={passwordStrength >= 3 ? "text-green-600" : "text-red-500"}>
                        {getPasswordStrengthText()}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label className="block font-black uppercase text-xs sm:text-sm">CONFIRM PASSWORD</label>
                <div className="relative">
                  <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-gray-500" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="CONFIRM PASSWORD"
                    className="pl-10 sm:pl-12 pr-10 sm:pr-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase placeholder:text-gray-400 focus:border-green-600 transition-colors duration-300 text-sm sm:text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-200"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 sm:h-5 w-4 sm:w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-4 sm:h-5 w-4 sm:w-5 text-gray-500" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-xs font-bold text-red-500">PASSWORDS DO NOT MATCH</p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-black accent-green-600 mt-1"
                  required
                />
                <p className="font-bold text-xs sm:text-sm">
                  I AGREE TO THE{" "}
                  <a href="/terms" className="text-green-600 hover:text-green-800 underline decoration-2">
                    TERMS & CONDITIONS
                  </a>{" "}
                  AND{" "}
                  <a href="/privacy" className="text-green-600 hover:text-green-800 underline decoration-2">
                    PRIVACY POLICY
                  </a>
                </p>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                disabled={isLoading || formData.password !== formData.confirmPassword}
                className="w-full bg-green-600 text-white border-4 border-black hover:bg-black font-black uppercase text-base sm:text-lg py-4 sm:py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    CREATING ACCOUNT...
                  </div>
                ) : (
                  <>
                    CREATE ACCOUNT
                    <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Sign In Link */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="font-bold text-sm sm:text-base">
              ALREADY HAVE AN ACCOUNT?{" "}
              <a
                href="/login"
                className="text-green-600 hover:text-green-800 font-black underline decoration-2 hover:decoration-4 transition-all duration-200"
              >
                SIGN IN
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
