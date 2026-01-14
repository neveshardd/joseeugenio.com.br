import { cn } from "@/lib/utils";
import { getPageContent } from "@/lib/api";

export default async function ServicesHero() {
  const content = await getPageContent('services_hero') || {
      title: 'Soluções em<br/>Arquitetura Digital',
      description: 'Trabalho na intersecção entre o design atemporal e a tecnologia de ponta, entregando projetos precisos e visualmente impactantes.',
      buttonText: 'Solicitar Proposta',
      buttonLink: '/contato'
  };

  return (
    <section className="section bg-secondary/30 border-b border-border py-24 px-6 md:px-12">
      <div className="max-w-[800px]">
        <h1 
            className="hero-title text-[clamp(2.5rem,5vw,5rem)] mb-8 font-light tracking-tighter leading-[0.9] -ml-[0.05em]"
            dangerouslySetInnerHTML={{ __html: content.title }}
        />
        <p className="text-lg leading-relaxed mb-12 text-muted-foreground">
          {content.description}
        </p>
        <a 
          href={content.buttonLink || "/contato"} 
          className="btn inline-flex items-center justify-center px-10 py-4 text-sm font-medium uppercase tracking-wider text-white bg-foreground transition-all duration-300 border border-foreground hover:bg-transparent hover:text-foreground hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
        >
          {content.buttonText || "Solicitar Proposta"}
        </a>
      </div>
    </section>
  );
}
