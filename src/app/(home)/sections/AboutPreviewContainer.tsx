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

  if (!content) return null;

  return (
    <AboutPreviewSection
      label={content.label}
      heading={content.heading}
      paragraphs={[content.paragraph1, content.paragraph2].filter(Boolean)}
      ctaText={content.ctaText}
      ctaLink={content.ctaLink}
    />
  );
}
