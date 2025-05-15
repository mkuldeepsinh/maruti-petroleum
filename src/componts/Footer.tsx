"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock,Send } from "lucide-react"
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
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gray-400 after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 pb-3">
                Maruti Petroleum
              </h3>
              <p className="text-gray-300 mb-6 max-w-xs">
                Providing quality petroleum products and services. Trusted by businesses and individuals across the
                region.
              </p>
              {/* <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div> */}
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gray-400 after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 pb-3">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">+91 73834 85353</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                  <a href="mailto:mkuldeepsinh9@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    marutipetroleum@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Maruti Petroleum, Devgana
                    <br />
                    Sihor, Bhavnagar, Gujarat - 364240
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">24×7 Service</span>
                </li>
              </ul>
            </div>

            {/* Suggestions & Queries Form */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gray-400 after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 pb-3">
                Suggestions & Queries
              </h3>
              <p className="text-gray-300 mb-4 max-w-xs">Have a question or suggestion? Let us know below.</p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="bg-gray-900 border-gray-700 text-white pl-3 pr-3 py-2 rounded-md w-full focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Your Suggestion or Query"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="bg-gray-900 border border-gray-700 rounded-md p-3 text-white w-full focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="bg-gray-900 border border-green-500 rounded-md p-4 text-center w-full">
                  <p className="text-green-400 font-medium">✅ Message sent successfully!</p>
                  <p className="text-gray-300 text-sm mt-1">We will get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {currentYear} Maruti Petroleum. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
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
