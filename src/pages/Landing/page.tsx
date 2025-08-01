"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Leaf,
  Coins,
  Smartphone,
  BarChart3,
  Users,
  Recycle,
  Shield,
  Zap,
  Target,
  Globe,
  Award,
  TrendingUp,
  MapPin,
  Star,
  Play,
  Plus,
  Minus,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function EcoChainHomePage() {
  const [activeStep, setActiveStep] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [stats, setStats] = useState({
    users: 0,
    rewards: 0,
    waste: 0,
    cities: 0,
  })

  // Animated counter effect
  useEffect(() => {
    const timer = setInterval(() => {
      setStats((prev) => ({
        users: prev.users < 50000 ? prev.users + 1000 : 50000,
        rewards: prev.rewards < 2500000 ? prev.rewards + 50000 : 2500000,
        waste: prev.waste < 150000 ? prev.waste + 3000 : 150000,
        cities: prev.cities < 25 ? prev.cities + 1 : 25,
      }))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Auto-rotate how it works steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const howItWorksSteps = [
    {
      step: "01",
      title: "SCAN QR CODE",
      description: "Open the EcoChain app and scan the QR code on any smart trash bin",
      icon: Smartphone,
      color: "bg-green-400",
    },
    {
      step: "02",
      title: "DISPOSE WASTE",
      description: "Properly sort and dispose your waste in the appropriate compartment",
      icon: Recycle,
      color: "bg-emerald-500",
    },
    {
      step: "03",
      title: "AI VERIFICATION",
      description: "Our AI system verifies the waste type and quantity using IoT sensors",
      icon: Zap,
      color: "bg-teal-400",
    },
    {
      step: "04",
      title: "EARN REWARDS",
      description: "Receive EcoCoins instantly to your blockchain wallet as rewards",
      icon: Coins,
      color: "bg-lime-400",
    },
  ]

  const testimonials = [
    {
      name: "SARAH CHEN",
      role: "ENVIRONMENTAL ACTIVIST",
      content:
        "ECOCHAIN HAS REVOLUTIONIZED HOW I THINK ABOUT WASTE DISPOSAL. EARNING REWARDS WHILE HELPING THE PLANET IS GENIUS!",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      location: "SAN FRANCISCO",
    },
    {
      name: "MIKE RODRIGUEZ",
      role: "CITY PLANNER",
      content:
        "THE DATA INSIGHTS FROM ECOCHAIN HELP US OPTIMIZE WASTE COLLECTION ROUTES AND REDUCE OPERATIONAL COSTS BY 40%.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      location: "NEW YORK",
    },
    {
      name: "EMMA JOHNSON",
      role: "COLLEGE STUDENT",
      content: "I'VE EARNED OVER 500 ECOCOINS THIS MONTH! IT'S AMAZING HOW SMALL ACTIONS CAN MAKE A BIG DIFFERENCE.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      location: "BOSTON",
    },
  ]

  const faqs = [
    {
      question: "HOW DO I START USING ECOCHAIN?",
      answer:
        "SIMPLY DOWNLOAD THE ECOCHAIN APP, CREATE YOUR ACCOUNT, AND START SCANNING QR CODES ON SMART TRASH BINS TO BEGIN EARNING REWARDS.",
    },
    {
      question: "WHAT CAN I DO WITH ECOCOINS?",
      answer:
        "ECOCOINS CAN BE EXCHANGED FOR REAL MONEY, USED TO PURCHASE ECO-FRIENDLY PRODUCTS, OR DONATED TO ENVIRONMENTAL CAUSES.",
    },
    {
      question: "HOW DOES THE AI VERIFICATION WORK?",
      answer:
        "OUR ADVANCED AI SYSTEM USES COMPUTER VISION AND IOT SENSORS TO IDENTIFY WASTE TYPE, QUANTITY, AND PROPER SORTING TO ENSURE FAIR REWARDS.",
    },
    {
      question: "IS MY DATA SECURE ON THE BLOCKCHAIN?",
      answer:
        "ABSOLUTELY! ALL TRANSACTIONS AND DATA ARE SECURED USING BLOCKCHAIN TECHNOLOGY, ENSURING TRANSPARENCY AND IMMUTABILITY.",
    },
    {
      question: "WHICH CITIES SUPPORT ECOCHAIN?",
      answer:
        "ECOCHAIN IS CURRENTLY AVAILABLE IN 25+ CITIES WORLDWIDE, WITH NEW LOCATIONS BEING ADDED MONTHLY. CHECK OUR APP FOR AVAILABILITY.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-green-400 p-4 sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-black p-2 border-2 border-black">
              <Leaf className="h-6 w-6 text-green-400" />
            </div>
            <div className="text-2xl font-black uppercase tracking-tight">ECOCHAIN</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-bold uppercase text-sm hover:underline decoration-4">
              ABOUT
            </a>
            <a href="#how-it-works" className="font-bold uppercase text-sm hover:underline decoration-4">
              HOW IT WORKS
            </a>
            <a href="#stats" className="font-bold uppercase text-sm hover:underline decoration-4">
              STATS
            </a>
            <a href="#contact" className="font-bold uppercase text-sm hover:underline decoration-4">
              CONTACT
            </a>
          </nav>
          <Button className="bg-black text-white border-4 border-black hover:bg-white hover:text-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            GET APP
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="bg-green-400 border-4 border-black px-4 py-2 inline-block mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-black uppercase text-sm">🌱 SMART CITY REVOLUTION</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6">
                EARN
                <br />
                <span className="text-green-600">CRYPTO</span>
                <br />
                SAVE PLANET
              </h1>
              <p className="text-xl font-bold mb-8 max-w-lg">
                TRANSFORM WASTE DISPOSAL INTO REWARDS WITH AI-POWERED SMART TRASH BINS AND BLOCKCHAIN TECHNOLOGY.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 text-white border-4 border-black hover:bg-black font-black uppercase text-lg px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
                  DOWNLOAD APP
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-4 border-black bg-white text-black hover:bg-green-400 font-black uppercase text-lg px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  WATCH DEMO
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="bg-green-500 border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white border-4 border-black p-6 transform -rotate-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Coins className="h-12 w-12 text-green-600" />
                    <div>
                      <div className="text-3xl font-black">2.5M+</div>
                      <div className="font-bold uppercase text-sm">ECOCOINS EARNED</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-green-600">+15% THIS WEEK</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-lime-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <Leaf className="h-8 w-8" fill="black" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-emerald-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <Recycle className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-black text-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16">
            ECOCHAIN <span className="text-green-400">IMPACT</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: stats.users.toLocaleString() + "+",
                label: "ACTIVE USERS",
                icon: Users,
                color: "bg-green-400",
              },
              {
                number: "$" + stats.rewards.toLocaleString(),
                label: "REWARDS DISTRIBUTED",
                icon: Coins,
                color: "bg-emerald-500",
              },
              {
                number: stats.waste.toLocaleString() + " KG",
                label: "WASTE PROCESSED",
                icon: Recycle,
                color: "bg-teal-400",
              },
              {
                number: stats.cities + "+",
                label: "CITIES WORLDWIDE",
                icon: Globe,
                color: "bg-lime-400",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`${stat.color} border-4 border-white p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-center hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300`}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-black" />
                <div className="text-4xl font-black mb-2 text-black">{stat.number}</div>
                <div className="font-bold uppercase text-sm text-black">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-green-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-5xl font-black uppercase mb-8">
                ABOUT <span className="text-green-600">ECOCHAIN</span>
              </h2>
              <p className="text-xl font-bold mb-6">
                ECOCHAIN IS THE WORLD'S FIRST BLOCKCHAIN-POWERED WASTE MANAGEMENT ECOSYSTEM THAT REWARDS USERS FOR
                PROPER WASTE DISPOSAL.
              </p>
              <p className="text-lg font-semibold mb-8 text-gray-700">
                Using cutting-edge AI, IoT sensors, and blockchain technology, we're creating smarter cities where
                environmental responsibility is financially rewarded.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "SECURE", desc: "BLOCKCHAIN PROTECTED" },
                  { icon: Zap, title: "INSTANT", desc: "REAL-TIME REWARDS" },
                  { icon: Globe, title: "GLOBAL", desc: "WORLDWIDE NETWORK" },
                  { icon: Award, title: "VERIFIED", desc: "AI-POWERED VALIDATION" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-green-400 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-black uppercase">{feature.title}</div>
                      <div className="font-bold text-sm text-gray-600">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <Card className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center mb-6">
                  <div className="bg-green-400 border-4 border-black p-4 inline-block mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Leaf className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2">OUR MISSION</h3>
                  <p className="font-bold">
                    TO CREATE A SUSTAINABLE FUTURE WHERE EVERY PIECE OF WASTE BECOMES AN OPPORTUNITY FOR POSITIVE
                    ENVIRONMENTAL AND ECONOMIC IMPACT.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-green-400 text-black border-4 border-white p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300">
              <Target className="h-12 w-12 mb-6" />
              <h3 className="text-3xl font-black uppercase mb-4">OUR VISION</h3>
              <p className="font-bold text-lg">
                A WORLD WHERE SMART CITIES SEAMLESSLY INTEGRATE ENVIRONMENTAL RESPONSIBILITY WITH ECONOMIC INCENTIVES,
                CREATING A CIRCULAR ECONOMY THAT BENEFITS EVERYONE.
              </p>
            </Card>
            <Card className="bg-lime-400 text-black border-4 border-white p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300">
              <Globe className="h-12 w-12 mb-6" />
              <h3 className="text-3xl font-black uppercase mb-4">OUR MISSION</h3>
              <p className="font-bold text-lg">
                TO REVOLUTIONIZE WASTE MANAGEMENT THROUGH INNOVATIVE TECHNOLOGY, MAKING ENVIRONMENTAL STEWARDSHIP
                REWARDING AND ACCESSIBLE TO ALL.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why EcoChain */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16">
            WHY CHOOSE <span className="text-green-600">ECOCHAIN?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Coins,
                title: "EARN WHILE YOU HELP",
                description:
                  "GET REWARDED WITH ECOCOINS FOR EVERY PROPER WASTE DISPOSAL. TURN YOUR ENVIRONMENTAL ACTIONS INTO REAL VALUE.",
                color: "bg-green-400",
              },
              {
                icon: Zap,
                title: "AI-POWERED VERIFICATION",
                description: "ADVANCED AI ENSURES FAIR REWARDS BY ACCURATELY DETECTING WASTE TYPE AND PROPER SORTING.",
                color: "bg-emerald-500",
              },
              {
                icon: Shield,
                title: "BLOCKCHAIN SECURITY",
                description: "ALL TRANSACTIONS ARE SECURED ON THE BLOCKCHAIN, ENSURING TRANSPARENCY AND IMMUTABILITY.",
                color: "bg-teal-400",
              },
              {
                icon: BarChart3,
                title: "REAL-TIME ANALYTICS",
                description:
                  "TRACK YOUR IMPACT WITH DETAILED ANALYTICS AND SEE HOW YOU'RE CONTRIBUTING TO A CLEANER WORLD.",
                color: "bg-lime-400",
              },
              {
                icon: Globe,
                title: "GLOBAL NETWORK",
                description: "JOIN A WORLDWIDE COMMUNITY OF ECO-WARRIORS MAKING A DIFFERENCE IN THEIR CITIES.",
                color: "bg-green-500",
              },
              {
                icon: TrendingUp,
                title: "GROWING REWARDS",
                description: "AS THE NETWORK GROWS, SO DO YOUR EARNING OPPORTUNITIES AND ENVIRONMENTAL IMPACT.",
                color: "bg-emerald-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`${feature.color} border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group`}
              >
                <feature.icon className="h-12 w-12 mb-4 text-black group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-black uppercase mb-4 text-black">{feature.title}</h3>
                <p className="font-bold text-black text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-black text-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16">
            HOW <span className="text-green-400">ECOCHAIN</span> WORKS
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card
                key={index}
                className={`${step.color} border-4 border-white p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-center transition-all duration-500 ${
                  activeStep === index
                    ? "scale-105 translate-x-2 translate-y-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                    : "hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                }`}
              >
                <div className="text-4xl font-black mb-4 text-black">{step.step}</div>
                <step.icon
                  className={`h-12 w-12 mx-auto mb-4 text-black transition-transform duration-300 ${
                    activeStep === index ? "scale-110" : ""
                  }`}
                />
                <h3 className="text-xl font-black uppercase mb-3 text-black">{step.title}</h3>
                <p className="font-bold text-black text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-green-400 text-black border-4 border-white hover:bg-white hover:text-black font-black uppercase text-lg px-8 py-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              GET STARTED TODAY
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16">
            WHAT USERS <span className="text-green-600">SAY</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-black"
                  />
                  <div>
                    <h4 className="font-black uppercase">{testimonial.name}</h4>
                    <p className="font-bold text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 text-green-600" />
                      <span className="text-xs font-bold text-green-600">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-bold text-sm italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16">
            FREQUENTLY <span className="text-green-300">ASKED</span> QUESTIONS
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white text-black border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-black uppercase">{faq.question}</h3>
                  {openFaq === index ? (
                    <Minus className="h-6 w-6 flex-shrink-0" />
                  ) : (
                    <Plus className="h-6 w-6 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t-4 border-black bg-green-50">
                    <p className="font-bold pt-4">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 text-white">
            JOIN THE
            <br />
            <span className="text-black">ECO REVOLUTION</span>
          </h2>
          <p className="text-xl font-bold mb-12 text-white max-w-2xl mx-auto">
            START EARNING REWARDS TODAY WHILE MAKING A POSITIVE IMPACT ON THE ENVIRONMENT. DOWNLOAD ECOCHAIN NOW!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
            <Input
              placeholder="YOUR EMAIL ADDRESS"
              className="border-4 border-black bg-white text-black placeholder:text-gray-600 font-bold uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <Button className="bg-black text-white border-4 border-black hover:bg-white hover:text-black font-black uppercase px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
              GET NOTIFIED
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black border-4 border-black hover:bg-black hover:text-white font-black uppercase text-lg px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              📱 DOWNLOAD FOR iOS
            </Button>
            <Button className="bg-white text-black border-4 border-black hover:bg-black hover:text-white font-black uppercase text-lg px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              🤖 DOWNLOAD FOR ANDROID
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-green-400 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-400 p-2 border-2 border-white">
                  <Leaf className="h-6 w-6 text-black" />
                </div>
                <div className="text-3xl font-black uppercase">ECOCHAIN</div>
              </div>
              <p className="font-bold">REVOLUTIONIZING WASTE MANAGEMENT THROUGH BLOCKCHAIN AND AI TECHNOLOGY.</p>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase mb-4">PRODUCT</h3>
              <ul className="space-y-2 font-bold">
                <li>
                  <a href="#" className="hover:text-green-400">
                    HOW IT WORKS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    SMART BINS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    MOBILE APP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    BLOCKCHAIN
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase mb-4">COMPANY</h3>
              <ul className="space-y-2 font-bold">
                <li>
                  <a href="#" className="hover:text-green-400">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    CAREERS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    PRESS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    PARTNERS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase mb-4">SUPPORT</h3>
              <div className="space-y-2 font-bold">
                <div>HELLO@ECOCHAIN.IO</div>
                <div>+1 (555) ECO-CHAIN</div>
                <div>24/7 SUPPORT</div>
              </div>
            </div>
          </div>
          <div className="border-t-4 border-green-400 mt-12 pt-8 text-center font-bold uppercase">
            © 2024 ECOCHAIN - BUILDING A SUSTAINABLE FUTURE
          </div>
        </div>
      </footer>
    </div>
  )
}
