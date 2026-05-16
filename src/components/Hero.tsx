"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, BookOpen, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="JG University Campus"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#990000]/20 border border-[#990000]/30 text-[#ff4d4d] text-xs md:text-sm font-semibold mb-6"
            >
              <Star size={14} fill="currentColor" className="md:w-4 md:h-4" />
              <span>Admissions Open 2026-27</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Empowering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] via-[#f2a900] to-[#ff4d4d] bg-[length:200%_auto] animate-gradient">
                Next-Gen Leaders
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              JG University provides a futuristic learning ecosystem that integrates 
              technology, creativity, and entrepreneurship to shape tomorrow&apos;s world.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-[#990000] text-white rounded-full font-bold text-base md:text-lg shadow-2xl shadow-[#990000]/30 flex items-center justify-center gap-2 group"
              >
                Explore Programs
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-base md:text-lg border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Play size={14} fill="white" className="md:w-4 md:h-4" />
                </div>
                Virtual Tour
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 mt-16 border-t border-white/10 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-xs md:text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-1">
                  <Users size={12} className="md:w-3.5 md:h-3.5" /> Students
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-xs md:text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-1">
                  <BookOpen size={12} className="md:w-3.5 md:h-3.5" /> Courses
                </div>
              </div>
              <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs md:text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-1">
                  <Star size={12} className="md:w-3.5 md:h-3.5" /> Placement
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements / Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative h-[600px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#990000]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-10 right-10 w-32 h-32 glass rounded-3xl animate-bounce-slow flex items-center justify-center flex-col gap-2 p-4">
               <div className="w-10 h-10 bg-[#f2a900] rounded-full flex items-center justify-center">
                  <Users className="text-white" size={20} />
               </div>
               <span className="text-[10px] text-slate-800 font-bold uppercase text-center">Global Community</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-white rounded-full" />
      </motion.div>
    </section>
  );
}
