"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/culture", label: "符道文化" },
  { href: "/services", label: "符箓服务" },
  { href: "/fashi", label: "法事" },
  { href: "/cases", label: "真实案例" },
  { href: "/contact", label: "联系我们" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#8B4513]/95 backdrop-blur-md shadow-lg"
          : "bg-[#8B4513]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="hidden lg:flex justify-between items-center py-2 text-xs border-b border-[#A0522D]/50">
          <span className="text-amber-200">传承道家祝由智慧 · 弘扬符道文化</span>
          <div className="flex gap-4 text-amber-100">
            <span>微信: youfuzhiren</span>
            <span>|</span>
            <span>邮箱: hello@yofuzhiren.com</span>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center border-3 border-amber-300 shadow-lg"
            >
              <span className="text-2xl lg:text-3xl font-bold text-white">符</span>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white tracking-wider">有符之人</h1>
              <p className="text-amber-200 text-xs hidden lg:block">符道文化传承中心</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-amber-300 transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="w-6 h-0.5 bg-white block mb-1.5"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-0.5 bg-white block mb-1.5"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="w-6 h-0.5 bg-white block"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#8B4513] border-t border-[#A0522D]"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:bg-[#A0522D] hover:text-amber-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
