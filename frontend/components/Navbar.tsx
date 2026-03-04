"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Open Source", "/open-source"],
  ["Research", "/research"],
  ["Blog", "/blog"],
  ["Experiments", "/experiments"],
  ["Contact", "/contact"]
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full px-6 py-4 transition ${scrolled ? "glass-nav" : "bg-transparent"}`}>
      <ul className="mx-auto flex max-w-6xl flex-wrap gap-4 text-sm font-medium md:gap-6">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="text-text/90 transition hover:text-text">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
