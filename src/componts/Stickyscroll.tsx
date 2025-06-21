"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Fuel, Zap, Shield, Clock, TrendingUp } from "lucide-react";

const content = [
  {
    title: "Premium Petrol",
    subtitle: "High-Octane Performance",
    description:
      "At Maruti Petroleum, we provide premium quality Indian Oil petrol to ensure your vehicle delivers top performance and efficiency. With consistent supply, accurate measurements, and trusted service, we are your go-to destination for clean and reliable fuel.",
    features: ["High Octane Rating", "Better Mileage", "Engine Protection", "Clean Combustion"],
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white p-8 rounded-3xl">
        <div className="text-center">
          <Fuel className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Premium Petrol</h3>
          <p className="text-lg opacity-90">₹95.93 / litre</p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Premium Diesel",
    subtitle: "Power & Efficiency",
    description:
      "Power your journey with high-grade Indian Oil diesel from Maruti Petroleum. Whether for commercial transport, farming, or daily driving, our diesel meets the highest standards for performance and mileage. Dependable supply, transparent service, and customer-first approach.",
    features: ["High Performance", "Low Emissions", "Cost Effective", "Reliable Supply"],
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white p-8 rounded-3xl">
        <div className="text-center">
          <Zap className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Premium Diesel</h3>
          <p className="text-lg opacity-90">₹91.60 / litre</p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Why Choose Us",
    subtitle: "Trusted Service",
    description:
      "Maruti Petroleum stands for quality, reliability, and customer satisfaction. With modern infrastructure, transparent operations, and 24×7 availability, we ensure a smooth and trustworthy fueling experience for all our customers.",
    features: ["24×7 Service", "Quality Assured", "Modern Infrastructure", "Transparent Pricing"],
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white p-8 rounded-3xl">
        <div className="text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Trusted Service</h3>
          <p className="text-lg opacity-90">Always at your service</p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  }
];
  
function Stickyscroll() {
    return (
        <div className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Experience <span className="text-blue-600">Premium Fuels</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the difference with our high-quality Indian Oil fuels designed for optimal performance and efficiency
                    </p>
                </div>
                <StickyScroll content={content} />
            </div>
        </div>
    )
}

export default Stickyscroll