import { getPageContent } from "@/lib/api";

export default async function AboutHero() {
  const content = await getPageContent('about_hero');

  if (!content) return null;

  return (
    <section className="section bg-secondary/30 border-b border-border py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="hero-title text-5xl mb-4 font-light tracking-tighter leading-[0.9] -ml-[0.05em]">
            {content.name || 'José Eugênio'}
          </h1>
          <span className="text-muted-foreground tracking-widest uppercase mb-8 text-sm">
            {content.subtitle || 'Estudante de Arquitetura & BIM Specialist'}
          </span>
          <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
            {content.quote || '"A arquitetura não é sobre concreto e aço, mas sobre a luz que eles capturam e o silêncio que eles guardam."'}
          </p>
        </div>
        <div className="relative min-h-[400px] bg-secondary flex items-center justify-center text-muted-foreground text-center p-8">
          {content.imageUrl ? (
            <img src={content.imageUrl} alt={content.name} className="w-full h-full object-cover" />
          ) : (
            <div className="border border-dashed border-muted-foreground/30 p-8 w-full h-full flex items-center justify-center">
              [Retrato do Arquiteto]
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
