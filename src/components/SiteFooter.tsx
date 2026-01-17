"use client";

import { useQuery } from "@tanstack/react-query";
import { getPageContent } from "@/lib/api";

export default function SiteFooter() {
  const { data: contactInfo } = useQuery({
    queryKey: ["page-content", "contact_info"],
    queryFn: () => getPageContent("contact_info"),
  });

  const currentYear = new Date().getFullYear();
  const name = contactInfo?.name || "José Eugênio";
  const role = contactInfo?.role || "Estudante de Arquitetura";

  const socials = [
    { name: "Instagram", href: "https://instagram.com/soujoseeugenio" },
    // { name: "LinkedIn", href: contactInfo?.linkedin || "#" },
    // { name: "Behance", href: contactInfo?.behance || "#" },
  ];

  return (
    <footer className="site-footer flex flex-col gap-8 bg-neutral-50 border-t border-border py-16 px-12 md:flex-row md:justify-between md:items-end">
      <div className="text-sm text-muted-foreground">
        © {currentYear} {name} — {role}
      </div>
      <div className="flex gap-8">
        {socials.map((social) => (
          <a 
            key={social.name} 
            href={social.href} 
            target="_blank"
            rel="noopener noreferrer"
            className="link-simple text-sm font-medium text-foreground no-underline hover:underline hover:underline-offset-4"
          >
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
