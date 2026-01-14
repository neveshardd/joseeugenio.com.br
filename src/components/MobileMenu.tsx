"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MobileMenu({ isScrolled = false }: { isScrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useGSAP(() => {
    if (isOpen) {
      // Open Animation
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        display: "flex"
      });
      
      const links = linksRef.current?.children;
      if (links) {
        gsap.fromTo(links, 
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.4, 
            stagger: 0.1, 
            delay: 0.2,
            ease: "back.out(1.7)" 
          }
        );
      }
    } else {
      // Close Animation
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        display: "none"
      });
    }
  }, { dependencies: [isOpen] });

  const links = [
    { href: "/", label: "Início" },
    { href: "/projetos", label: "Projetos" },
    { href: "/servicos", label: "Serviços" },
    { href: "/sobre", label: "Perfil" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <div className="md:hidden">
      <button 
        ref={triggerRef}
        onClick={toggleMenu} 
        className={cn(
          "relative z-60 p-2 -mr-2 active:scale-95 transition-transform",
          isOpen ? "text-foreground" : (isScrolled ? "text-foreground" : "text-white")
        )}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div 
        ref={menuRef}
        className="fixed inset-0 z-50 bg-background flex-col justify-center items-center hidden opacity-0"
      >
        <div className="absolute top-0 right-0 p-8 w-full flex justify-end">
          {/* Placeholder for header alignment if needed */}
        </div>
        
        <nav ref={linksRef} className="flex flex-col gap-8 text-center">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={cn(
                "text-3xl font-light tracking-tight hover:text-muted-foreground transition-colors",
                pathname === link.href && "font-medium text-foreground underline underline-offset-8"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-12 flex flex-col items-center gap-4 text-sm text-muted-foreground">
           <a href="mailto:contact@joseeugenio.com.br" className="hover:text-foreground">contact@joseeugenio.com.br</a>
           <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Instagram</a>
              <a href="#" className="hover:text-foreground">LinkedIn</a>
           </div>
        </div>
      </div>
    </div>
  );
}
