"use client";
import Link from "next/link";
import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
// import { LogoFacebook } from "@gravity-ui/icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-gray-400 py-12 px-6 md:px-16 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Section: Brand info + Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center text-3xl font-bold tracking-tight select-none"
            >
              <span className="text-[#0088ff]">hire</span>
              <span className="text-[#ff6b00]">loop</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Nav Columns Container */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Product */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[#5a50fe] text-base font-semibold">
                Product
              </h3>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Job discovery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Worker AI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Salary data
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigations */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[#5a50fe] text-base font-semibold">
                Navigations
              </h3>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Career library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[#5a50fe] text-base font-semibold">
                Resources
              </h3>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Brand Guideline
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Social Icons + Copyright */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-6">
          {/* Social Icons using Gravity UI Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-[#111214] border border-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <LogoFacebook width={18} height={18} />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-[#111214] border border-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <LogoLinkedin width={18} height={18} />
            </a>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-gray-500 text-center sm:text-right">
            <span>Copyright 2024 —Programming Hero</span>
            <div className="flex items-center gap-2">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Terms & Policy
              </Link>
              <span>-</span>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
