import { getPageContent } from "@/lib/api";

export default async function AboutManifesto() {
  const content = await getPageContent('about_manifesto');

  if (!content) return null;

  return (
    <section className="section border-b border-border py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-label mb-8 text-xs tracking-widest uppercase block font-semibold text-muted-foreground">
            {content.sectionLabel || 'Abordagem'}
          </h2>
          <h3 
            className="text-3xl font-light mb-6 tracking-tight"
            dangerouslySetInnerHTML={{ __html: content.title || 'Minimalismo com<br/>Propósito Humano.' }}
          />
        </div>
        <div className="text-muted-foreground leading-relaxed">
          {content.paragraph1 && <p className="mb-6">{content.paragraph1}</p>}
          {content.paragraph2 && <p className="mb-6">{content.paragraph2}</p>}
        </div>
      </div>
    </section>
  );
}
