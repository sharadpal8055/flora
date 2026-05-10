import { useState } from "react";
import {
  ChevronDown,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Home",
      href: "#hero",
    },
    {
      label: "Plants Type",
      href: "#plants",
      icon: <ChevronDown size={15} strokeWidth={2.2} />,
    },
    {
      label: "More",
      href: "#more",
    },
    {
      label: "Contact",
      href: "#footer",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="absolute top-0 left-0 z-50 w-full">
        <nav className="w-full px-8 md:px-14 lg:px-20 pt-10 pb-3">
          <div className="grid grid-cols-3 items-center">

            {/* LOGO */}
            <div className="flex items-center">
              <a
                href="#hero"
                className="flex items-center gap-3"
              >
                <span className="text-[44px] leading-none">
                  🪴
                </span>

                <h1
                  className="
                  text-white
                  text-[34px]
                  font-bold
                  tracking-[-1.5px]
                  leading-none
                "
                >
                  FloraVision
                  <span className="text-[#D9D9D9]">.</span>
                </h1>
              </a>
            </div>

            {/* CENTER NAV */}
            <ul
              className="
              hidden
              md:flex
              justify-center
              items-center
              gap-20
            "
            >
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                    flex
                    items-center
                    gap-1.5

                    text-white
                    text-[20px]
                    font-[300]
                    tracking-[0.3px]

                    hover:text-white/90
                    transition-all
                    duration-300
                  "
                  >
                    {link.label}
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>

            {/* RIGHT ICONS */}
            <div
              className="
              hidden
              md:flex
              justify-end
              items-center
              gap-8
            "
            >
              {/* SEARCH */}
              <button
                className="
                text-white/95
                hover:text-white
                transition-all
                duration-300
              "
              >
                <Search
                  size={34}
                  strokeWidth={1.7}
                />
              </button>

              {/* CART */}
              <button
                className="
                text-white/95
                hover:text-white
                transition-all
                duration-300
              "
              >
                <ShoppingBag
                  size={27}
                  strokeWidth={1.8}
                />
              </button>

              {/* CUSTOM HAMBURGER */}
              <button
                className="
                text-white/95
                hover:text-white
                transition-all
                duration-300
              "
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7H20"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M8 12H20"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M4 17H20"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="flex justify-end md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-white"
              >
                {open ? (
                  <X size={32} strokeWidth={2} />
                ) : (
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 7H20"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M8 12H20"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4 17H20"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="
            md:hidden
            mx-5
            mt-4

            rounded-3xl
            border
            border-white/10

            bg-black/40
            backdrop-blur-2xl

            p-7
          "
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                  text-white
                  text-[20px]
                  font-[300]
                  tracking-[0.3px]

                  hover:text-white/80
                  transition-all
                "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}