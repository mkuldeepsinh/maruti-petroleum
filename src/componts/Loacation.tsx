import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';

function Location() {
  const googleMapsUrl = "https://maps.google.com/?q=Maruti+Petroleum+Devgana+Sihor+Bhavnagar";
  
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-6">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit <span className="text-blue-600">Maruti Petroleum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in Devgana, Sihor, Bhavnagar. Easy access with ample parking space and modern facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.0658976732193!2d72.00807281021348!3d21.62892756681336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f550025bc1753%3A0x8e5c98921f485858!2sMaruti%20Petroleum!5e1!3m2!1sen!2sin!4v1747328854505!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              ></iframe>
              
              {/* Floating Directions Button */}
              <div className="absolute top-4 right-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Directions
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-600">Open Now</span>
              </div>
              <p className="text-sm text-gray-600">24×7 Service Available</p>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Maruti Petroleum, Devgana<br />
                    Sihor, Bhavnagar, Gujarat - 364240<br />
                    India
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Get Directions on Google Maps
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-sm text-gray-600">24×7 Support</p>
                  </div>
                </div>
                <a href="tel:+917383485353" className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  +91 73834 85353
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-sm text-gray-600">Get in touch</p>
                  </div>
                </div>
                <a href="mailto:marutipetroleum@gmail.com" className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  marutipetroleum@gmail.com
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Operating Hours</h4>
                  <p className="text-sm text-gray-600">Always at your service</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Monday - Sunday</span>
                  <span className="font-semibold text-green-600">24×7 Open</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Holidays</span>
                  <span className="font-semibold text-green-600">Open</span>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-3">
                <Navigation className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Getting Here</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Located on the main road in Devgana, Sihor. Easy access from Bhavnagar city center. 
                Ample parking space available for all vehicle types.
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Open in Google Maps
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Visit Us?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Experience our premium fuels and exceptional service. We&apos;re here to fuel your journey 24×7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+917383485353"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </a>
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <Navigation className="mr-2 w-4 h-4" />
                  Get Directions
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
