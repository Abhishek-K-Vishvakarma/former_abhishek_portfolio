"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">

      {/* Floating Navbar */}
      <div
        className="
          max-w-7xl mx-auto
          rounded-[28px]
          border border-white/10
          bg-[#07111f]/70
          backdrop-blur-2xl
          shadow-[0_10px_60px_rgba(0,0,0,0.45)]
          relative
          overflow-hidden
        "
      >

        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/10 blur-[100px] rounded-full"></div>

        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-[28px] border border-white/5"></div>

        <div className="relative z-10 px-6 md:px-10 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="group relative">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Abhi
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 bg-clip-text text-transparent">
                shek
              </span>
            </h1>
            <div className="
              absolute -bottom-1 left-0 h-[3px] w-0 rounded-full
              bg-gradient-to-r from-cyan-400 to-pink-500
              group-hover:w-full transition-all duration-500
            "></div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`
                  relative px-6 py-3 rounded-2xl text-[15px] font-semibold
                  transition-all duration-300 group
                  ${ pathname === item.path
                    ? "text-white bg-white/10 border border-cyan-400/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <span className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-pink-500/0
                  opacity-0 group-hover:opacity-100 transition-all duration-500
                "></span>
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Hire Button Desktop */}
            <Link
              href="/contact"
              className="
                hidden md:flex items-center gap-2
                relative overflow-hidden
                px-7 py-3 rounded-2xl
                font-semibold text-white
                bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500
                shadow-[0_10px_40px_rgba(34,211,238,0.35)]
                hover:scale-105 transition-all duration-300
              "
            >
              <span className="relative z-10">Hire Me</span>
              <div className="
                absolute inset-0 translate-x-[-100%] hover:translate-x-[100%]
                transition-all duration-1000
                bg-gradient-to-r from-transparent via-white/20 to-transparent
              "></div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden w-12 h-12 rounded-2xl
                border border-white/10 bg-white/5 backdrop-blur-xl
                flex items-center justify-center text-white
                hover:bg-cyan-500/10 hover:border-cyan-400/30
                transition-all duration-300
              "
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* ================================
            MOBILE MENU
        ================================ */}
        <div
          className={`
            md:hidden transition-all duration-500 overflow-hidden
            ${ open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" }
          `}
        >
          {/* Divider */}
          <div className="mx-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="px-5 py-5 flex flex-col gap-3">

            {/* Nav Links */}
            {navLinks.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    relative overflow-hidden
                    rounded-2xl px-5 py-4
                    font-semibold text-[15px]
                    flex items-center justify-between
                    transition-all duration-300 group
                    ${ isActive
                      ? `
                          text-white
                          bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-pink-500/20
                          border border-cyan-400/40
                          shadow-[0_0_20px_rgba(34,211,238,0.1)]
                        `
                      : `
                          text-slate-300
                          border border-white/8
                          bg-white/5
                          hover:text-white
                          hover:border-cyan-400/20
                          hover:bg-cyan-500/10
                        `
                    }
                  `}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator dot + arrow */}
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-cyan-400 text-xs font-medium">Active</span>
                      </span>
                    ) : (
                      <span className="
                        text-slate-500 group-hover:text-cyan-400
                        group-hover:translate-x-1
                        transition-all duration-300
                        text-lg
                      ">→</span>
                    )}
                  </span>

                  {/* Active left border glow bar */}
                  {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 to-pink-500"></div>
                  )}

                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="
                mt-1 text-center py-4 rounded-2xl
                font-semibold text-white
                bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500
                shadow-[0_8px_30px_rgba(34,211,238,0.3)]
                hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(34,211,238,0.45)]
                transition-all duration-300
                relative overflow-hidden
              "
            >
              <span className="relative z-10">✉ Hire Me</span>
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
}