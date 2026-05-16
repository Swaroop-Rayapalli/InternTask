"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  {
    icon: <Target className="text-[#990000]" />,
    title: "Industry Aligned",
    desc: "Curriculum designed in collaboration with global industry leaders."
  },
  {
    icon: <Lightbulb className="text-[#990000]" />,
    title: "Innovative Learning",
    desc: "Hands-on projects, workshops, and real-world problem solving."
  },
  {
    icon: <TrendingUp className="text-[#990000]" />,
    title: "Career Growth",
    desc: "Dedicated placement cell and mentorship for future entrepreneurs."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/classroom.png"
                alt="Modern Learning"
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#f2a900]/10 rounded-full blur-3xl z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#990000]/10 rounded-full blur-2xl z-0" />
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20 hidden md:block border-[#990000]/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#990000] rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">UGC Recognized</div>
                  <div className="text-sm text-slate-500 text-nowrap">State Private University</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#990000] font-bold tracking-widest uppercase text-sm mb-4">About the University</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              A New Era of <span className="text-[#990000]">Excellence</span> in Education
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              JG University is not just an institution; it&apos;s a launchpad for the next generation of thinkers, doers, and leaders. 
              We blend traditional academic rigor with modern technological fluency to provide an education that remains relevant in an ever-changing world.
            </p>

            <div className="space-y-6">
              {values.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                  <div className="w-12 h-12 shrink-0 bg-[#990000]/10 rounded-xl flex items-center justify-center group-hover:bg-[#990000] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-2 text-[#990000] font-bold group w-full lg:w-auto"
            >
              Learn more about our vision
              <TrendingUp size={20} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
