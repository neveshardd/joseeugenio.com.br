"use client";

import { useQuery } from "@tanstack/react-query";
import { getPageContent } from "@/lib/api";
import HomeContactSection from "./HomeContactSection";
import { Loader2 } from "lucide-react";

export default function HomeContactContainer() {
  const { data: content, isLoading } = useQuery({
    queryKey: ["page-content", "home_contact"],
    queryFn: () => getPageContent("home_contact"),
  });

  if (isLoading) {
    return (
      <section className="py-24 flex justify-center bg-neutral-50 border-t border-border">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground/20" />
      </section>
    );
  }

  const defaultData = {
    label: "Disponibilidade",
    title: "Vamos criar<br />algo único?",
    description: "Estou disponível para colaborações, estágios e projetos freelance de visualização arquitetônica.",
    primaryCtaText: "Iniciar Conversa",
    primaryCtaLink: "/contato",
    secondaryCtaText: "Enviar E-mail",
    secondaryCtaLink: "mailto:contact@joseeugenio.com.br"
  };

  const data = { ...defaultData, ...content };

  return (
    <HomeContactSection
      label={data.label}
      title={data.title}
      description={data.description}
      primaryCtaText={data.primaryCtaText}
      primaryCtaLink={data.primaryCtaLink}
      secondaryCtaText={data.secondaryCtaText}
      secondaryCtaLink={data.secondaryCtaLink}
    />
  );
}
