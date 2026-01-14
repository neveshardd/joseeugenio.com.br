import Link from "next/link";
import { getPageContent } from "@/lib/api";

export default async function ServicesCTA() {
  const content = await getPageContent('services_cta');

  if (!content) return null;

  return (
    <section className="section text-center py-40 border-b border-border px-6 md:px-12">
      <h2 className="text-3xl font-light mb-8">{content.title}</h2>
      <p className="text-muted-foreground mb-12 max-w-[600px] mx-auto leading-relaxed">
        {content.description}
      </p>
      <Link 
        href={content.buttonLink || "/contato"} 
        className="btn inline-flex items-center justify-center px-10 py-4 text-sm font-medium uppercase tracking-wider text-white bg-foreground transition-all duration-300 border border-foreground hover:bg-transparent hover:text-foreground hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
      >
        {content.buttonText || "Solicitar Orçamento"}
      </Link>
    </section>
  );
}
