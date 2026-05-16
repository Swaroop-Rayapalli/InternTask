"use client";

import Link from "next/link";
import { 
  Globe, 
  Share2, 
  MessageSquare, 
  Link as LinkIcon, 
  Mail, 
  Phone, 
  MapPin,
  GraduationCap
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#990000] rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                JG UNIVERSITY
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-xs">
              Pioneering the future of education in Gujarat with industry-aligned programs and world-class faculty.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, MessageSquare, LinkIcon].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#990000] hover:border-[#990000] transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Programmes</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Campus Life</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Placement Cell</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6">Programmes</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Management</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Law</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Applied Science</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-3">
                <MapPin className="text-[#990000] shrink-0" size={20} />
                <span>JG Campus, Gulbai Tekra, Ahmedabad, Gujarat 380006</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-[#990000] shrink-0" size={20} />
                <span>+91 99099 00001</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-[#990000] shrink-0" size={20} />
                <span>admissions@jguni.in</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p className="text-center md:text-left">© 2026 JG University. All rights reserved to Swaroop Rayapalli.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
