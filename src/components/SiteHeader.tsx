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
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.9;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header 
      className={cn(
        "site-header flex justify-between items-center w-full z-50 transition-all duration-300 px-6 md:px-12",
        isHomePage 
          ? `fixed top-0 ${isScrolled ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-black/10 backdrop-blur-md border-none py-8"}`
          : "relative bg-white border-b border-border py-6"
      )}
    >
      <Link 
        href="/" 
        className={cn(
          "brand text-xl font-semibold uppercase tracking-tighter no-underline transition-colors duration-300",
          (isHomePage && !isScrolled) ? "text-white" : "text-foreground"
        )}
      >
        José Eugênio
      </Link>
      <Navigation isScrolled={!isHomePage || isScrolled} />
      <MobileMenu isScrolled={!isHomePage || isScrolled} />
    </header>
  );
}
