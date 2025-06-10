"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg z-50">
      <ul className="flex gap-2 sm:gap-6">
        <li>
          <Link
            href="/"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              pathname === "/" 
              ? "bg-white text-gray-800" 
              : "text-white hover:bg-white/10"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              pathname === "/about"
              ? "bg-white text-gray-800"
              : "text-white hover:bg-white/10"
            }`}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              pathname === "/projects"
              ? "bg-white text-gray-800"
              : "text-white hover:bg-white/10"
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              pathname === "/contact"
              ? "bg-white text-gray-800"
              : "text-white hover:bg-white/10"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}