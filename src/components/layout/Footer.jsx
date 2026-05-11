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
    <footer
      id="footer"
      className="relative px-8 md:px-16 lg:px-24 pt-20 pb-10 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">🪴</span>
              <span className="font-serif text-white text-[2.2rem] font-bold tracking-[-1px]">
                FloraVision<span className="text-white/50">.</span>
              </span>
            </div>
            <p className="text-white/50 text-[1rem] leading-[1.8] max-w-[280px] mb-7">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>
            <div className="flex gap-8">
              {["FB", "TW", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-white/60 text-[1rem] font-semibold tracking-widest hover:text-white transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white text-[1.3rem] font-semibold mb-7 tracking-wide">
              Quick Link's
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/55 text-[1rem] hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-white text-[1.3rem] font-semibold mb-7 tracking-wide">
              For Every Update.
            </h4>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                aria-label="Email for newsletter"
                className="
                  flex-1
                  bg-transparent
                  border border-white/30
                  border-r-0
                  rounded-l-lg
                  text-white
                  text-[0.95rem]
                  px-5 py-4
                  outline-none
                  placeholder-white/30
                  focus:border-white/60
                  transition-colors
                "
              />
              <button className="
                bg-white text-black
                text-[0.85rem] font-bold
                tracking-widest
                px-6 py-4
                rounded-r-lg
                border border-white
                hover:bg-transparent hover:text-white
                transition-all duration-300
              ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[0.9rem]">
            © 2024 FloraVision. All rights reserved.
          </p>
          <span className="border border-white/20 text-white/40 text-[0.85rem] px-5 py-1.5 rounded-md">
            FloraVision © all right reserve
          </span>
        </div>
      </div>
    </footer>
  );
}
