"use client";

import { useQuery } from "@tanstack/react-query";
import { getPageContent } from "@/lib/api";
import AboutPreviewSection from "./AboutPreviewSection";
import { Loader2 } from "lucide-react";

export default function AboutPreviewContainer() {
  const { data: content, isLoading } = useQuery({
    queryKey: ["page-content", "home_about_preview"],
    queryFn: () => getPageContent("home_about_preview"),
  });

  if (isLoading) {
    return (
      <section className="py-24 flex justify-center bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground/20" />
      </section>
    );
  }

  // Fallback data if API fails or content is empty
  const defaultData = {
    label: "O Perfil",
    heading: "Atemporalidade<br/>é minha busca<br/>constante.",
    paragraph1: "Acredito que a arquitetura é a arte de emoldurar o vazio. Em um mundo saturado de ruído visual, busco o silêncio. Meu trabalho acadêmico é definido pela pesquisa da honestidade dos materiais — concreto aparente, aço bruto e vidro límpido.",
    paragraph2: "Como estudante de arquitetura, cada projeto é um exercício de diálogo entre a estrutura e o ambiente. Não projeto no terreno; projeto <em>com</em> o terreno.",
    ctaText: "Conheça Minha Trajetória",
    ctaLink: "/sobre"
  };

  const data = { ...defaultData, ...content };

  return (
    <AboutPreviewSection
      label={data.label}
      heading={data.heading}
      paragraphs={[data.paragraph1, data.paragraph2].filter(Boolean)}
      ctaText={data.ctaText}
      ctaLink={data.ctaLink}
    />
  );
}
