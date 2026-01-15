"use client";

import { useQuery } from "@tanstack/react-query";
import { getPageContent } from "@/lib/api";
import HeroSection from "./HeroSection";
import { Loader2 } from "lucide-react";

export default function HeroContainer() {
  const { data: content, isLoading } = useQuery({
    queryKey: ["page-content", "home_hero"],
    queryFn: () => getPageContent("home_hero"),
  });

  if (isLoading) {
    return (
      <section className="h-screen w-full flex items-center justify-center bg-black">
        <Loader2 className="h-8 w-8 animate-spin text-white/20" />
      </section>
    );
  }

  if (!content) return null;

  return (
    <HeroSection
      title={content.title}
      subtitle={content.subtitle}
      ctaText={content.ctaText}
      ctaLink={content.ctaLink}
      imageSrc={content.imageSrc}
      imageAlt={content.imageAlt}
    />
  );
}
