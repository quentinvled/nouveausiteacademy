"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Accueil", href: "/" },
  {
    label: "Nos Activités",
    href: "#",
    submenu: [
      { label: "So' Academy", href: "/formations/so-academy" },
      { label: "So' Performance", href: "/performance/so-performance" },
      { label: "So' Thérapies", href: "/therapies/so-therapies" },
    ],
  },
  { label: "Programmes", href: "#programmes" },
  { label: "Philosophie", href: "#philosophie" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-100"
          : "bg-white/95 backdrop-blur-xl border-b border-gray-100"
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
            className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.submenu ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-600 hover:text-[#1E6BF1] hover:bg-blue-50"
                >
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-0 mt-2 w-52 transition-all duration-200 ${
                    openDropdown === item.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1E6BF1] hover:bg-blue-50 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E6BF1] flex-shrink-0" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-600 hover:text-[#1E6BF1] hover:bg-blue-50"
              >
                {item.label}
              </a>
            )
          )}
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
          className="md:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
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
