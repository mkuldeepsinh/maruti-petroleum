import Link from "next/link"
import { Fuel, Shield, Clock } from "lucide-react"



function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex flex-col items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-32 md:pt-24 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-6">
            <Fuel className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
            Maruti Petroleum
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-700">
          Premium <span className="text-blue-600">Indian Oil</span> Services
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
          Your trusted partner for high-quality petrol and diesel. We are committed to delivering 
          <span className="font-semibold text-blue-600"> efficient, safe, and customer-focused service</span> across 
          commercial, industrial, and retail sectors.
        </p>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
            <Clock className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 font-medium">24×7 Service</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="text-gray-700 font-medium">Quality Assured</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
            <Fuel className="w-6 h-6 text-orange-600" />
            <span className="text-gray-700 font-medium">Modern Infrastructure</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={"/#fuels"}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Fuels
          </Link>
          
          <Link
            href={"/#contact"}
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection