"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Leaf, Mail, ArrowRight, ArrowLeft, CheckCircle, Shield, Clock, Smartphone } from "lucide-react"
import { useState, useEffect } from "react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>(
    [],
  )

  // Generate floating elements for animation
  useEffect(() => {
    const elements = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setFloatingElements(elements)
  }, [])

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsEmailSent(true)
    setCountdown(60) // 60 seconds countdown
  }

  const handleResend = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setCountdown(60)
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

          {/* Back to Login */}
          <a
            href="/login"
            className="inline-flex items-center gap-2 font-bold text-green-600 hover:text-green-800 mb-8 group transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            BACK TO LOGIN
          </a>

          {!isEmailSent ? (
            <>
              {/* Welcome Text */}
              <div className="mb-8">
                <h1 className="text-4xl font-black uppercase mb-4">
                  FORGOT
                  <br />
                  <span className="text-green-600">PASSWORD?</span>
                </h1>
                <p className="text-lg font-bold text-gray-600">
                  NO WORRIES! ENTER YOUR EMAIL AND WE'LL SEND YOU A RESET LINK
                </p>
              </div>

              {/* Reset Form */}
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

                  {/* Reset Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-600 text-white border-4 border-black hover:bg-black font-black uppercase text-lg py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        SENDING RESET LINK...
                      </div>
                    ) : (
                      <>
                        SEND RESET LINK
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="mb-8">
                <div className="bg-green-400 border-4 border-black p-4 inline-block mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle className="h-12 w-12 text-black" />
                </div>
                <h1 className="text-4xl font-black uppercase mb-4">
                  CHECK YOUR
                  <br />
                  <span className="text-green-600">EMAIL!</span>
                </h1>
                <p className="text-lg font-bold text-gray-600 mb-4">WE'VE SENT A PASSWORD RESET LINK TO:</p>
                <p className="text-xl font-black text-green-600 mb-6">{email}</p>
              </div>

              {/* Instructions Card */}
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 bg-white mb-6">
                <h3 className="text-xl font-black uppercase mb-4">NEXT STEPS:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-400 border-2 border-black p-2 text-black font-black text-sm min-w-[2rem] text-center">
                      1
                    </div>
                    <p className="font-bold">CHECK YOUR EMAIL INBOX (AND SPAM FOLDER)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-400 border-2 border-black p-2 text-black font-black text-sm min-w-[2rem] text-center">
                      2
                    </div>
                    <p className="font-bold">CLICK THE RESET LINK IN THE EMAIL</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-400 border-2 border-black p-2 text-black font-black text-sm min-w-[2rem] text-center">
                      3
                    </div>
                    <p className="font-bold">CREATE YOUR NEW PASSWORD</p>
                  </div>
                </div>
              </Card>

              {/* Resend Button */}
              <div className="text-center">
                <p className="font-bold mb-4">DIDN'T RECEIVE THE EMAIL?</p>
                <Button
                  onClick={handleResend}
                  disabled={countdown > 0 || isLoading}
                  className="bg-white text-black border-4 border-black hover:bg-green-50 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {countdown > 0 ? (
                    `RESEND IN ${countdown}S`
                  ) : isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      SENDING...
                    </div>
                  ) : (
                    "RESEND EMAIL"
                  )}
                </Button>
              </div>
            </>
          )}

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
              <Mail className="h-6 w-6 text-green-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="flex-1 bg-gradient-to-br from-teal-400 via-green-500 to-emerald-600 relative overflow-hidden flex items-center justify-center">
        <div className="text-center text-white z-10 animate-slide-in-right">
          <div className="bg-white/20 backdrop-blur-sm border-4 border-white p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] mb-8">
            <h2 className="text-5xl font-black uppercase mb-6">
              SECURE
              <br />
              <span className="text-green-200">RECOVERY</span>
            </h2>
            <p className="text-xl font-bold mb-8">YOUR ACCOUNT SECURITY IS OUR TOP PRIORITY</p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Shield, label: "ENCRYPTED LINKS", desc: "SECURE RESET PROCESS" },
                { icon: Clock, label: "QUICK RECOVERY", desc: "RESET IN MINUTES" },
                { icon: Smartphone, label: "MOBILE FRIENDLY", desc: "WORKS ON ALL DEVICES" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/20 border-2 border-white p-4">
                  <div className="bg-white/30 border-2 border-white p-3">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-black text-lg">{feature.label}</div>
                    <div className="font-bold text-sm opacity-90">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Shapes */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-white/20 border-4 border-white transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-24 left-12 w-32 h-32 bg-white/20 border-4 border-white transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/30 border-4 border-white rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-white/20 border-4 border-white transform rotate-45 animate-pulse"></div>
      </div>
    </div>
  )
}
