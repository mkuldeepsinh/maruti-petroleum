"use client"
import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, Fuel, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Footer() {
  const currentYear = new Date().getFullYear()

  const [form, setForm] = useState({ name: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { name, message } = form

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      })

      if (!res.ok) throw new Error("Network response was not ok")

      setForm({ name: "", message: "" })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Fuel className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Maruti Petroleum</h3>
                <p className="text-blue-600 font-medium">Premium Indian Oil Services</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Your trusted partner for high-quality petrol and diesel. We are committed to delivering 
              efficient, safe, and customer-focused service across commercial, industrial, and retail sectors.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">24×7 Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-gray-600">Best Prices</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Phone className="w-4 h-4 text-white" />
              </div>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">+91 73834 85353</p>
                  <p className="text-sm text-gray-600">24×7 Support</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:marutipetroleum@gmail.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                    marutipetroleum@gmail.com
                  </a>
                  <p className="text-sm text-gray-600">Get in touch</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Maruti Petroleum, Devgana</p>
                  <p className="text-sm text-gray-600">Sihor, Bhavnagar, Gujarat - 364240</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">24×7 Service</p>
                  <p className="text-sm text-gray-600">Always open</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Send className="w-4 h-4 text-white" />
              </div>
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-4 text-sm">Have a question or suggestion? Let us know below.</p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="bg-white border border-gray-200 rounded-xl p-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <p className="text-green-700 font-medium">✅ Message sent successfully!</p>
                <p className="text-green-600 text-sm mt-1">We will get back to you soon.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Fuel className="w-3 h-3 text-white" />
              </div>
              <p className="text-gray-600 text-sm">
                &copy; {currentYear} Maruti Petroleum. All rights reserved.
              </p>
            </div>
            <div>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
