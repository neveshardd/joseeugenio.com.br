import { getPageContent } from "@/lib/api";

export default async function AboutHero() {
  const content = await getPageContent('about_hero') || {
    name: 'José Eugênio',
    subtitle: 'Estudante de Arquitetura & BIM Specialist',
    quote: '"A arquitetura não é sobre concreto e aço, mas sobre a luz que eles capturam e o silêncio que eles guardam."'
  };

  return (
    <section className="section bg-neutral-50 border-b border-border pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Background Architectural Initials - Subtle decorative watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60vw] font-bold text-black/1 leading-none pointer-events-none select-none tracking-tighter whitespace-nowrap">
        ABOUT
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-px bg-black/20" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black/40">
              {content.subtitle || 'Estudante de Arquitetura & BIM Specialist'}
            </span>
            <div className="w-12 h-px bg-black/20" />
          </div>

          <h1 className="hero-title text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tighter leading-[0.8] mb-16 uppercase wrap-break-word w-full">
            {content.name || 'José Eugênio'}
          </h1>

          <div className="w-full max-w-3xl border-t border-black/5 pt-16">
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light italic">
              {content.quote || '"A arquitetura não é sobre concreto e aço, mas sobre a luz que eles capturam e o silêncio que eles guardam."'}
            </p>
          </div>

        </div>
      </div>

      {/* Footer decoration */}
      <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-8">
        <span className="text-[8px] font-bold tracking-[0.6em] uppercase text-black/20">BIO / PROFILE</span>
        <div className="w-32 h-px bg-black/5" />
      </div>
    </section>
  );
}
