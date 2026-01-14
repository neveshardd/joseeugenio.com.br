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

  const defaultData = {
    title: "Arquitetura<br />do Silêncio",
    subtitle: "Moldando o vazio. Esculpindo a luz.",
    ctaText: "Ver Portfólio Completo",
    ctaLink: "/projetos",
    imageSrc: "/hero.jpg"
  };

  const data = { ...defaultData, ...content };

  return (
    <HeroSection
      title={data.title}
      subtitle={data.subtitle}
      ctaText={data.ctaText}
      ctaLink={data.ctaLink}
      imageSrc={data.imageSrc}
    />
  );
}
