"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  {
    name: "Programmes",
    href: "#programmes",
    dropdown: [
      { name: "Technology", href: "#tech" },
      { name: "Management", href: "#management" },
      { name: "Design", href: "#design" },
      { name: "Law", href: "#law" },
    ],
  },
  { name: "Campus", href: "#campus" },
  { name: "Admissions", href: "#admissions" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "pt-4" : "pt-6"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
          isScrolled ? "glass shadow-xl" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#990000] rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <GraduationCap size={24} />
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-xl leading-none", isScrolled ? "text-slate-900" : "text-white")}>
              JG UNIVERSITY
            </span>
            <span className={cn("text-[10px] tracking-widest font-medium uppercase", isScrolled ? "text-[#990000]" : "text-slate-300")}>
              New Age Education
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 font-medium transition-colors hover:text-[#990000]",
                  isScrolled ? "text-slate-700" : "text-white/90"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 min-w-[200px]">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#990000] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#apply"
            className="bg-[#990000] hover:bg-[#770000] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-[#990000]/20 hover:scale-105 active:scale-95"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2 rounded-lg", isScrolled ? "text-slate-900" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 md:hidden bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 z-[100]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-800 font-semibold text-lg hover:text-[#990000]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-200" />
              <Link
                href="#apply"
                className="bg-[#990000] text-white text-center py-4 rounded-2xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply for 2026-27
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
