"use client";

import { motion } from "framer-motion";
import { 
  Laptop, 
  Briefcase, 
  Palette, 
  Scale, 
  Microscope, 
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "School of Technology",
    desc: "Master AI, Data Science, and Software Engineering with hands-on labs.",
    icon: <Laptop size={32} />,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    courses: ["B.Tech", "M.Tech", "BCA", "MCA"]
  },
  {
    title: "School of Management",
    desc: "Develop leadership and entrepreneurial skills for the global market.",
    icon: <Briefcase size={32} />,
    color: "from-[#990000] to-[#ff4d4d]",
    bg: "bg-red-50",
    courses: ["BBA", "MBA", "B.Com", "M.Com"]
  },
  {
    title: "School of Design",
    desc: "Explore visual communication, product design, and creative thinking.",
    icon: <Palette size={32} />,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    courses: ["B.Des", "M.Des", "Visual Arts"]
  },
  {
    title: "School of Law",
    desc: "Rigorous legal training for judicial and corporate law careers.",
    icon: <Scale size={32} />,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    courses: ["LLB", "BBA LLB", "LLM"]
  },
  {
    title: "School of Science",
    desc: "Advanced research and practical applications in life sciences.",
    icon: <Microscope size={32} />,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    courses: ["B.Sc", "M.Sc", "Applied Science"]
  },
  {
    title: "Security Studies",
    desc: "National security, cyber defense, and strategic policy studies.",
    icon: <ShieldCheck size={32} />,
    color: "from-slate-600 to-slate-800",
    bg: "bg-slate-100",
    courses: ["Diploma", "Certifications"]
  }
];

export default function Programs() {
  return (
    <section id="programmes" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#990000] font-bold tracking-widest uppercase text-sm mb-4">Our Programs</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Diverse Schools for a <span className="text-[#990000]">Multi-Dimensional</span> Future
            </h3>
            <p className="text-slate-600">
              Choose from a wide range of industry-focused programs designed to give you a competitive edge.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
                program.color
              )} />

              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-br shadow-lg",
                program.color
              )}>
                {program.icon}
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#990000] transition-colors">
                {program.title}
              </h4>
              <p className="text-slate-600 mb-6 line-clamp-2">
                {program.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {program.courses.map((course) => (
                  <span key={course} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {course}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 font-bold text-[#990000] text-sm group-hover:gap-3 transition-all py-2 -ml-2 px-2 rounded-lg hover:bg-[#990000]/5">
                Explore Curriculum <ArrowUpRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
