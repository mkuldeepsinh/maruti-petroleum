'use client';

import Link from "next/link";
import { Fuel, Zap, TrendingUp, Shield, Clock, MapPin, Droplets } from "lucide-react";

const fuelData = [
  {
    id: "petrol",
    title: "Premium Petrol",
    description:
      "High-quality Indian Oil petrol for smooth and efficient performance. Available 24×7 with accurate dispensing, quick service, and digital payment options.",
    price: "₹95.93 / litre",
    slug: "petrol",
    icon: Fuel,
    color: "from-orange-500 to-red-500",
    features: ["High Octane", "Better Mileage", "Engine Protection"]
  },
  {
    id: "diesel",
    title: "Premium Diesel",
    description:
      "Reliable Indian Oil diesel for commercial, agricultural, and private use. Trusted by thousands for mileage, quality, and service excellence.",
    price: "₹91.60 / litre",
    slug: "diesel",
    icon: Zap,
    color: "from-blue-500 to-indigo-500",
    features: ["High Performance", "Low Emissions", "Cost Effective"]
  },
  {
    id: "oil",
    title: "Premium Engine Oil",
    description:
      "High-performance engine oils for all vehicle types. Protect your engine with our range of synthetic and mineral oils that ensure optimal performance and longevity.",
    price: "Contact for Pricing",
    slug: "oil",
    icon: Droplets,
    color: "from-green-500 to-emerald-500",
    features: ["Engine Protection", "Extended Life", "Optimal Performance"]
  }
];

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All fuels meet Indian Oil's stringent quality standards"
  },
  {
    icon: Clock,
    title: "24×7 Service",
    description: "Round the clock availability for your convenience"
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Conveniently located in Devgana, Sihor, Bhavnagar"
  },
  {
    icon: TrendingUp,
    title: "Best Prices",
    description: "Competitive pricing with transparent billing"
  }
];

function FeaturedCourses() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-6">
            <Fuel className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-4">
            WHY CUSTOMERS CHOOSE US
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Fuel. <span className="text-blue-600">Local Service.</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everyday reliability with modern infrastructure and transparent operations. 
            We ensure a smooth and trustworthy fueling experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Fuels Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of high-quality fuels and lubricants designed for optimal performance and efficiency
          </p>
        </div>

        {/* Fuel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {fuelData.map((fuel) => (
            <div key={fuel.id} className="group">
              <div className="relative overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Header */}
                <div className={`bg-gradient-to-r ${fuel.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <fuel.icon className="w-12 h-12 mb-4" />
                      <h4 className="text-2xl font-bold mb-2">{fuel.title}</h4>
                      <p className="text-xl font-semibold opacity-90">{fuel.price}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {fuel.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {fuel.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Fuel Your Journey?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Experience the difference with Maruti Petroleum's premium fuels, oils, and exceptional service
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
