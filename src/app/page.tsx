import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      
      {/* Testimonial Section - Simple Version */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[#990000] font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold mb-16">What Our <span className="text-[#990000]">Students</span> Say</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", role: "B.Tech Student", text: "The faculty at JG University is incredibly supportive. The hands-on projects helped me land my dream internship." },
              { name: "Ananya Patel", role: "MBA Alumni", text: "The entrepreneurial ecosystem here is unmatched. I started my own venture while studying, thanks to the mentorship." },
              { name: "Ishaan Mehta", role: "B.Des Student", text: "Creative freedom and modern labs made my design journey amazing. Truly a new age university." }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow text-left bg-slate-50/50">
                <p className="text-slate-600 mb-6 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#990000]/10 rounded-full flex items-center justify-center font-bold text-[#990000]">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#990000] to-[#660000] rounded-[2rem] md:rounded-[3rem] p-10 md:p-24 overflow-hidden text-center text-white shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to Shape Your Future?
              </h2>
              <p className="text-base md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Join JG University and be part of a vibrant community dedicated to innovation, excellence, and global impact.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-[#990000] rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-xl">
                  Apply Online
                </button>
                <button className="px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-colors">
                  Contact Counselor
                </button>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#f2a900]/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
