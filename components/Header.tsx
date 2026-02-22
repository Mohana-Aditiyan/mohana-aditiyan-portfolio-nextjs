"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
  <header className="fixed top-0 left-0 w-full h-20 z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        
        <Link
          href="/"
          className="text-lg font-semibold tracking-wider hover:text-[#39FF14] transition duration-300"
        >
          MOHANA ADITIYAN P
        </Link>

       <nav className="hidden md:flex gap-10 text-sm font-medium">

  {pathname !== "/" && (
    <Link
      href="/"
      className={`relative transition duration-300 hover:text-[#39FF14] ${
        pathname === "/" ? "text-[#39FF14]" : "text-white"
      }`}
    >
      Home
      {pathname === "/" && (
        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#39FF14]"></span>
      )}
    </Link>
  )}

  <Link
    href="/about"
    className={`relative transition duration-300 hover:text-[#39FF14] ${
      pathname === "/about" ? "text-[#39FF14]" : "text-white"
    }`}
  >
    About
    {pathname === "/about" && (
      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#39FF14]"></span>
    )}
  </Link>

  <Link
    href="/skills"
    className={`relative transition duration-300 hover:text-[#39FF14] ${
      pathname === "/skills" ? "text-[#39FF14]" : "text-white"
    }`}
  >
    Skills
    {pathname === "/skills" && (
      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#39FF14]"></span>
    )}
  </Link>

  <Link
    href="/projects"
    className={`relative transition duration-300 hover:text-[#39FF14] ${
      pathname === "/projects" ? "text-[#39FF14]" : "text-white"
    }`}
  >
    Projects
    {pathname === "/projects" && (
      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#39FF14]"></span>
    )}
  </Link>

  <Link
    href="/contact"
    className={`relative transition duration-300 hover:text-[#39FF14] ${
      pathname === "/contact" ? "text-[#39FF14]" : "text-white"
    }`}
  >
    Contact
    {pathname === "/contact" && (
      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#39FF14]"></span>
    )}
  </Link>

</nav>
      </div>
    </header>
  );
}
