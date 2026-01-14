import { getBIMFeatures, getPageContent } from "@/lib/api";

export default async function BIMMethodology() {
  const intro = await getPageContent('bim_intro') || {
      section_label: 'Diferencial Técnico',
      title: 'A Metodologia BIM como Pilar',
      description: 'Minha abordagem não é apenas visual. Cada parede, viga e esquadria contém dados técnicos que garantem a viabilidade do projeto.'
  };
  let features = await getBIMFeatures();
  
  if (!features || features.length === 0) {
    features = [
      { id: 1, title: 'Coordenação', description: 'Redução drástica de erros e incompatibilidades em obra.' },
      { id: 2, title: 'Precisão', description: 'Extração automática de quantitativos e orçamentos assertivos.' }
    ];
  }

  return (
    <section className="section border-b border-border py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="section-label mb-8 block text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              {intro.section_label || "Diferencial Técnico"}
          </h2>
          <h3 className="hero-title text-[2.5rem] mb-6 font-light tracking-tighter leading-[0.9] -ml-[0.05em]">
            {intro.title}
          </h3>
          <p className="text-muted-foreground mb-8 max-w-[400px] leading-relaxed">
            {intro.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item: any) => (
            <div key={item.id}>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
