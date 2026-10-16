"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#1b1c1e] py-4 md:py-6 px-4 flex justify-center sticky top-0 z-50">
      <nav
        aria-label="Main Navigation"
        className="w-full max-w-7xl bg-[#242528] text-white rounded-2xl px-6 py-3 md:py-0 md:h-16 flex flex-col md:flex-row items-center justify-between shadow-lg border border-white/5 transition-all duration-300"
      >
        {/* Top Bar: Brand Logo + Mobile Hamburger Button */}
        <div className="w-full md:w-auto flex items-center justify-between h-10 md:h-full">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold tracking-tight select-none"
          >
            <span className="text-[#0088ff]">hire</span>
            <span className="text-[#ff6b00]">loop</span>
          </Link>

          {/* Mobile Hamburger / Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none p-1"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              // Close (X) Icon
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Content (Responsive Wrapper) */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:w-auto items-center gap-4 md:gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-gray-700/50 md:border-none mt-3 md:mt-0`}
        >
          {/* Main Links List */}
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 list-none m-0 p-0 w-full md:w-auto text-center">
            <li>
              <Link
                href="/browse-jobs"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors block py-1"
                onClick={() => setIsOpen(false)}
              >
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors block py-1"
                onClick={() => setIsOpen(false)}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors block py-1"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>
          </ul>

          {/* Desktop Vertical Separator Line */}
          <div
            className="hidden md:block h-5 w-[1px] bg-gray-700/60"
            aria-hidden="true"
          />

          {/* Action Links & Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 w-full md:w-auto pt-2 md:pt-0">
            <Link
              href="/sign-in"
              className="text-[#8f92ff] hover:text-[#a8abff] text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>

            <Link
              href="/get-started"
              className="w-full md:w-auto text-center bg-gradient-to-r from-[#5a50fe] to-[#6b62ff] text-white font-medium px-5 py-2.5 rounded-xl text-sm shadow-md hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
