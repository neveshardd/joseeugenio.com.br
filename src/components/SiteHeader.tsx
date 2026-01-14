"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHomePage ? window.innerHeight * 0.9 : 20;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header 
      className={cn(
        "site-header fixed top-0 left-0 right-0 flex justify-between items-center w-full z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-1" 
          : isHomePage ? "bg-black/10 backdrop-blur-md border-none py-3" : "bg-white/50 backdrop-blur-md py-3"
      )}
    >
      <Link 
        href="/" 
        className="brand transition-opacity duration-300 hover:opacity-80"
      >
        <img 
          src={(isHomePage && !isScrolled) ? "/logo-white.png" : "/Artboard 1.png"} 
          alt="José Eugênio" 
          className="h-16 w-auto object-contain"
        />
      </Link>
      <Navigation isScrolled={!isHomePage || isScrolled} />
      <MobileMenu isScrolled={!isHomePage || isScrolled} />
    </header>
  );
}
