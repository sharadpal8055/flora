import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "Type's Of plant's", href: "#top-selling" },
    { label: "Contact", href: "#footer" },
    { label: "Privacy", href: "#" },
  ];

  return (
    <footer id="footer" className="border-t border-[#1e2e20] px-6 md:px-10 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-[#E8EDE8] mb-3">
              <span className="text-2xl">🌿</span>
              FloraVision<span className="text-[#A8C5A0]">.</span>
            </div>
            <p className="text-[#7A9E7A] text-sm leading-relaxed max-w-xs mb-5">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>
            <div className="flex gap-4 text-sm font-semibold text-[#7A9E7A]">
              {["FB", "TW", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="hover:text-[#E8EDE8] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#E8EDE8] font-semibold text-sm mb-4">
              Quick Link's
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#7A9E7A] text-sm hover:text-[#E8EDE8] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#E8EDE8] font-semibold text-sm mb-4">
              For Every Update.
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                aria-label="Email for newsletter"
                className="flex-1 bg-[#0D1B0F] border border-[#2D4A2F] rounded-md text-[#E8EDE8] text-sm px-3 py-2 outline-none placeholder-[#4a6e4c] focus:border-[#A8C5A0] transition-colors"
              />
              <button className="bg-[#E8EDE8] text-[#0D1B0F] text-xs font-bold px-3 py-2 rounded-md hover:bg-[#c8dfc0] transition-colors tracking-wide">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1e2e20] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7A9E7A] text-xs">
            © 2024 FloraVision. All rights reserved.
          </p>
          <span className="border border-[#2D4A2F] text-[#7A9E7A] text-xs px-3 py-1 rounded">
            FloraVision © all right reserve
          </span>
        </div>
      </div>
    </footer>
  );
}