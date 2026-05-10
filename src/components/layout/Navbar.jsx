import { useState } from "react";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import IconBtn from "../ui/IconBtn";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Plants Type", href: "#top-selling", icon: <ChevronDown size={12} /> },
    { label: "More", href: "#o2" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0D1B0F] border-b border-[#2D4A2F] px-6 md:px-10 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 font-serif font-bold text-xl text-[#E8EDE8]">
            <span className="text-2xl">🌿</span>
            FloraVision<span className="text-[#A8C5A0]">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative group flex items-center gap-1 text-sm font-medium text-[#7A9E7A] hover:text-[#E8EDE8] transition-colors duration-200"
                >
                  {l.label}
                  {l.icon}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#A8C5A0] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-2">
            <IconBtn aria-label="Search"><Search size={15} /></IconBtn>
            <IconBtn aria-label="Cart"><ShoppingBag size={15} /></IconBtn>
            <IconBtn aria-label="Menu">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </IconBtn>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#E8EDE8] p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#162118] border-b border-[#2D4A2F] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#7A9E7A] hover:text-[#E8EDE8] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}