"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="https://soacademysite.vled.fr/logosansfond%20(4).png"
            alt="So' Academy"
            width={160}
            height={48}
            className={`h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              scrolled ? "brightness-100" : "brightness-200"
            }`}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "Formations", href: "#piliers" },
            { label: "Programmes", href: "#programmes" },
            { label: "Philosophie", href: "#philosophie" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-[#1E6BF1] ${
                scrolled
                  ? "text-gray-600 hover:bg-blue-50"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#piliers"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer bg-[#1E6BF1] text-white hover:bg-[#155fd8] shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0"
        >
          Commencer
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
