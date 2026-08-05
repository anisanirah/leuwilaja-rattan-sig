"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Pengepul", href: "/pengepul" },
  { name: "Peta", href: "/peta" },
  { name: "Tentang", href: "/tentang" },
  { name: "Galeri", href: "/galeri" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Pakai Gambar Tengah */}
          <Link href="/admin" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden">
              <Image
                src="/logo/logo.png"
                alt="Leuwilaja Logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-stone-900">Leuwilaja</span>
              <span className="text-[10px] text-stone-500">SIG Pengepul Rotan</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#E8F3E8] text-[#4E6B53]"
                      : "text-stone-700 hover:bg-gray-100 hover:text-[#4E6B53]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-stone-700 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-stone-700 transition-all duration-300 ${
                isOpen ? "opacity-0" : "my-1"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-stone-700 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#E8F3E8] text-[#4E6B53]"
                      : "text-stone-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}