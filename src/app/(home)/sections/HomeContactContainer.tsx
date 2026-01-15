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

  if (!content) return null;

  return (
    <HomeContactSection
      label={content.label}
      title={content.title}
      description={content.description}
      primaryCtaText={content.primaryCtaText}
      primaryCtaLink={content.primaryCtaLink}
      secondaryCtaText={content.secondaryCtaText}
      secondaryCtaLink={content.secondaryCtaLink}
    />
  );
}
