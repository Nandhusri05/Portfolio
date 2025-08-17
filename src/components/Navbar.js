import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-3 rounded-2xl bg-[#0f0f0fcc] backdrop-blur supports-[backdrop-filter]:bg-[#0f0f0fcc] border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-bold tracking-wide text-white">
              Nandhusri
            </a>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[#08D9D6] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-lg bg-[#00ADB5] hover:bg-[#08D9D6] text-white transition"
                >
                  View Work
                </a>
              </li>
            </ul>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-white transition"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <ul className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block w-full rounded-lg px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="mt-2 block text-center px-4 py-2 rounded-lg bg-[#00ADB5] hover:bg-[#08D9D6] text-white transition"
                >
                  View Work
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
