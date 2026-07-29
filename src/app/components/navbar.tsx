"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#approach" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 24) {
        setVisible(true);
      } else if (delta > 6) {
        setVisible(false);
      } else if (delta < -6) {
        setVisible(true);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-5 sm:pt-5 transition-transform duration-300 ease-out " +
        (visible ? "translate-y-0" : "-translate-y-[120%]")
      }
    >
      <nav
        className={
          "pointer-events-auto flex w-[min(920px,94%)] items-center justify-between gap-4 rounded-full border border-neutral-200 bg-white py-2.5 pl-6 pr-2.5 shadow-sm transition-opacity duration-300 " +
          (visible ? "opacity-100" : "opacity-0")
        }
      >
        <a href="/" className="flex items-center gap-2 font-semibold" aria-label="Home">
          <span className="h-2 w-2 rounded-full bg-black" />
          <span>Esteban Retana</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-bold text-neutral-800 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="transition-colors hover:text-black">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/#contact" aria-label="Get in touch">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform duration-300 hover:-translate-y-0.5">
            <FiArrowUpRight className="h-5 w-5" />
          </span>
        </a>
      </nav>
    </div>
  );
}
