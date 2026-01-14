"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation({ isScrolled = false }: { isScrolled?: boolean }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="nav hidden md:flex gap-8">
      {[
        { href: "/", label: "Início" },
        { href: "/projetos", label: "Projetos" },
        { href: "/servicos", label: "Serviços" },
        { href: "/sobre", label: "Perfil" },
        { href: "/contato", label: "Contato" },
      ].map(({ href, label }) => (
        <Link 
          key={href}
          href={href} 
          className={cn(
            "nav-link no-underline uppercase text-xs font-medium tracking-wider relative pb-1 transition-colors",
            isScrolled 
              ? "text-muted-foreground hover:text-foreground" 
              : "text-white/70 hover:text-white",
            isActive(href) && (isScrolled 
              ? "active text-foreground font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground" 
              : "active text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white")
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
