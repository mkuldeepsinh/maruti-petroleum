"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [{
    title: "Petrol",
    description:
      "At Maruti Petroleum, we provide premium quality Indian Oil petrol to ensure your vehicle delivers top performance and efficiency. With consistent supply, accurate measurements, and trusted service, we are your go-to destination for clean and reliable fuel. Fill up with confidence—only at Maruti Petroleum.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--orange-400))] text-white text-xl font-semibold">
        Indian Oil Petrol by Maruti Petroleum
      </div>
    ),
  },
  {
    title: "Diesel",
    description:
      "Power your journey with high-grade Indian Oil diesel from Maruti Petroleum. Whether for commercial transport, farming, or daily driving, our diesel meets the highest standards for performance and mileage. Dependable supply, transparent service, and customer-first approach—that’s the Maruti Petroleum promise.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--slate-600),var(--yellow-400))] text-white text-xl font-semibold">
        Indian Oil Diesel by Maruti Petroleum
      </div>
    ),
  }]
  
function Stickyscroll() {
    return (
        <div className="w-full py-3">
            <StickyScroll content={content} />
        </div>
    )
}

export default Stickyscroll