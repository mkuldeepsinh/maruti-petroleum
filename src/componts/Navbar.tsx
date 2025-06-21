"use client";
import React, { useState, useEffect } from "react";
import { Fuel, Phone, MapPin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Update active section based on scroll position
            const sections = ["home", "fuels", "location", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: "home", label: "Home", href: "#home" },
        { id: "fuels", label: "Fuels", href: "#fuels" },
        { id: "location", label: "Location", href: "#location" },
        { id: "contact", label: "Contact", href: "#contact" }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-4 left-4 right-4 z-50"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className={`relative rounded-3xl transition-all duration-500 ${
                            scrolled 
                                ? "bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/50" 
                                : "bg-white/90 backdrop-blur-xl border border-gray-200/30"
                        }`}
                        style={{
                            borderRadius: '24px',
                            boxShadow: scrolled 
                                ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                                : '0 8px 32px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div className="flex items-center justify-between h-16 lg:h-20 px-6 lg:px-8">
                            {/* Logo */}
                            <motion.div 
                                className="flex items-center space-x-3"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                                    scrolled 
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg" 
                                        : "bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
                                }`}>
                                    <Fuel className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                                        scrolled ? "text-gray-900" : "text-gray-900"
                                    }`}>
                                        Maruti Petroleum
                                    </h1>
                                    <p className={`text-xs lg:text-sm transition-colors duration-300 ${
                                        scrolled ? "text-gray-600" : "text-gray-600"
                                    }`}>
                                        Premium Indian Oil Services
                                    </p>
                                </div>
                            </motion.div>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative"
                                    >
                                        <button
                                            onClick={() => scrollToSection(item.href)}
                                            className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 group ${
                                                activeSection === item.id
                                                    ? "text-blue-600 bg-blue-50"
                                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                            }`}
                                        >
                                            {activeSection === item.id && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 rounded-2xl bg-blue-50 border border-blue-200 transition-colors duration-300"
                                                    initial={false}
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                            <span className="relative z-10">{item.label}</span>
                                        </button>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Contact Info */}
                            <div className="hidden lg:flex items-center space-x-4">
                                <motion.a
                                    href="tel:+917383485353"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition-all duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm font-medium">Call Now</span>
                                </motion.a>
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center">
                                    <motion.span
                                        animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                        className="w-5 h-0.5 bg-current transition-all duration-300"
                                    />
                                    <motion.span
                                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                        className="w-5 h-0.5 bg-current mt-1 transition-all duration-300"
                                    />
                                    <motion.span
                                        animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                        className="w-5 h-0.5 bg-current mt-1 transition-all duration-300"
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 left-4 right-4 lg:hidden z-40"
                    >
                        <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden">
                            <div className="px-6 py-6 space-y-4">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                                            activeSection === item.id
                                                ? "text-blue-600 bg-blue-50"
                                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                        }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <div className="pt-4 border-t border-gray-200">
                                    <motion.a
                                        href="tel:+917383485353"
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700 transition-colors duration-300"
                                    >
                                        <Phone className="w-4 h-4" />
                                        <span>Call Now</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Contact Bar (Mobile) */}
            <div className="fixed bottom-4 left-4 right-4 lg:hidden z-40">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-4"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                                <Fuel className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">Maruti Petroleum</p>
                                <p className="text-xs text-gray-600">24×7 Service Available</p>
                            </div>
                        </div>
                        <motion.a
                            href="tel:+917383485353"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                        >
                            Call Now
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Navbar; 